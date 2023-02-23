<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Event;

use App\Entity\Consultation;
use Symfony\Contracts\EventDispatcher\Event;

class ConsultationCreatedEvent extends Event
{
    public function __construct(
        protected Consultation $consultation
    ) {
    }

    public function getConsultation(): Consultation
    {
        return $this->consultation;
    }
}