fx_version 'cerulean'
games { 'gta5' }

author 'Mr. NOBI#0438'
description 'Modern Loading Screen for QBCore server'
version '0.1.0'

loadscreen 'html/index.html'
loadscreen_manual_shutdown 'yes'
client_script 'client/main.lua'
server_script 'server/main.lua'
loadscreen_cursor 'yes'


files {
    'html/index.html',
    'html/css/style.css',
    'html/js/app.js',
    'html/logo/logo.png',
    'html/img/ARROW_DOWN.png',
    'html/img/ARROW_UP.png',
    'html/img/SPACE.png',
    'html/song/song.mp3'
}
