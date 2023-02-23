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

}
