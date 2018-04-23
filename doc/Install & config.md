# B.I.G Project

## Installation côté back

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