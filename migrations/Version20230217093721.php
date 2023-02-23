<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230217093721 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patient (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, docteur_id INTEGER NOT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, telephone VARCHAR(255) DEFAULT NULL, code VARCHAR(255) NOT NULL, montant_total INTEGER DEFAULT NULL, date DATETIME DEFAULT NULL, CONSTRAINT FK_1ADAD7EBCF22540A FOREIGN KEY (docteur_id) REFERENCES symfony_demo_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_1ADAD7EBCF22540A ON patient (docteur_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE patient');
    }
}
