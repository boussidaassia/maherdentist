<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller\Admin;

use App\Entity\Consultation;
use App\Entity\Patient;
use App\Entity\User;
use App\Event\ConsultationCreatedEvent;
use App\Form\ConsultationType;
use App\Form\PatientType;
use App\Repository\PatientRepository;
use App\Security\PatientVoter;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Mapping\Id;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\SubmitButton;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Omines\DataTablesBundle\Adapter\ArrayAdapter;
use Omines\DataTablesBundle\Column\TextColumn;
use Omines\DataTablesBundle\DataTableFactory;
use Omines\DataTablesBundle\Adapter\Doctrine\ORMAdapter;
use Symfony\Component\HttpKernel\Attribute\Cache;

/**
 * Controller used to manage patient contents in the backend.
 *
 * Please note that the application backend is developed manually for learning
 * purposes. However, in your real Symfony application you should use any of the
 * existing bundles that let you generate ready-to-use backends without effort.
 * See https://symfony.com/bundles
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 */
#[Route('/admin/patient')]
#[IsGranted('ROLE_ADMIN')]
class PatientController extends AbstractController
{
    /**
     * Lists all Patient entities.
     *
     * This controller responds to two different routes with the same URL:
     *   * 'admin_patient_index' is the route with a name that follows the same
     *     structure as the rest of the controllers of this class.
     *   * 'admin_index' is a nice shortcut to the backend homepage. This allows
     *     to create simpler links in the templates. Moreover, in the future we
     *     could move this annotation to any other controller while maintaining
     *     the route name and therefore, without breaking any existing link.
     */
    //#[Route('/' , name: 'admin_index')]
    //#[Route('/' , name: 'admin_patient_index')]
    //public function index(
    //   #[CurrentUser] User $user,
    //    Request $request,
    //   PatientRepository $patients,

    //): Response {
    //    $authorPatients = $patients->findBy(['docteur' => $user], ['date' => 'DESC']);


   //     return $this->render('admin/patient/index.html.twig', ['patients' => $authorPatients]);
   // }




 /**
     * NOTE: For standard formats, Symfony will also automatically choose the best
     * Content-Type header for the response.
     *
     * See https://symfony.com/doc/current/routing.html#special-parameters
     */


    #[Route('/' , defaults: ['page' => '1', '_format' => 'html'], methods: ['GET'], name: 'admin_index')]
    #[Route('/' , defaults: ['page' => '1', '_format' => 'html'], methods: ['GET'], name: 'admin_patient_index')]
    #[Route('/', defaults: ['page' => '1', '_format' => 'html'], name: 'patient_index')]
    #[Route('/rss.xml', defaults: ['page' => '1', '_format' => 'xml'], name: 'patient_rss')]
    #[Route('/page/{page<[1-9]\d{0,8}>}', defaults: ['_format' => 'html'], name: 'patient_index_paginated')]
    #[Cache(smaxage: 10)]
    public function index(#[CurrentUser] User $user,Request $request, int $page, string $_format, PatientRepository $patients): Response
    {   $tag = null;
        $authorPatients = $patients->findBy(['docteur' => $user], ['date' => 'DESC']);
        $latestPatients = $patients->findBydoc($page,$user);
        return $this->render('admin/patient/index.'.$_format.'.twig', [
            'paginator' => $latestPatients,
            'patients' => $authorPatients,
            'tagName' => $tag?->getName(),
        ]);

        
        return $this->render('admin/patient/index.html.twig', ['patients' => $authorPatients]);
    }

    /**
     * Creates a new Patient entity.
     *
     * NOTE: the Method annotation is optional, but it's a recommended practice
     * to constraint the HTTP methods each controller responds to (by default
     * it responds to all methods).
     */
    #[Route('/new', methods: ['GET', 'POST'], name: 'admin_patient_new')]
    public function new(
        #[CurrentUser] User $user,
        Request $request,
        EntityManagerInterface $entityManager,
    ): Response {
        $patient = new Patient();
        $patient->setDocteur($user);

        // See https://symfony.com/doc/current/form/multiple_buttons.html
        $form = $this->createForm(PatientType::class, $patient)
            ->add('saveAndCreateNew', SubmitType::class)
        ;

        $form->handleRequest($request);

        // the isSubmitted() method is completely optional because the other
        // isValid() method already checks whether the form is submitted.
        // However, we explicitly add it to improve code readability.
        // See https://symfony.com/doc/current/forms.html#processing-forms
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($patient);
            $entityManager->flush();

            // Flash messages are used to notify the user about the result of the
            // actions. They are deleted automatically from the session as soon
            // as they are accessed.
            // See https://symfony.com/doc/current/controller.html#flash-messages
            $this->addFlash('success', 'patient.created_successfully');

            /** @var SubmitButton $submit */
            $submit = $form->get('saveAndCreateNew');

            if ($submit->isClicked()) {
                return $this->redirectToRoute('admin_patient_new');
            }

            return $this->redirectToRoute('admin_patient_index');
        }

        return $this->render('admin/patient/new.html.twig', [
            'patient' => $patient,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Finds and displays a Patient entity.
     */
    #[Route('/{id<\d+>}', methods: ['GET'], name: 'admin_patient_show')]
    public function show(Patient $patient): Response
    {
        // This security check can also be performed
        // using a PHP attribute: #[IsGranted('show', subject: 'patient', message: 'Patients can only be shown to their authors.')]
        $this->denyAccessUnlessGranted(PatientVoter::SHOW, $patient, 'Patients can only be shown to their authors.');

        return $this->render('admin/patient/show.html.twig', [
            'patient' => $patient,
        ]);
    }

    /**
     * Displays a form to edit an existing Patient entity.
     */
    #[Route('/{id<\d+>}/edit', methods: ['GET', 'POST'], name: 'admin_patient_edit')]
    #[IsGranted('edit', subject: 'patient', message: 'Patients can only be edited by their doctor.')]
    public function edit(Request $request, Patient $patient, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PatientType::class, $patient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', 'patient.updated_successfully');

            return $this->redirectToRoute('admin_patient_edit', ['id' => $patient->getId()]);
        }

        return $this->render('admin/patient/edit.html.twig', [
            'patient' => $patient,
            'form' => $form,
        ]);
    }

    /**
     * Deletes a Patient entity.
     */
    #[Route('/{id<\d+>}/delete', methods: ['GET', 'POST'], name:  'admin_patient_delete')]
    #[IsGranted('delete', subject: 'patient')]
    public function delete(Request $request, Patient $patient, EntityManagerInterface $entityManager,PatientRepository $PatientRepository): Response
    {
        /** @var string|null $token */
        $token = $request->request->get('token');

//        if (!$this->isCsrfTokenValid('delete', $token)) {
  //          return $this->redirectToRoute('admin_patient_index');
    //    }

        // Delete the tags associated with this patient patient. This is done automatically
        // by Doctrine, except for SQLite (the database used in this application)
        // because foreign key support is not enabled by default in SQLite
      //  $patient->getTags()->clear();

        $entityManager->remove($patient);
        $entityManager->flush();

        $this->addFlash('success', 'patient.deleted_successfully');

        return $this->redirectToRoute('admin_patient_index');
    }



    /**
     * NOTE: The ParamConverter mapping is required because the route parameter
     * (patientSlug) doesn't match any of the Doctrine entity properties (slug).
     *
     * See https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html#doctrine-converter
     */
    #[Route('/consultation/{patient}/new', methods: ['POST'], name: 'consultation_new')]
    #[IsGranted('IS_AUTHENTICATED')]
    public function consultationNew(
        #[CurrentUser] User $user,
        Request $request,
        Patient $patient,
        EventDispatcherInterface $eventDispatcher,
        EntityManagerInterface $entityManager,
    ): Response {
        $consultation = new Consultation();
        $consultation->setAuthor($user);
        $patient->addConsultation($consultation);

        $form = $this->createForm(ConsultationType::class, $consultation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($consultation);
            $entityManager->flush();

            return $this->redirectToRoute('admin_patient_show', ['id' => $patient->getId()]);
        }

        return $this->render('admin/patient/consultation_form_error.html.twig', [
            'patient' => $patient,
            'form' => $form,
        ]);
    }

    public function consultationForm(Patient $patient): Response
    {
        $form = $this->createForm(ConsultationType::class);

        return $this->render('admin/patient/_consultation_form.html.twig', [
            'patient' => $patient,
            'form' => $form,
        ]);
    }
    /**
     * Deletes a Patient entity.
     */
    #[Route('/consultation/{id<\d+>}/delete', methods: ['GET', 'POST'], name:  'admin_consultation_delete')]
    public function deleteConsultation(Request $request, Consultation $consultation, EntityManagerInterface $entityManager): Response
    {

        $patient = $consultation->getPatient();
        $entityManager->remove($consultation);
        $entityManager->flush();

        $this->addFlash('success', 'consultation.deleted_successfully');

        return $this->redirectToRoute('admin_patient_show', ['id'=>$patient->getId()]);
    }
}