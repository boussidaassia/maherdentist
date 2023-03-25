<?php

namespace App\Entity;

use App\Repository\PatientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PatientRepository::class)]
class Patient
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $telephone = null;

    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[ORM\Column(nullable: true)]
    private ?int $montantTotal = null;
    
   
    
    #[ORM\Column(nullable: true)]
    private ?int $montantDu = null;
    

    #[ORM\ManyToOne(inversedBy: 'patients')]
    #[ORM\JoinColumn(nullable: true)]
    private ?User $docteur = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTime $date = null;
    /**
     * @var Collection<int, Consultation>
     */
    #[ORM\OneToMany(mappedBy: 'patient', targetEntity: Consultation::class, cascade: ['persist'], orphanRemoval: true)]
    #[ORM\OrderBy(['publishedAt' => 'DESC'])]
    private Collection $consultations;

    public function __construct()
    {
        $this->date = new \DateTime();
        $this->consultations = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getMontantTotal(): ?int
    {
        $tt = 0;
        foreach ($this->consultations as $consultation){
            $tt += $consultation->getMontant();
        }
        return $tt;
    }
   

    public function setMontantTotal(?int $montantTotal): self
    {
        $this->montantTotal = $montantTotal;

        return $this;
    }
    public function getMontantDu(): ?int
    {
        return $this->montantDu;
    }

    public function setMontantDu(?int $montantDu): self
    {
        $this->montantDu = $montantDu;

        return $this;
    }
    public function getDocteur(): ?User
    {
        return $this->docteur;
    }

    public function setDocteur(?User $docteur): self
    {
        $this->docteur = $docteur;

        return $this;
    }

    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    public function setDate(?\DateTime $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return Collection<int, Consultation>
     */
    public function getConsultations(): Collection
    {
        return $this->consultations;
    }

    public function addConsultation(Consultation $consultation): void
    {
        $consultation->setPatient($this);
        if (!$this->consultations->contains($consultation)) {
            $this->consultations->add($consultation);
        }
    }

    public function removeConsultation(Consultation $consultation): void
    {
        $this->consultations->removeElement($consultation);
    }

}