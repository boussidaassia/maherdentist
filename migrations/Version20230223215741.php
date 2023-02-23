<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230223215741 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE consultation (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, patient_id INTEGER NOT NULL, author_id INTEGER NOT NULL, content CLOB NOT NULL, published_at DATETIME NOT NULL, montant INTEGER DEFAULT NULL, CONSTRAINT FK_964685A66B899279 FOREIGN KEY (patient_id) REFERENCES patient (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_964685A6F675F31B FOREIGN KEY (author_id) REFERENCES symfony_demo_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_964685A66B899279 ON consultation (patient_id)');
        $this->addSql('CREATE INDEX IDX_964685A6F675F31B ON consultation (author_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__patient AS SELECT id, docteur_id, nom, prenom, telephone, code, montant_total, date FROM patient');
        $this->addSql('DROP TABLE patient');
        $this->addSql('CREATE TABLE patient (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, docteur_id INTEGER DEFAULT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, telephone VARCHAR(255) DEFAULT NULL, code VARCHAR(255) NOT NULL, montant_total INTEGER DEFAULT NULL, date DATETIME DEFAULT NULL, CONSTRAINT FK_1ADAD7EBCF22540A FOREIGN KEY (docteur_id) REFERENCES symfony_demo_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO patient (id, docteur_id, nom, prenom, telephone, code, montant_total, date) SELECT id, docteur_id, nom, prenom, telephone, code, montant_total, date FROM __temp__patient');
        $this->addSql('DROP TABLE __temp__patient');
        $this->addSql('CREATE INDEX IDX_1ADAD7EBCF22540A ON patient (docteur_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE consultation');
        $this->addSql('CREATE TEMPORARY TABLE __temp__patient AS SELECT id, docteur_id, nom, prenom, telephone, code, montant_total, date FROM patient');
        $this->addSql('DROP TABLE patient');
        $this->addSql('CREATE TABLE patient (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, docteur_id INTEGER NOT NULL, nom VARCHAR(255) DEFAULT NULL, prenom VARCHAR(255) DEFAULT NULL, telephone VARCHAR(255) DEFAULT NULL, code VARCHAR(255) NOT NULL, montant_total INTEGER DEFAULT NULL, date DATETIME DEFAULT NULL, CONSTRAINT FK_1ADAD7EBCF22540A FOREIGN KEY (docteur_id) REFERENCES symfony_demo_user (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO patient (id, docteur_id, nom, prenom, telephone, code, montant_total, date) SELECT id, docteur_id, nom, prenom, telephone, code, montant_total, date FROM __temp__patient');
        $this->addSql('DROP TABLE __temp__patient');
        $this->addSql('CREATE INDEX IDX_1ADAD7EBCF22540A ON patient (docteur_id)');
    }
}
