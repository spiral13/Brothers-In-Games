## Installation côté back

### Installer Wamp pour Windows

Téléchargez et exécutez [le fichier neccessaire à votre version de Windows](http://www.wampserver.com/)  

--- 

Certaine personne peuvent avoir des difficultés à ce que wamp fonctionne. Il y a de forte chance pour que cela vienne des paquetages VC ++, RDV sur [cette page](http://wampserver.aviatechno.net/?lang=fr&oldversions=afficher)  

Téléchargez et exécutez le fichier "vérification paquetage VC ++ installés"

Si vous avez des erreurs, alors il faudra tous les installer. Sur cette même page vous avez un lien pour télecharger et installer tout les paquetages VC neccessaires au fonctionnement de WAMP.

### Installer Git sur Windows

Téléchargez et exécutez [le fichier neccessaire à votre version de Windows](https://git-scm.com/download/win)

#### - Installation de la clé SSH

Suivre les [instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)  

#### - Ajouter votre clé SSH à github

Suivre les [instructions](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)


### Installation Composer


#### - sur Linux

Pour installer rapidement Composer dans votre dossier courant, exécutez les lignes de commande suivante:
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('SHA384', 'composer-setup.php') === '544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

#### - sur Windows

Téléchargez et exécutez [ce fichier](https://getcomposer.org/Composer-Setup.exe)

### Installer Symfony

Dans votre terminal, exécutez cette ligne de commande:

`composer create-project symfony/framework-standard-edition my_project_name`

_"my_project_name"_ êtant le répertoire dans lequel vous voulez installer Symfony

## Installation côté front

### Installation NodeJS

#### - Sur Linux

Exécutez ces lignes de commande:
```
curl-sL https://deb.nodesource.com/setup_9.x |sudo-Ebash- 
sudo apt install -y nodejs
```

#### - Sur Windows

Téléchargez et exécutez [ce fichier](https://nodejs.org/dist/v9.11.1/node-v9.11.1-x64.msi)

### Installer Yarn

#### - Sur Linux 

Exécutez cette commande: `npm install --global yarn`

#### - Sur Windows

Téléchargez et exécutez [ce fichier](https://yarnpkg.com/latest.msi)

## - Initialisation côté Back

Lors du clone d'une architecture Symfony depuis GitHub,

exécutez cette commande:

`composer Install`

lors de l'installation, vous aurez à rentrer des données de configuration, faites "entrer" pour tous sauf "dbname", dans lequel vous rentrerez le nom de la base de données sur laquelle vous allez travailler.
(Attention: si votre base de données possède un nom d'utilisateur et un mot de passe, vous devrez modifier les champs en conséquence).

- - - -

Pour le reste, à chaque pull:

`composer Update`

(malgré tout, les deux commandes feront le même résultat, peu importe où et quand vous les utilisez, cependant, elle n'agisse pas de la même manière).

- - - -

En outre les trois prochaines commandes seront à effectuer lorsque le responsable back vous le dit:

(attention, votre serveur Php doit être lancé)

Commande pour créer la base de données:
`php bin/console doctrine:database:create`

Commande pour mettre à jour les tables associée:
`php bin/console doctrine:schema:update --force`

Commande pour y mettre des données fake:
`php bin/console doctrine:fixtures:load`

- - - -

Pour lancer le serveur Php il faudra exécuter ces commandes

#### Côté Linux

Pour lancer un serveur normal:
`php bin/console server:run`

Pour lancer un serveur en fond:
`php bin/console server:start`

Pour stoper un serveur lancé en fond:
`php bin/console server:stop`

#### Côte Windows

`php -S localhost:8000`

- - - -

Pour compiler les fichiers et lancer un serveur front il faudra exécuter cette commande:

`yarn start`

## Configuration front

### Commande à executer en premier lieux:

```
yarn init
yarn add --dev brunch auto-reload-brunch postcss-brunch@0.5.0 autoprefixer stylus-brunch
yarn add --dev https://github.com/babel/babel-brunch.git babel-eslint babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-react
yarn add --dev eslint eslint-config-airbnb eslint-import-resolver-node eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
yarn add --dev mocha chai enzyme react-test-renderer jsdom enzyme-adapter-react-16 babel-register babel-resolver
yarn add react react-dom prop-types
yarn add babel-polyfill
```

### Fichier de configuration à creer/modifier

créez un fichier brunch:

 - brunch-config.js

dans ce fichier, inserez ces lignes:

```
exports.config = {
  files: {
    stylesheets: {
      joinTo: 'css/app.css',
        order: {
          before: 'app/styles/reset.css',
        },
    },
    javascripts: {
      joinTo: 'js/app.js',
    },
  },
  paths: {
    public: 'web',
    watched: ['frontend']
  }
};
```

créez un fichier babel:

 - .babelrc

dans ce fichier, inserez ces lignes :
```
{
  "presets": ["env", "react"]
}
```

mettre à jour le fichier package.json :
```
  "scripts": {
    "build": "brunch build",
    "start": "brunch watch --server"
  },
```

### Joindre ReactJS avec symfony

Dans le fichier 

 - app/Resources/base.html.twig 

 Ajoutez les balises "script" suivantes:

```
  {# AppBundle::Event:show.html.twig #}
  {% block body %}
    <div id="react-checkout-root"></div>
  {% endblock %}
  {% block javascripts %}{% endblock %}
  <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
  <script>require('frontend/index');</script>
```

### Coder côté React

Vous devrez (à partir de cette configuration), créer un dossier "frontend".  
Tout votre code React devra être codé à l'intérieur.  
Ensuite vos fichiers seront compilés dans le dossier web.

## Acceder au VPN O'clock

Attention, cela n'est possible qu'à partir du moment où vous avez une VM avec le téléporteur.

Ce qui suit est un copier-coller du nécessaire pour accéder au VPN d'O'clock, venant du fichier "mode-VM-serveur-v1.0" Qu'O'clock vous à normalement fournis

### Récupérer le certificat


D’abord, on va sauvegarder le certificat. Pour cela, ouvrez un Terminal sur le Téléporteur et taper la
commande suivante :

`cp -r /oclock/vpn ~/Bureau`

Vérifiez que cela a bien créé un répertoire appelé vpn sur le Bureau du Téléporteur et qu’il contient plusieurs
fichiers (ca.crt, user.crt, etc.).  
Nous allons à présent compresser au format ZIP le répertoire vpn sur le Bureau du Téléporteur et nous
envoyer le fichier zippé par mail pour le réutiliser sur l’OS hôte : 

- Bouton droit sur le dossier vpn sur le burau du Téléporteur 
- “Compresser. . . ” 
- Choisir l’extension “.zip” dans la liste déroulante 
- Appuyer sur “Créer” 
- Un fichier vpn.zip est créé sur le bureau 
- Connectez-vous à votre boîte mail sur Chrome pour vous envoyer ce fichier par mail, en pièce jointe (par ex.)

### Configuration du VPN sur l’OS hôte

Nous allons à présent installer un client VPN sur votre OS hôte ainsi que le certificat que vous vous êtes
envoyé par mail.  

Pour cette étape vous aurez besoin d’utiliser l’éditeur de code Atom. Si vous ne l’avez pas déjà téléchargé et
installé, faites-le : https://atom.io/

- Pour commencer, téléchargez le fichier vpn.zip que vous vous êtes envoyé par mail et décompressez-le
sur votre OS hôte.  
- Téléchargez le fichier suivant et enregistrez le sur bureau : https://static.oclock.io/oclock.ovpn
- Si vous êtes sous Windows, assurez-vous que le fichier s’appelle bien oclock.ovpn sans autre extension,
notamment sans extention .txt. Windows ajoute parfois une extension .txt cachée et cela empêche
les étapes suivantes de fonctionner.  
- Ouvrez le fichier oclock.ovpn avec Atom

Vous allez maintenant devoir insérer dans ce fichier le contenu des fichiers ca.crt, user.key et user.crt
contenus dans le dossier vpn que vous venez de décompresser à partir du fichier vpn.zip. Il va falloir être
méticuleux dans cette opération :wink:

- Le contenu du fichier ca.crt doit être inséré à l’intérieur des balises <ca> et </ca> (ligne 18)
- Le contenu du fichier user.key doit être inséré à l’intérieur des balises <key> et </key> (ligne 21)
- Le contenu du fichier user.crt doit être inséré à l’intérieur des balises <cert> et </cert> (ligne 24)

À chaque fois il faudra insérer le contenu du fichier indiqué à la place de la ligne contenant les instructions.
Par exemple, la section :

```
<ca>
Remplacer cette ligne par le contenu du fichier ca.crt. Ne pas supprimer les balises <ca> et </ca>. Ne pas </ca>
Doit devenir :
<ca>
-----BEGIN CERTIFICATE-----
4BAYTAkZSMQ4wDAYDVQQHEwVQYXJpczEPMA0GA1UEChMGT2Nsb2NrMRIwEAYDVQQD
EwlPY2xvY2sgQ0ExDzANBgNVBCkTBnNlcnZlcjEeMBwGCSqGSIb3DQEJARYPZGFy
aW9Ab2Nsb2NrLmlvMB4XDTE2MDIxNTE1MjcxMFoXDTI2MDIxMjE1MjcxMFowczEL
MAkGA1UEBhMCRlIxDjAMBgNVBAcTBVBhcmlzMQ8wDQYDVQQKEwZPY2xvY2sxEjAQ
BgNVBAMTCU9jbG9[...]
-----END CERTIFICATE-----
</ca>
```

Une fois que vous avez intégré les 3 fichiers à l’intérieur de oclock.ovpn, vous pouvez enregistrer le fichier et
quitter Atom.  
Suivez les instructions suivantes en fonction de votre OS hôte : Windows.

Si vous êtes sous Windows, nous allons installer le logiciel OpenVPN : 

- Allez sur la page de téléchargement
d’OpenVPN : https://openvpn.net/index.php/open-source/downloads.html 
- Téléchargez l’installeur pour Windows qui porte similaire à openvpn-install-2.4.3-I602.exe 
- Lancez l’installation
- Acceptez les paramètres par défaut qui vous sont proposés durant l’installation (Next, next, next, etc. . . Install
:stuck_out_tongue_winking_eye:)
- Acceptez l’installation du périphérique virtuel qui est sont proposée
(TAP)
- Lancez le programme OpenVPN GUI : Menu démarrer > Programmes > OpenVPN > OpenVPN GUI 
- Un message d’erreur vous indique que le fichier de configuration n’a pas été trouvé. C’est normal, appuyez sur Ok et ignorez-le. 
- Dans la barre des notifications de Windows, en bas à droite de l’écran (à côté de l’horloge), reprérez l’icône de OpenVPN GUI appuyez sur le bouton droit de la souris 
- “Import file. . . ” 
- Choisissez le fichier oclock.ovpn que vous avez téléchargé et modifié précédemment 
- Validez le message de confirmation 
- Cliquez à nouveau avec le bouton droit de la souris sur l’icône de OpenVPN GUI et choisissez “Connect”.  
Attendez quelques instants et vous devriez voir un message de confirmation apparaître : “oclock is now connected”.  
Pour confirmer que la connexion VPN O’clock est bien établie, ouvrez l’URL suivante dans votre navigateur : http://vpncheck.oclock.io/