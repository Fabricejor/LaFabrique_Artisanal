'use client';
import React, { useState } from 'react';
import Modal from './Modal';

interface LegalModalsProps {
    children: (openModal: (type: 'mentions' | 'privacy' | 'cgv') => void) => React.ReactNode;
}

export default function LegalModals({ children }: LegalModalsProps) {
    const [activeModal, setActiveModal] = useState<'mentions' | 'privacy' | 'cgv' | null>(null);

    const openModal = (type: 'mentions' | 'privacy' | 'cgv') => {
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            {children(openModal)}

            {/* Modal Mentions légales */}
            <Modal
                isOpen={activeModal === 'mentions'}
                onClose={closeModal}
                title="Mentions légales"
            >
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">1. Informations légales</h3>
                        <p className="mb-4">
                            <strong>Nom de l'entreprise :</strong> La Fabrique Artisanal<br />
                            <strong>Forme juridique :</strong> Société par actions simplifiée (SAS)<br />
                            <strong>Capital social :</strong> 10 000 €<br />
                            <strong>Siège social :</strong> [Adresse à compléter]<br />
                            <strong>RCS :</strong> [Numéro à compléter]<br />
                            <strong>SIRET :</strong> [Numéro à compléter]<br />
                            <strong>TVA Intracommunautaire :</strong> [Numéro à compléter]
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">2. Directeur de publication</h3>
                        <p className="mb-4">
                            Le directeur de publication du site est [Nom du dirigeant], représentant légal de La Fabrique Artisanal.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">3. Hébergement</h3>
                        <p className="mb-4">
                            Ce site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723<br />
                            États-Unis
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">4. Propriété intellectuelle</h3>
                        <p className="mb-4">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="mb-4">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de publication.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">5. Responsabilité</h3>
                        <p className="mb-4">
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                        </p>
                        <p className="mb-4">
                            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse contact@lafabriqueartisanal.com en décrivant le problème de la manière la plus précise possible.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">6. Liens hypertextes</h3>
                        <p className="mb-4">
                            Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de La Fabrique Artisanal.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">7. Collecte et traitement des données personnelles</h3>
                        <p className="mb-4">
                            Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression des données qui vous concernent. Pour exercer ce droit, adressez-vous à contact@lafabriqueartisanal.com.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">8. Droit applicable</h3>
                        <p className="mb-4">
                            Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
                        </p>
                    </section>
                </div>
            </Modal>

            {/* Modal Politique de confidentialité */}
            <Modal
                isOpen={activeModal === 'privacy'}
                onClose={closeModal}
                title="Politique de confidentialité"
            >
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">1. Introduction</h3>
                        <p className="mb-4">
                            La Fabrique Artisanal s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">2. Responsable du traitement</h3>
                        <p className="mb-4">
                            Le responsable du traitement des données personnelles est :<br />
                            <strong>La Fabrique Artisanal</strong><br />
                            Email : contact@lafabriqueartisanal.com
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">3. Données collectées</h3>
                        <p className="mb-4">Nous pouvons collecter les types de données personnelles suivants :</p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                            <li><strong>Données de livraison :</strong> adresse de livraison et de facturation</li>
                            <li><strong>Données de commande :</strong> historique des achats, préférences produits</li>
                            <li><strong>Données de navigation :</strong> cookies, adresse IP, données de connexion</li>
                            <li><strong>Données de communication :</strong> échanges par email, chat ou téléphone</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">4. Finalités du traitement</h3>
                        <p className="mb-4">Vos données personnelles sont utilisées pour :</p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>Traiter et livrer vos commandes</li>
                            <li>Gérer votre compte client et vos préférences</li>
                            <li>Vous fournir un service client de qualité</li>
                            <li>Vous informer de nos nouveaux produits et offres (avec votre consentement)</li>
                            <li>Améliorer nos services et notre site web</li>
                            <li>Respecter nos obligations légales et comptables</li>
                            <li>Prévenir la fraude et assurer la sécurité de nos services</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">5. Base légale du traitement</h3>
                        <p className="mb-4">Le traitement de vos données personnelles repose sur :</p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li><strong>L'exécution du contrat :</strong> pour traiter vos commandes et gérer votre compte</li>
                            <li><strong>L'intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité</li>
                            <li><strong>Le consentement :</strong> pour l'envoi de communications marketing</li>
                            <li><strong>L'obligation légale :</strong> pour respecter nos obligations comptables et fiscales</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">6. Durée de conservation</h3>
                        <p className="mb-4">
                            Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Données de compte client :</strong> 3 ans après le dernier contact</li>
                            <li><strong>Données de commande :</strong> 10 ans pour les obligations comptables</li>
                            <li><strong>Données de marketing :</strong> 3 ans ou jusqu'à votre désinscription</li>
                            <li><strong>Cookies :</strong> 13 mois maximum</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">7. Partage des données</h3>
                        <p className="mb-4">
                            Nous ne vendons jamais vos données personnelles. Nous pouvons les partager avec :
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Prestataires de services :</strong> livraison, paiement, hébergement web</li>
                            <li><strong>Autorités compétentes :</strong> si requis par la loi</li>
                            <li><strong>Partenaires commerciaux :</strong> uniquement avec votre consentement explicite</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">8. Vos droits</h3>
                        <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li><strong>Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                            <li><strong>Droit de rectification :</strong> corriger les données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                            <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                            <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                            <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                            <li><strong>Droit de retrait du consentement :</strong> à tout moment</li>
                        </ul>
                        <p className="mb-4">
                            Pour exercer ces droits, contactez-nous à : contact@lafabriqueartisanal.com
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">9. Sécurité des données</h3>
                        <p className="mb-4">
                            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">10. Cookies</h3>
                        <p className="mb-4">
                            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">11. Contact et réclamations</h3>
                        <p className="mb-4">
                            Pour toute question concernant cette politique de confidentialité, contactez-nous à : contact@lafabriqueartisanal.com
                        </p>
                        <p className="mb-4">
                            Vous avez également le droit de déposer une plainte auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
                        </p>
                    </section>
                </div>
            </Modal>

            {/* Modal CGV */}
            <Modal
                isOpen={activeModal === 'cgv'}
                onClose={closeModal}
                title="Conditions Générales de Vente"
            >
                <div className="space-y-6">
                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">1. Objet et champ d'application</h3>
                        <p className="mb-4">
                            Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les ventes conclues entre La Fabrique Artisanal et ses clients, que ce soit par l'intermédiaire du site internet ou par tout autre canal de vente.
                        </p>
                        <p className="mb-4">
                            Toute commande implique l'acceptation sans réserve des présentes CGV par l'acheteur.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">2. Produits</h3>
                        <p className="mb-4">
                            La Fabrique Artisanal propose à la vente des sacs et bijoux artisanaux. Les produits proposés sont ceux qui figurent sur le site internet au jour de la consultation par l'acheteur.
                        </p>
                        <p className="mb-4">
                            Les photographies et descriptifs des produits sont les plus fidèles possibles mais n'engagent pas La Fabrique Artisanal. Chaque produit étant artisanal, de légères variations peuvent exister.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">3. Prix</h3>
                        <p className="mb-4">
                            Les prix sont indiqués en euros, toutes taxes comprises (TTC), hors frais de livraison. Les frais de livraison sont précisés avant la validation de la commande.
                        </p>
                        <p className="mb-4">
                            La Fabrique Artisanal se réserve le droit de modifier ses prix à tout moment. Les produits seront facturés au prix en vigueur au moment de la validation de la commande.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibred mb-3 font-playfair">4. Commande</h3>
                        <p className="mb-4">
                            Les commandes peuvent être passées :
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>Sur le site internet lafabriqueartisanal.com</li>
                            <li>Par téléphone ou WhatsApp</li>
                            <li>Par email à contact@lafabriqueartisanal.com</li>
                        </ul>
                        <p className="mb-4">
                            Toute commande est considérée comme ferme et définitive dès validation du paiement.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">5. Paiement</h3>
                        <p className="mb-4">
                            Le paiement peut s'effectuer par :
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                            <li>PayPal</li>
                            <li>Virement bancaire</li>
                            <li>Paiement mobile (selon disponibilité)</li>
                        </ul>
                        <p className="mb-4">
                            Le paiement est exigible immédiatement à la commande. En cas de défaut de paiement, la commande sera annulée.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">6. Livraison</h3>
                        <p className="mb-4">
                            <strong>Délais de livraison :</strong>
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>France métropolitaine : 3 à 5 jours ouvrés</li>
                            <li>Europe : 5 à 10 jours ouvrés</li>
                            <li>International : 7 à 15 jours ouvrés</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Frais de livraison :</strong>
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>France métropolitaine : 5,90€ (gratuit à partir de 80€)</li>
                            <li>Europe : 12,90€</li>
                            <li>International : sur devis</li>
                        </ul>
                        <p className="mb-4">
                            La livraison s'effectue à l'adresse indiquée lors de la commande. Il appartient à l'acheteur de vérifier l'exactitude de cette adresse.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">7. Réception et vérification</h3>
                        <p className="mb-4">
                            L'acheteur doit vérifier l'état des produits à la livraison. Toute anomalie doit être signalée dans les 48 heures suivant la réception à contact@lafabriqueartisanal.com.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">8. Droit de rétractation</h3>
                        <p className="mb-4">
                            Conformément à l'article L221-18 du Code de la consommation, l'acheteur dispose d'un délai de 14 jours francs à compter de la réception de sa commande pour exercer son droit de rétractation.
                        </p>
                        <p className="mb-4">
                            Les produits doivent être retournés dans leur état d'origine, avec tous les accessoires et emballages, accompagnés de la facture.
                        </p>
                        <p className="mb-4">
                            Les frais de retour sont à la charge de l'acheteur, sauf en cas de produit défectueux ou d'erreur de notre part.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">9. Garanties</h3>
                        <p className="mb-4">
                            Tous nos produits bénéficient de la garantie légale de conformité (article L217-4 du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 à 1648 du Code civil).
                        </p>
                        <p className="mb-4">
                            En cas de défaut de conformité, l'acheteur peut demander la réparation, le remplacement ou le remboursement du produit.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">10. Responsabilité</h3>
                        <p className="mb-4">
                            La responsabilité de La Fabrique Artisanal ne saurait être engagée pour tous les inconvénients ou dommages inhérents à l'utilisation du réseau Internet, notamment une rupture de service, une intrusion extérieure ou la présence de virus informatiques.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">11. Force majeure</h3>
                        <p className="mb-4">
                            La responsabilité de La Fabrique Artisanal ne pourra pas être mise en jeu en cas de force majeure ou de circonstances indépendantes de sa volonté.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">12. Propriété intellectuelle</h3>
                        <p className="mb-4">
                            Tous les éléments du site internet (textes, images, logos, etc.) sont protégés par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">13. Données personnelles</h3>
                        <p className="mb-4">
                            Le traitement des données personnelles est régi par notre Politique de Confidentialité, accessible sur notre site internet.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">14. Médiation et règlement des litiges</h3>
                        <p className="mb-4">
                            En cas de litige, l'acheteur peut recourir gratuitement à un médiateur de la consommation. Les coordonnées du médiateur compétent sont disponibles sur demande.
                        </p>
                        <p className="mb-4">
                            À défaut de résolution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">15. Droit applicable</h3>
                        <p className="mb-4">
                            Les présentes CGV sont soumises au droit français. Toute modification des CGV sera portée à la connaissance des clients sur le site internet.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-3 font-playfair">16. Contact</h3>
                        <p className="mb-4">
                            Pour toute question relative aux présentes CGV, vous pouvez nous contacter :
                        </p>
                        <ul className="list-disc list-inside mb-4 space-y-2">
                            <li>Email : contact@lafabriqueartisanal.com</li>
                            <li>Téléphone/WhatsApp : [Numéro à compléter]</li>
                            <li>Adresse : [Adresse à compléter]</li>
                        </ul>
                    </section>

                    <p className="text-sm text-gray-600 mt-8">
                        <em>Dernière mise à jour : Décembre 2024</em>
                    </p>
                </div>
            </Modal>
        </>
    );
}
