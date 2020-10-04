'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
// let userAvatar = '';

const photoToShow = userAvatar || DEFAULT_AVATAR;

document.querySelector('.user__avatar').src = photoToShow;