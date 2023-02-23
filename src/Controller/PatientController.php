<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller;

use App\Entity\consultation;
use App\Entity\Patient;
use App\Entity\User;
use App\Event\ConsultationCreatedEvent;
use App\Form\ConsultationType;
use App\Repository\PatientRepository;
use App\Repository\TagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\Cache;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Attribute\IsGranted;

/**
 * Controller used to manage patient contents in the public part of the site.
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 */
#[Route('/patient')]
class PatientController extends AbstractController
{
    /**
     * NOTE: For standard formats, Symfony will also automatically choose the best
     * Content-Type header for the response.
     *
     * See https://symfony.com/doc/current/routing.html#special-parameters
     */
    #[Route('/', defaults: ['page' => '1', '_format' => 'html'], name: 'patient_index')]
    #[Route('/rss.xml', defaults: ['page' => '1', '_format' => 'xml'], name: 'patient_rss')]
    #[Route('/page/{page<[1-9]\d{0,8}>}', defaults: ['_format' => 'html'], name: 'patient_index_paginated')]
    #[Cache(smaxage: 10)]
    public function index(Request $request, int $page, string $_format, PatientRepository $patients): Response
    {
        $latestPatients = $patients->findLatest($page);
dd($latestPatients);
        return $this->render('patient/index.'.$_format.'.twig', [
            'paginator' => $latestPatients,
        ]);
    }

    /**
     * NOTE: The $patient controller argument is automatically injected by Symfony
     * after performing a database query looking for a Patient with the 'slug'
     * value given in the route.
     *
     * See https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html
     */
    #[Route('/patients/{slug}', methods: ['GET'], name: 'patient_patient')]
    public function patientShow(Patient $patient): Response
    {
        // Symfony's 'dump()' function is an improved version of PHP's 'var_dump()' but
        // it's not available in the 'prod' environment to prevent leaking sensitive information.
        // It can be used both in PHP files and Twig templates, but it requires to
        // have enabled the DebugBundle. Uncomment the following line to see it in action:
        //
        // dump($patient, $this->getUser(), new \DateTime());
        //
        // The result will be displayed either in the Symfony Profiler or in the stream output.
        // See https://symfony.com/doc/current/profiler.html
        // See https://symfony.com/doc/current/templates.html#the-dump-twig-utilities
        //
        // You can also leverage Symfony's 'dd()' function that dumps and
        // stops the execution

        return $this->render('patient/patient_show.html.twig', ['patient' => $patient]);
    }

    /**
     * NOTE: The ParamConverter mapping is required because the route parameter
     * (patientSlug) doesn't match any of the Doctrine entity properties (slug).
     *
     * See https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html#doctrine-converter
     */
    #[Route('/consultation/{patientSlug}/new', methods: ['POST'], name: 'consultation_new')]
    #[IsGranted('IS_AUTHENTICATED')]
    public function consultationNew(
        #[CurrentUser] User $user,
        Request $request,
        #[MapEntity(mapping: ['patientSlug' => 'slug'])] Patient $patient,
        EventDispatcherInterface $eventDispatcher,
        EntityManagerInterface $entityManager,
    ): Response {
        $consultation = new consultation();
        $consultation->setAuthor($user);
        

        $form = $this->createForm(ConsultationType::class, $consultation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($consultation);
            $entityManager->flush();

            // When an event is dispatched, Symfony notifies it to all the listeners
            // and subscribers registered to it. Listeners can modify the information
            // passed in the event and they can even modify the execution flow, so
            // there's no guarantee that the rest of this controller will be executed.
            // See https://symfony.com/doc/current/components/event_dispatcher.html
            $eventDispatcher->dispatch(new ConsultationCreatedEvent($consultation));

            return $this->redirectToRoute('patient_patient', ['slug' => $patient->getSlug()]);
        }

        return $this->render('patient/comment_form_error.html.twig', [
            'patient' => $patient,
            'form' => $form,
        ]);
    }

    /**
     * This controller is called directly via the render() function in the
     * patient/patient_show.html.twig template. That's why it's not needed to define
     * a route name for it.
     *
     * The "id" of the Patient is passed in and then turned into a Patient object
     * automatically by the ParamConverter.
     */
    public function commentForm(Patient $patient): Response
    {
        $form = $this->createForm(ConsultationType::class);

        return $this->render('patient/_comment_form.html.twig', [
            'patient' => $patient,
            'form' => $form,
        ]);
    }

    #[Route('/search', methods: ['GET'], name: 'patient_search')]
    public function search(Request $request): Response
    {
        return $this->render('patient/search.html.twig', ['query' => (string) $request->query->get('q', '')]);
    }
}