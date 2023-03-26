<?php

namespace App\Repository;

use App\Entity\Patient;
use App\Entity\Tag;
use App\Entity\User;
use App\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use function Symfony\Component\String\u;

/**
 * @extends ServiceEntityRepository<Patient>
 *
 * @method Patient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Patient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Patient[]    findAll()
 * @method Patient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PatientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Patient::class);
    }

    public function save(Patient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Patient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function findLatest(int $page = 1): Paginator
    {
        $qb = $this->createQueryBuilder('p')
            ->orderBy('p.date', 'DESC')
        ;

        return (new Paginator($qb))->paginate($page);
    }

    public function findByDoc( User $user, int $page = 1 ): Paginator
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.docteur = :doc')
            ->setParameter('doc' , $user)
            ->orderBy('p.date', 'DESC')
        ;

        return (new Paginator($qb))->paginate($page);
    }

    /**
     * @return Patient[]
     */
    public function findBySearchQuery(string $query, int $limit = Paginator::PAGE_SIZE): array
    {
        $searchTerms = $this->extractSearchTerms($query);

        if (0 === \count($searchTerms)) {
            return [];
        }

        $queryBuilder = $this->createQueryBuilder('p');

        foreach ($searchTerms as $key => $term) {
            $queryBuilder
                ->orWhere('p.nom LIKE :t_'.$key)
                ->setParameter('t_'.$key, '%'.$term.'%')
                ->orWhere('p.prenom LIKE :m_'.$key)
                ->setParameter('m_'.$key, '%'.$term.'%')
            ;
        }

        /** @var Patient[] $result */
        $result = $queryBuilder
            ->orderBy('p.date', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;

        return $result;
    }

    /**
     * Transforms the search string into an array of search terms.
     *
     * @return string[]
     */
    private function extractSearchTerms(string $searchQuery): array
    {
        $searchQuery = u($searchQuery)->replaceMatches('/[[:space:]]+/', ' ')->trim();
        $terms = array_unique($searchQuery->split(' '));

        // ignore the search terms that are too short
        return array_filter($terms, static function ($term) {
            return 2 <= $term->length();
        });
    }
}
