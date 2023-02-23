<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Security;

use App\Entity\Patient;
use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

/**
 * It grants or denies permissions for actions related to blog patients (such as
 * showing, editing and deleting patients).
 *
 * See https://symfony.com/doc/current/security/voters.html
 *
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
class PatientVoter extends Voter
{
    // Defining these constants is overkill for this simple application, but for real
    // applications, it's a recommended practice to avoid relying on "magic strings"
    public const DELETE = 'delete';
    public const EDIT = 'edit';
    public const SHOW = 'show';

    /**
     * {@inheritdoc}
     *
     * @phpstan-param object $subject
     */
    protected function supports(string $attribute, $subject): bool
    {
        // this voter is only executed on Patient objects and for three specific permissions
        return $subject instanceof Patient && \in_array($attribute, [self::SHOW, self::EDIT, self::DELETE], true);
    }

    /**
     * {@inheritdoc}
     *
     * @param Patient $patient
     */
    protected function voteOnAttribute(string $attribute, $patient, TokenInterface $token): bool
    {
        $user = $token->getUser();

        // the user must be logged in; if not, deny permission
        if (!$user instanceof User) {
            return false;
        }

        // the logic of this voter is pretty simple: if the logged user is the
        // author of the given blog patient, grant permission; otherwise, deny it.
        // (the supports() method guarantees that $patient is a Patient object)
        return $user === $patient->getDocteur();
    }
}
