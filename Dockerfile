# Utiliser une image Node.js (LTS recommandé pour Angular)
FROM node:20

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    git \
    curl \
    && apt-get clean

# Installer Angular CLI globalement
RUN npm install -g @angular/cli
RUN npm install -g @angular-devkit/build-angular
RUN npm install -g eslint @angular-eslint/eslint-plugin @angular-eslint/eslint-plugin-template @angular-eslint/template-parser
# RUN npx ng add @angular-eslint/schematics
# TODO : Fix npx command ( wrong path to access ng cli)
RUN npm install -g prettier eslint-config-prettier eslint-plugin-prettier


# RUN useradd -m vscode
# USER vscode
# Définir le répertoire de travail
WORKDIR ./workspace

# RUN chown -R node:node /workspace/.angular
# # Ajouter un utilisateur non-root
# RUN useradd -ms /bin/bash devuser
# USER devuser

# Exposer le port utilisé par Angular
EXPOSE 4200
# ENV PATH="${HOME_DIR}/.local/bin:${PATH}"
