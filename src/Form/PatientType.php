<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Form;

use App\Entity\Patient;
use App\Form\Type\DateTimePickerType;
use App\Form\Type\TagsInputType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Defines the form used to create and manipulate blog posts.
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
class PatientType extends AbstractType
{

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $builder
            ->add('nom', null, [
                'attr' => ['autofocus' => true],
                'label' => 'label.nom',
            ])
            ->add('prenom', null, [
                'label' => 'label.prenom',
            ])
            ->add('telephone', null, [
                'label' => 'label.telephone',
            ])
            ->add('code', null, [
                'label' => 'label.code',
            ])
            ->add('montantTotal', null, [
                'label' => 'label.montantTotal',
            ])
            ->add('date', DateTimePickerType::class, [
                'label' => 'label.published_at',
            ])
//            ->add('docteur', null, [
//                'label' => 'label.docteur',
//            ])
        ;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Patient::class,
        ]);
    }
}
