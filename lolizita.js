const { 
default: makeWASocket,
WAMessageStubType,
DisconnectReason,
WAProto,
useSingleFileAuthState,
downloadContentFromMessage, 
generateWAMessageFromContent,
prepareWAMessageMedia,
mentionedJid,
proto,
Mimetype,
MessageType,
} = require("@adiwajshing/baileys");

require('./config')
const fs = require('fs')
const util = require('util');
const { spawn, exec } = require("child_process")
const axios = require("axios")
const chalk = require('chalk')
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone");
const speed = require('performance-now');
const execute = util.promisify(require('child_process').exec)
const qrcode = require("qrcode-terminal");

// Arquivos
const { color } = require('./base de dados/lib/color')
const { getGroupAdmins, getRandom, getExtension, getBuffer, fetchJson, sleep, runtime, isUrl, getFileBuffer, readMore } = require('./base de dados/lib/functions')
const { linguagem, mess } = require('./base de dados/database/menu')
const logo = fs.readFileSync("./base de dados/fotos/logo.jpg");

// Arquivos json
const antilink = JSON.parse(fs.readFileSync('./base de dados/FilesJson/antilink.json'));
const _antivirtex = JSON.parse(fs.readFileSync('./groups/antivirtex.json'))

const compreSuaApikey = "Tobi";

module.exports = lolizita = async (lolizita, mek, store) => {
try {
if (mek.key.fromMe) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
const fromMe = mek.key.fromMe
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]

//read messages and presence
await lolizita.sendPresenceUpdate('available', from);
await lolizita.sendReadReceipt(from, mek.key.participant, [mek.key.id]);

var isPrefix = (type === 'conversation') ? mek.message.conversation : (type == 'imageMessage') ? mek.message.imageMessage.caption : (type == 'videoMessage') ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (mek.message.buttonsResponseMessage?.selectedButtonId || mek.message.listResponseMessage?.singleSelectReply.selectedRowId || mek.text) : ''
const prefix = prefa ? /^[/????????????????????????????+???_=|~!?@#$%^&.??^]/gi.test(isPrefix) ? isPrefix.match(/^[/????????????????????????????+???_=|~!?@#$%^&.??^]/gi)[0] : "" : prefa ?? global.prefix

body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""

budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const comando = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const args = body.trim().split(/ +/).slice(1)

const botNumber = lolizita.user.id.split(':')[0] + '@s.whatsapp.net'
const me = lolizita.user;
const ownerNumber = [owner + "@s.whatsapp.net"]
const OwnerNumber = [owner + "@s.whatsapp.net"]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const conts = mek.key.fromMe 
const pushname = mek.pushName ? mek.pushName : sender[0].split('@')[0]
const quoted = mek.quoted ? mek.quoted : mek
const mime = (quoted.msg || quoted).mimetype || ''

// Grupos
const groupMetadata = isGroup ? await lolizita.groupMetadata(from) : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isOwner = ownerNumber.includes(sender)
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

// Horas
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')       
const timestamp = speed();
const latensi = speed() - timestamp

// function antis
const isAntiLink = isGroup ? antilink.includes(from) : true 
const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
const welkom = JSON.parse(fs.readFileSync('./groups/welkom.json'))
const isWelkom = isGroup ? welkom.includes(from) : false

//fun????o dos players
const { y2mateA, y2mateV } = require('./ntbcaks/y2mate.js')

//verificado 
const dfrply = fs.readFileSync('./ntbcaks/ntdragon.jpg')
/** Verificado com o nome e foto **/

const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) },  message: { "extendedTextMessage": {"text": `????????Ol?? ${pushname} ????\n???${hr}\n????Comandos : 99999999`, 'jpegThumbnail': dfrply}}}

//conts enserida

const q = args.join(' ')
const text = args.join(" ")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

// Menu
const enter = "\n";

// Enviar mensagens
const enviar = (teks) => {
lolizita.sendMessage(from, {text: teks}, {quoted: mek})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? lolizita.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}) : lolizita.sendMessage(from, {text: teks.trim(), contextInfo: {"mentionedJid": memberr}}, {quoted: mek})
}

//TIPOS DE MENSAGENS        
const isVideo = (type == 'videoMessage')
const isImage = (type == 'imageMessage')
const isSticker = (type == 'stickerMessage')
const isLocLive = (type === 'liveLocationMessage')
const isContato = (type === 'contactMessage')
const isCatalogo = (type === 'productMessage')
const isLocaliza????o = (type === 'locationMessage')
const isDocumento = (type === 'documentMessage')
const isMsgTexto = (type === 'extendedTextMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const iscontactsArray = (type === 'contactsArrayMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const tipoMensagem = type == 'audioMessage' ? 'Audio' : type == 'stickerMessage' ? 'Sticker' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Video' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localiza????o' : 'Mensagem'

if (!isGroup && isCmd && !isSticker) {
console.log('\x1b[1;31m',color("\n\n??? ", "red"), color("??? ", "red"), color("Comando"), color(" ???", "red"), color("\nNome:"), color(pushname, "red"), color("\nComando:"), color(comando ? comando : "Comando n??o registrado.", "red"))
}

if (isCmd && isGroup && !isSticker) {
console.log('\x1b[1;31m', color("??? ", "red"),  color("??? ", "red"), color("Comando"), color(" ???", "red"), color("\nNome:"), color(pushname, "red"), color("\nComando:"), color(comando ? comando : "Comando n??o registrado.", "red"), color("\nGrupo:"), color(groupName + "\n", "red"))
}

if (!isGroup && !isCmd) {
console.log('\x1b[1;31m', color("??? ", "red"), color("??? ", "red"), color("Mensagem"), color(" ???", "red"), color("\nNome:"), color(pushname, "red"), color("\nTipo:"), color(tipoMensagem + "\n", "red"))
} 

if (!isCmd && isGroup) {
console.log('\x1b[1;31m', color("??? ", "red"), color("??? ", "red"), color("Mensagem"), color(" ???", "red"), color("\nNome:"), color(pushname, "red"), color("\nTipo:"), color(tipoMensagem, "red"), color("\nGrupo:"), color(groupName + "\n","red"))
}

const enviarbutao = (from, text, footer, buttons) => {
return lolizita.sendMessage(from, { text: text, footer: footer, templateButtons: buttons, quoted: tob2 })
}

const sendListMsg = async (title, description, textButton, sections) => {
var list = WAProto.Message.fromObject({
listMessage: WAProto.ListMessage.fromObject({title: title,
buttonText: textButton,
description: description,
listType: 1,
sections: sections
})
})
await lolizita.relayMessage(from, list, {messageId: mek.key.id})
}

const sendButMessage =  async(from, teext, footer, button = [] , options = {}) => {
list = WAProto.Message.fromObject ({buttonsMessage: WAProto.ButtonsMessage.fromObject({contentText:teext, footerText: footer, buttons: button, headerType: 1})})
lolizita.relayMessage(from, list, {messageId: mek.key.id})
}

    lolizita.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await lolizita.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }


lolizita.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: lolizita.waUploadToServer })
        var template = generateWAMessageFromContent(from, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            lolizita.relayMessage(jid, template.message, { messageId: template.key.id })
    }
 
             const sendFileFromUrl = async (from, url, caption, m, men) => {
                let mime = '';
                let res = await axios.head(url)
                mime = res.headers['content-type']
                if (mime.split("/")[1] === "gif") {
                    return lolizita.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: mek})
                    }
                let type = mime.split("/")[0]+"Message"
                if(mime.split("/")[0] === "image"){
                    return lolizita.sendMessage(from, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
                } else if(mime.split("/")[0] === "video"){
                    return lolizita.sendMessage(from, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: mek})
                } else if(mime.split("/")[0] === "audio"){
                    return lolizita.sendMessage(from, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: mek})
                } else {
                    return lolizita.sendMessage(from, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: mek})
            }
        }
 
    lolizita.sendTextWithMentions = async (jid, text, quoted, options = {}) => lolizita.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })       

const sendEnviar = async(first, second, third, bedroom) => {
sendButMessage(from, first, second, [{buttonId: bedroom, buttonText: {displayText: third}, type: 1}])
}

async function sendErrApi(err) {
console.log('Error : %s', color(err, 'red'));
enviar(mess.commandError());

// function envia mensagem de erro para o dono
let error = `${err}`
lolizita.sendMessage(owner + "@s.whatsapp.net", {text: mess.sendErrApis(error, comando, hr, pushname, sender, err)});
}

// Anti links
if(isUrl(budy) && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
if (budy.match(await lolizita.groupInviteCode(from))) return enviar('Link do Grupo, n??o irei remover..')  
enviar('*Link detectado, por??m usu??rio ?? admin*')
}

// Anti links
if(isUrl(budy) && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
enviar('*Link detectado, punindo usu??rio...*')
lolizita.groupParticipantsUpdate(from, [sender], "remove")
}

if (budy.length > 1000) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
enviar ('???TRAVA????\n\nVoce enviou um tipo de trava, por isso sera banido do grupo :('.repeat(1))
setTimeout( () => {
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????'.repeat(300))
}, 50)
console.log(color('\n\n[TRAVA]', 'red'), color('trava indentificada!\n\n', 'yellow'))
setTimeout( () => {
lolizita.groupParticipantsUpdate(from, [sender], "remove")
}, 1100)
}
 

switch (comando) {

case 'menu':  
case 'm':  
case 'help': {
let message = await prepareWAMessageMedia({ image: logo }, { upload: lolizita.waUploadToServer })              
const template2 = generateWAMessageFromContent(from, proto.Message.fromObject({
templateMessage: {hydratedTemplate: {imageMessage: message.imageMessage,
hydratedContentText: linguagem.menu(prefix, hr, me),
hydratedButtons: [{urlButton: {
displayText: "???????????????????? ???????? ????????????????????????????",
url: api}}, {
callButton: {
displayText: '?????????????????????????????????????????',
phoneNumber: owner}
}, {
quickReplyButton: {
displayText: "???????????????????????????????????????????? ???????? ????????????????",
id: `${prefix}ping`}
}, {
quickReplyButton: {
displayText: "????????????????????????????????/????????????????????",
id: `${prefix}dono`}  
}, {
quickReplyButton: {
displayText: "????????????????????????",
id: `${prefix}doar`
}}]}}}), {userJid: from, quoted: mek})
lolizita.relayMessage(from, template2.message, {messageId: template2.key.id}) 
}
break

case 'download': {
buttons = [{buttonId: `${prefix}grupo`, buttonText: {displayText: "????ADMS"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.download(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break


case 'playvid': {
if (args.length < 1) return enviar(mess.textSyntax());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/playmp4?nome=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {video: {url: anu.resultado.url}, mimetype: 'video/mp4', caption: mess.playResult(anu)}, {quoted: mek})
}).catch(err => sendErrApi(err))
}
break

case 'ytmp3':
let { yta } = require('./lib/y2mate')
if (!q) return reply('masukan link video youtube yang ingin di download\n_ex: !ytmp3 https://youtube.com');
console.log(url);
lolizita.sendMessage(from, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg' }, { quoted: mek });
break

case 'playvid': {
if (args.length < 1) return enviar(mess.linkSyntax());
if (!args[0].startsWith("https://youtu.be/")) return enviar(mess.textNotAllowed());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/ytmp4?url=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {video: {url: anu.resultado.link}, mimetype: 'video/mp4', caption: mess.playResult(anu)}, {quoted: mek})
}).catch(err => sendErrApi(err))
}
break

case 'xnxxplay': {
if (args.length < 1) return enviar(mess.linkSyntax());
if (!args[0].startsWith("https://www.xnxx.com/")) return enviar(mess.textNotAllowed());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/xnxx/?link=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {video: {url: anu.resultado.link}, mimetype: 'video/mp4'}, {quoted: mek, thumbnail: null})
}).catch(err => sendErrApi(err))
}
break

case 'xvideosplay': {
if (args.length < 1) return enviar(mess.linkSyntax());
if (!args[0].startsWith("https://www.xvideos.com/")) return enviar(mess.textNotAllowed());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/xvideos?link=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {video: {url: anu.resultado.link}, mimetype: 'video/mp4'}, {quoted: mek, thumbnail: null})
}).catch(err => sendErrApi(err))
}
break

case 'hentaistube': {
if (args.length < 1) return enviar(mess.linkSyntax());
if (!args[0].startsWith("https://www.hentaistube.com/")) return enviar(mess.textNotAllowed());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/hentai?link=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {video: {url: anu.resultado.video}, mimetype: 'video/mp4'}, {quoted: mek, thumbnail: null})
}).catch(err => sendErrApi(err))
}
break

case 'twitter': {
if (args.length < 1) return enviar(mess.linkSyntax());
if (!args[0].startsWith("https://twitter.com/")) return enviar(mess.textNotAllowed());
await enviar(mess.wait());
await fetchJson(`https://lolizit-api.herokuapp.com/api/download/twitter/?link=${args.join(' ')}&apikey=` + compreSuaApikey).then(anu => {
lolizita.sendMessage(from, {image: {url: anu.resultado.thumb}, caption: anu.resultado.desc}, {quoted: mek});
lolizita.sendMessage(from, {video: {url: anu.resultado.HD}, caption: "V??deo em HD", mimetype: 'video/mp4'}, {quoted: mek});
lolizita.sendMessage(from, {video: {url: anu.resultado.SD}, caption: "V??deo em SD", mimetype: 'video/mp4'}, {quoted: mek});
}).catch(err => sendErrApi(err))
}
break

case 'grupo': {
buttons = [{buttonId: `${prefix}foto`, buttonText: {displayText: "???????fotos"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.grupo(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break

case 'banir':
case 'kick':
case 'ban': {
try {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (!args.join(' ')) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar alguma mensagem da pesooa pra eu expulsar')
mentioned1 = mek.message.extendedTextMessage.contextInfo.participant
lolizita.groupParticipantsUpdate(from, [mentioned1], "remove").catch((err) => enviar("err"))
} else if (args.join(' ').length > 1) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar algu??m pra eu expulsar')
mentioned2 = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned2.length > 1) {
lolizita.groupParticipantsUpdate(from, mentioned2, "remove").catch((err) => enviar("A remo????o do macaco foi feita com sucesso ????????"))
} else {
lolizita.groupParticipantsUpdate(from, mentioned2, "remove")
}
}
} catch {
return
}
}
break

case 'promote':
case 'promover': {
try {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (!args.join(' ')) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar alguma mensagem da pesooa pra eu expulsar')
mentioned1 = mek.message.extendedTextMessage.contextInfo.participant
lolizita.sendMessage(from, {text: mess.mentioned1(mentioned1), contextInfo: {mentionedJid: [mentioned1]}}, {quoted: mek});
lolizita.groupParticipantsUpdate(from, [mentioned1], 'promote')
} else if (args.join(' ').length > 1) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar algu??m pra eu expulsar')
mentioned2 = mek.message.extendedTextMessage.contextInfo.mentionedJid
lolizita.sendMessage(from, {text: mess.mentioned2(mentioned2), contextInfo: {mentionedJid: [mentioned2]}}, {quoted: mek});
if (mentioned2.length > 1) {
lolizita.groupParticipantsUpdate(from, mentioned2, 'promote')
} else {
lolizita.groupParticipantsUpdate(from, mentioned2, 'promote')
}
}
} catch {
return
}
}
break

           case 'dono': {	
                let vcard = 'BEGIN:VCARD\n' 
                    + 'VERSION:3.0\n' 
                    + 'N:;iago????.;;;'
                    + 'FN:iago????.\n' // nome todo
                    + 'ORG:iago????;\n' // organiza????o
                    + 'TEL;type=CELL;type=VOICE;waid=15874108061:+1 (587) 410-8061\n' // WhatsApp ID + n??mero
                    + 'END:VCARD' // finaliza????o
                lolizita.sendMessage(from, { contacts: { displayName: 'iago o brabo ne bb????.', contacts: [{ vcard }] } }, { quoted: tob2 })
            }
            
            
           
            break


case 'demote':
case 'rebaixar': {
try {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (!args.join(' ')) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar alguma mensagem da pesooa pra eu expulsar')
mentioned1 = mek.message.extendedTextMessage.contextInfo.participant
lolizita.sendMessage(from, {text: mess.downgrade(mentioned1), contextInfo: {mentionedJid: [mentioned1]}}, {quoted: mek});
lolizita.groupParticipantsUpdate(from, [mentioned1], 'demote')
} else if (args.join(' ').length > 1) {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Ta de adm mas ?? burro pa caralho, c tem que marcar algu??m pra eu expulsar')
mentioned2 = mek.message.extendedTextMessage.contextInfo.mentionedJid
lolizita.sendMessage(from, {text: mess.downgrade1(mentioned2), contextInfo: {mentionedJid: [mentioned2]}}, {quoted: mek});
if (mentioned2.length > 1) {
lolizita.groupParticipantsUpdate(from, mentioned2, 'demote')
} else {
lolizita.groupParticipantsUpdate(from, mentioned2, 'demote')
}
}
} catch {
return 
}
}
break

case 'add': 
case 'reviver': {
try {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (!isOwner) return enviar ('????Somente o iago !????')
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
mentioned1 = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await lolizita.groupParticipantsUpdate(from, [mentioned1], 'add');
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('??? O alvo j?? est?? no grupo! ???') 
if(inv[0].code == 403) return enviar('??? Erro, conta privada do usu??rio ???')
if(inv[0].code == 408) return enviar('??? Erro, usu??rio acabou de sair ???')
if(inv[0].code == 401) return enviar('??? Erro, porque o bot est?? bloqueado pelo alvo ???')
} else {
mentioned2 = mek.message.extendedTextMessage.contextInfo.participant
response = await lolizita.groupParticipantsUpdate(from, [mentioned2], 'add');
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('??? O alvo j?? est?? no grupo! ???')
if(inv[0].code == 403) return enviar('??? Erro, conta privada do usu??rio ???')
if(inv[0].code == 403) return enviar('??? Falhou, porque em privado ???')
if(inv[0].code == 408) return enviar('??? Falha, porque o alvo acabou de sair ???')
if(inv[0].code == 401) return enviar('??? Falha, porque o bot est?? bloqueado pelo alvo ???')
}
} catch {
return 
}
}
break

case 'hidetag': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.length < 1) return enviar(mess.textSyntax());
lolizita.sendMessage(from, {text : args.join(' '), mentions: groupMembers.map(a => a.id)})
}
break

case 'setdesc': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.join(' ').length > 500) return enviar(mess.limit());
await lolizita.groupUpdateDescription(from, args.join(' '))
}
break

case 'setnome': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.join(' ').length > 25) return enviar(mess.limit());
await lolizita.groupUpdateSubject(from, args.join(' '));
}
break

case 'fechar': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
await lolizita.groupSettingUpdate(from, 'announcement')
} 
break

case 'abrir': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
lolizita.groupSettingUpdate(from, 'not_announcement')
}
break

case 'grupo1':
  sendButMessage(from,`Escolha Abaixo Oque Voc?? Deseja Fazer`,`???????? ????????????????????????`,
  [
              {              
                buttonId: `abrir`,
                buttonText: {
                  displayText:  `???? ??????????????? ?????????????? ???? `,
                },
                type: 1,
              },
              {              
                buttonId: `fechar`,
                buttonText: {
                  displayText:  `???? ????????????????? ?????????????? ???? `,
                },
                type: 1
              },
            ]);
  break


case 'listadm': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
teks = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
}
break

case 'link': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
enviar(`Link: https://chat.whatsapp.com/${await lolizita.groupInviteCode(from)}`)
}
break

case 'antilink':
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.length < 1) return enviar('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antilink on');
if (args[0] === 'on') {
if (isAntiLink) return enviar("O antilink j?? est?? ativado.");
antilink.push(from)
fs.writeFileSync('./base de dados/FilesJson/antilink.json', JSON.stringify(antilink))
sendEnviar(mess.functionOn(comando), mess.nameEnter(me), "???????", "a");
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} n??o estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/FilesJson/antilink.json', JSON.stringify(antilink))
sendEnviar(mess.functionOff(comando), mess.nameEnter(me), "???????", "a");
} 
break

case 'antitrava':
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.length < 1) return enviar('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: antitrava on');
if (args[0] === 'on') {
if (isAntiVirtex) return enviar("O antitrava j?? est?? ativado.");
_antivirtex.push(from)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sendEnviar(mess.functionOn(comando), mess.nameEnter(me), "???????", "a");
} else if (args[0] === 'off') {
let position = _antivirtex.indexOf(_antivirtex.find((x) => x === from))
if (position === -1) return enviar(`${comando} n??o estava ativo antes`)
_antivirtex.splice(position, 1)
fs.writeFileSync('./groups/antivirtex.json', JSON.stringify(_antivirtex))
sendEnviar(mess.functionOff(comando), mess.nameEnter(me), "???????", "a");
} 
break

case 'antitrava':
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (args.length < 1) return enviar('Ensira [on] pra ativar e [off] pra desativar\n\nExemplo: welcome on');
if (args[0] === 'on') {
if (isWelkom) return enviar("O bem vindo j?? est?? ativado.");
_antivirtex.push(from)
fs.writeFileSync('./groups/welkom.json', JSON.stringify(welkom))
sendEnviar(mess.functionOn(comando), mess.nameEnter(me), "???????", "a");
} else if (args[0] === 'off') {
let position = _antivirtex.indexOf(_antivirtex.find((x) => x === from))
if (position === -1) return enviar(`${comando} n??o estava ativo antes`)
_antivirtex.splice(position, 1)
fs.writeFileSync('./groups/welkom.json', JSON.stringify(welkom))
sendEnviar(mess.functionOff(comando), mess.nameEnter(me), "???????", "a");
} 
break

case 'tagall':
if (!isGroup) return enviar(mess.group());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
if (!isGroupAdmins) return enviar(mess.admin());
members_id = []
teks = `\n\n${args.length > 0 ? `\n ??? ${comando.trim()}\n\n` : ''}${readMore}\n`
for (let mem of groupMembers) {
teks += ` ?? @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break 

case 'foto': {
buttons = [{buttonId: `${prefix}jogos`, buttonText: {displayText: "????"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.logos(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: mek})
}
break

case 'jogos': {
buttons = [{buttonId: `${prefix}animes`, buttonText: {displayText: "????/????"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.jogos(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break

case 'slot': {
const sotoy = JSON.parse(fs.readFileSync('./base de dados/FilesJson/sotoy.json'))
var somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????') ||(somtoy == '???? : ???? : ????')) {
var vitr = "Voc?? ganhou!!!"
} else {
var vitr = "Voc?? perdeu..."
}
if (vitr == "Voc?? ganhou!!!") {
setTimeout( () => {
enviar(`Voc?? ganhou????????????!!!`)
}, 1100)
}
sendEnviar(mess.slot(somtoy), mess.nameEnter(me), comando, prefix + comando);
}
break

case 'corno': {
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Voc?? precisa mencionar algu??m pra ver o n??vel do chifre')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
anu = Math.floor(Math.random() * 101)
if (anu > 50) {
teks = `*Ap??s medir o* @${mentioned[0].split('@')[0]} *SUA PORCENTAGEM E DE : ${anu}% TU E UM BAITA CORNO EM SLK????*`
} else {
teks = `*Ap??s medir o* @${mentioned[0].split('@')[0]} *SUA PORCENTAGEM E DE : ${anu}% SUA VEZ DE SER CORNO CHEGARA RLX????!!*`
}
mentions(teks, mentioned, true)
}
break

case 'dado':
const dadus = ["???","???","???","???","???","???"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
lolizita.sendMessage(from, {sticker: fs.readFileSync('./base de dados/database/dados/'+dadu+'.webp')}, {quoted: mek})
break

case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
if (tpa == "vazio") {
var morte = "Voc?? teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
lolizita.sendMessage(from, {sticker: fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')})
}, 2100)
}
setTimeout( () => {
lolizita.sendMessage(from, {text: morte}, {quoted: mek})
}, 2300)
break

case 'tagme': {
if (!isGroup) return enviar(mess.group());
const tagme = `@${sender.split("@")[0]} ?????????????`
lolizita.sendMessage(from, {text: tagme, contextInfo: {"mentionedJid": [sender]}}, {quoted: mek})
}
break

case 'cassino': {
if (!isGroup) return enviar(mess.group());
const sotoy = JSON.parse(fs.readFileSync('./base de dados/FilesJson/sotoy.json'))
const soto = [
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????',
'???? : ???? : ????'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????') ||(somtoy2 == '???? : ???? : ????')) {
var Vit??ria = "Voc?? ganhou!!!"
} else {
var Vit??ria = "Voc?? perdeu..."
}
sendEnviar(mess.somtoy2(somtoy2, Vit??ria), mess.nameEnter(me), comando, prefix + comando)
if (Vit??ria == "Voc?? ganhou!!!") {
setTimeout( () => {
enviar(`Parab??ns voc?? ganhou!`)
}, 1100)
}
}
break

case 'caracoroa':
const cara = fs.readFileSync('./base de dados/database/figurinhas/cara.webp');
const coroa = fs.readFileSync('./base de dados/database/figurinhas/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
enviar(`voc?? conseguiu: ${fej}`);
lolizita.sendMessage(from, {sticker: fs.readFileSync('./base de dados/database/figurinhas/'+fej+'.webp')}, {quoted: mek})
break

case 'sn':
if (!isGroup) return enviar(mess.group());
if (args.length < 1) return enviar(`Voc?? deve fazer uma pergunta...\nExemplo: sn O ${SeuNome} ?? um baiano pregui??oso?`);
const sn = ['sim', 'n??o']
enviar(`${args.join(' ')}\n\nSegundo meus c??lculos, eu acredito que... ${sn[Math.floor(Math.random() * (sn.length))]}`);
break

case 'amongus': 
if (!isGroup) return enviar(mess.group());
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Voc?? precisa mencionar algu??m')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
mentions(mess.amongus(mentioned), mentioned, true)
break

case 'preto':
case 'gay':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
if (!isGroup) return enviar(mess.group());
result = []
teks = `O mais *${comando}* ?? : `
for(i = 0; i < 1; i++) {
martrandom = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[martrandom].id.split('@')[0]}\n`
result.push(groupMembers[martrandom].id)
}
mentions(teks, result, true)
break

case 'animes': {
buttons = [{buttonId: `${prefix}figurinhas`, buttonText: {displayText: "???????STICKER'S"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.animes(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break       

case 'loli': 
buffer = await getBuffer (`https://api-aprilia-xyz.herokuapp.com/api/randomimage/loli`)
lolizita.sendMessage(from, {image: buffer}, {quoted: tob2})
setTimeout( () => {
sendButMessage(from,`para ver mais aperte abaixo`,`???????? ????????????????????????`,
  [
              {              
                buttonId: `loli`,
                buttonText: {
                  displayText:  `????????????????????????????????????`,
                },
                type: 1,
              },
            ]);
}, 4110)            
  break

case  'hentai': {
if (isGroup) enviar('??????Aguarde enviando no seu privado') 
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
lolizita.sendMessage(sender, {image: buffer}, {quoted: tob2, thumbnail:null})
} 
break


case 'figurinhas': {
buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: "????VOUTAR"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.figurinhas(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break

case 'nickff': 
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=Alphabott`)
anu1 = `Aqui est??: ${anu.result}\n`
enviar(anu1)
break

case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif': {
try{
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
execute(`ffmpeg -i ${media} -vf scale=512:512 ${ran}`, async function(err, result) {
if(err) return enviar("Err 186")
await lolizita.sendMessage(from, {sticker: {url: `./${ran}`}}, {quoted: mek})
await fs.unlinkSync(media)
await fs.unlinkSync(ran)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
//enviar(mess.wait());
execute(`ffmpeg -i ${media} -y -vcodec libwebp -fs 0.99M -filter_complex "[0:v] scale=512:512,fps=12,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
//if (err) return enviar(mess.stickerError());
await lolizita.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)
})
} else return enviar(mess.marking(prefix))
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente')
}
}
break

//autosticker ver????o criada pelo iago!
case"": {
if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
execute(`ffmpeg -i ${media} -vf scale=512:512 ${ran}`, async function(err, result) {
if(err) return enviar("Err 186")
await lolizita.sendMessage(from, {sticker: {url: `./${ran}`}}, {quoted: mek})
await fs.unlinkSync(media)
await fs.unlinkSync(ran)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
let rane = getRandom('.'+ await getExtension(encmedia.mimetype))
let imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
let ran = getRandom('.webp')
execute(`ffmpeg -i ${media} -y -vcodec libwebp -fs 0.99M -filter_complex "[0:v] scale=512:512,fps=12,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
if (err) return enviar(mess.stickerError());
await lolizita.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)
})
}
}
break
//fim auto sticker

case 'attp':
if (args.length < 1) return enviar('Cade seu texto ?\n\nExemplo: attp iago e gado!')
enviar ('Por favor aguarde')
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
lolizita.sendMessage(from, {sticker: anu}, {quoted: tob2})
break


case 'toimg': {
if (!isQuotedSticker) return reply('??? adesivo de resposta um ???')
await enviar(mess.wait());
let quotedMessSticker = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage;
buff = await getFileBuffer(quotedMessSticker, 'sticker')
lolizita.sendMessage(from, {image: buff}, {quoted: mek})
}
break

case 'frase':
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
enviar(`${anu.Frase}`)
break

case 'tourl':
try {
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
quotedMess = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
let media = await lolizita.downloadAndSaveMediaMessage(quotedMess)
let { telegraph } = require('./base de dados/lib/uploader.js');
enviar(util.format(await telegraph(media)))
} else {
enviar('????Use ou responda a uma foto ou v??deo ')
}
} catch (err) {
enviar(mess.commandError());
console.log('Error : %s', color(err, 'red'));
}
break

case 'criador': {
buttons = [{buttonId: `${prefix}jogos`, buttonText: {displayText: "???????????Next: jogos???"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.criador(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break

case 'doar': {
enviar ('???? Ol?? fa??a uma doa????o e contribua com que o bot permanessa ativo????\n\n\n ????Qualquer valor e bem vindo nao existe quantia baixa!????\n\n\n ????Chave E-mail ????')
setTimeout( () => {
enviar ('iago.ntdragon.pix@gmail.com')
}, 1110)
}
break

case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
????????????????????????????????????????????????????????????????????????????
???
?????????????????????????????? ${latensi.toFixed(4)}  ????????????????????????????????????
???
????????????????????????????????????????????????
???
?????????????????????????????? ????????????????????????????: ${runtime(process.uptime())}
???
????????????????????? ?????? ??????????????????`.trim()
enviar(respon)
}

break


case 'metadinha':
enviar('????Aguarde......????(Aconselho usar de 10 em 10 minutos)')
get = await fetchJson(`https://api.zacros.my.id/randomimg/ppcouple`) 
male = await getBuffer(`${get.male}`) 
lolizita.sendMessage(from, {image: male}, {quoted: tob2});;
female = await getBuffer(`${get.female}`) 
setTimeout( () => {
lolizita.sendMessage(from, {image: female}, {quoted: tob2})
}, 1100)
break

case 'neko': {
              await enviar(('Carregando..'))
              let loli = await fetchJson(`https://api.waifu.pics/sfw/neko`)
              await sendFileFromUrl(from,loli.url,` Ol?? ${pushname} prontinho`,mek)
              }
		break

case 'iago':
pre = `????????Sim iago e meu criador pra falar com ele mande dono pra mim????????`
enviar(String(pre))
break

case 'figualeatoria':
enviar (`Acalme seu cora????o j?? estou enviando????`)
anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
lolizita.sendMessage(from, {sticker: anu}, {quoted: mek})
break

case 'tiktok':
if (args.length < 1) return enviar("Cade o link do tiktok")
menu = `????Ol?? ${pushname} selecione em que tipo de midia voc?? quer baixar????`
teks = `Por favor escolha um abaixo???? `
but = [
{ buttonId: `ttnowm ${args.join(' ')}`, buttonText: { displayText: '???????????????? ???????????????????????????' }, type: 1 },
{ buttonId: `ttaudio ${args.join(' ')}`, buttonText: { displayText: '????????????3????' }, type: 1 }
]
sendButMessage(from, menu, teks, but)
break

case 'ttnowm':
if (args.length < 1) return enviar("Cade o link do tiktok")
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${args.join(' ')}&apikey=NisaaCantik`)
lolizita.sendMessage(from, {video: {url: anu.result.nowatermark}, mimetype: 'video/mp4'}, {quoted: tob2, thumbnail: null})
break

case 'ttaudio':
if (args.length < 1) return enviar("Cade o link do tiktok")
anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=Tiktok https://tiktok/&apikey=NisaaCantik`)
lolizita.sendMessage(from, {video: {url: anu.result.audio}, mimetype: 'mp3'}, {quoted: tob2, thumbnail: null})
break

//????/*avalia????o*/????

case '1pessimo':
enviar (`???? obrigado pela avalia????o`)
suporte = `${OwnerNumber}@s.whatsapp.net`;
tsexto = `
????????????????????? Avalia????o ??????????????????
???De: ${pushname} 
???
???N??mero wa.me//${sender.split("@")[0]}
???
???Grupo: ${groupName}
???
???
?????????????????????????????????????????????
???Nota: ???????????????
?????????????????????????????????????????????
`
lolizita.sendMessage(suporte, {text: tsexto}, {quoted: tob2})
break

case '1ruim':
enviar (`???? obrigado pela avalia????o`)
suporte = `${OwnerNumber}@s.whatsapp.net`;
kptexto = `
????????????????????? Avalia????o ??????????????????
???De: ${pushname} 
???
???N??mero wa.me//${sender.split("@")[0]}
???
???Grupo: ${groupName}
???
???
?????????????????????????????????????????????
???Nota: ???????????????
?????????????????????????????????????????????
`
lolizita.sendMessage(suporte, {text: kptexto}, {quoted: tob2})
break

case '1bom':
enviar (`??? obrigado pela avalia????o`)
suporte = `${OwnerNumber}@s.whatsapp.net`;
kkktexto = `
????????????????????? Avalia????o ??????????????????
???De: ${pushname} 
???
???N??mero wa.me//${sender.split("@")[0]}
???
???Grupo: ${groupName}
???
???
?????????????????????????????????????????????
???Nota: ???????????????
?????????????????????????????????????????????
`
lolizita.sendMessage(suporte, {text: kkktexto}, {quoted: tob2})
break

case '1muinto-bom':
enviar (`???? obrigado pela avalia????o`)
suporte = `${OwnerNumber}@s.whatsapp.net`;
xxxtexto = `
????????????????????? Avalia????o ??????????????????
???De: ${pushname} 
???
???N??mero wa.me//${sender.split("@")[0]}
???
???Grupo: ${groupName}
???
???
?????????????????????????????????????????????
???Nota: ???????????????
?????????????????????????????????????????????
`
lolizita.sendMessage(suporte, {text: xxxtexto}, {quoted: tob2})
break

case '1perfeito':
enviar (`???? obrigado pela avalia????o`)
suporte = `${OwnerNumber}@s.whatsapp.net`;
llltexto = `
????????????????????? Avalia????o ??????????????????
???De: ${pushname} 
???
???N??mero wa.me//${sender.split("@")[0]}
???
???Grupo: ${groupName}
???
???
?????????????????????????????????????????????
???Nota: ???????????????
?????????????????????????????????????????????
`
lolizita.sendMessage(suporte, {text: llltexto}, {quoted: tob2})
break

case 'avaliar': {
buttons = [{buttonId: `????`, buttonText: {displayText: "????"}, type: 1}]
buttonMessage = {image: logo, caption: linguagem.avaliar(prefix, hr, me), footerText: 'Hello World', buttons: buttons, headerType: 4}
lolizita.sendMessage(from, buttonMessage, {quoted: tob2})
}
break

//*fim da avalia????o*/????

case 'clear': {
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????')
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????')
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????')
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????')
enviar ('??????\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n????')
}
break

case '08':
if (!isOwner) return enviar ('????Somente o iago !????')
if (!isBotGroupAdmins) return enviar ('Desculpe mestre mais n??o sou adm!????')
kkk = owner + "@s.whatsapp.net";
await lolizita.groupParticipantsUpdate(from, [kkk], 'promote')
await enviar (`??? claro, vc tem todo o direito de ser adm, mestre ???????????????`)
break

case '07':
if (!isOwner) return enviar ('????Somente o iago !????')
if (!isBotGroupAdmins) return enviar ('Desculpe mestre mais n??o sou adm!????')
kkk = owner + "@s.whatsapp.net";
await lolizita.groupParticipantsUpdate(from, [kkk], 'demote')
await enviar (`??? como quiser.`)
break

case 'kitar': {
                if (!isOwner) return enviar ('????Somente o iago !????')
                enviar ('Vo meter o p?? eu que n??o quero treta com meu dono ????????')
                setTimeout( () => {
                lolizita.groupLeave(from)
                }, 1100)
            }
            break

case 'bc': {
                if (!isOwner) return enviar ('????Somente o iago !????')
                if (!text) return enviar(`Cade o texto?\n\nExemplo de Uso: ${prefix + comando} iago gado`)
                let anu = await store.chats.all().map(v => v.id)
                enviar(`A transmiss??o sera enviada em ${anu.length * 1.5} segundos para ${anu.length} Chats`)
		for (let yoi of anu) {
		    await sleep(1500)
                      let txt = `??? TM do iago ???\n\n${text}`
                      lolizita.sendMessage( yoi, {text: txt})
		}
		enviar('Enviado!')
            }
            break

case 'emoji': {
	        if (!text) return enviar (`Exemplo: ${prefix + comando} ????+????`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await lolizita.sendImageAsSticker(from, res.url, mek, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break

case 'grupos': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `??? Lista de grupos em que o NT DRAGON-MD exerce suas fun????es\n\nTotal: ${anu.length} Group\n\n\n`
                 for (let i of anu) {
                     let metadata = await lolizita.groupMetadata(i)
                     teks += `????????????????????????????????????????????????????????????????????????????????\n\n??? Nome: ${metadata.subject}\n??? Dono: @${metadata.owner.split('@')[0]}\n??? ID: ${metadata.id}\n??? Data crian??a: ${moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n??? Membros: ${metadata.participants.length}\n\n????????????????????????????????????????????????????????????????????????????????\n??????\n???\n???`
                 }
                 lolizita.sendTextWithMentions(from, teks, mek)
             }
             break

case 'marcar': {
if (!isGroup) return enviar(mess.group());
if (!isGroupAdmins) return enviar(mess.admin());
if (!isBotGroupAdmins) return enviar(mess.fromAdmin());
let teks = `???????????? *???? Aten????o!* ????????????
 
 ??? Mensagem: ${q ? q : 'Nada n??o'}\n\n`
                for (let mem of participants) {
                teks += `??? @${mem.id.split('@')[0]}\n`
                }
                lolizita.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: tob2 })
                }
                break

	   
	   case 'play':{
		   if (!q) return enviar ('????Nao econtro m??sicas que n??o tem nome???? ')
			   
		  yt = await fetchJson(`https://human-apixyz.herokuapp.com/api/yt/playmp3?query=${q}&apikey=AnggaKey`)
		  djasjus = `Play criado do 0 pelo iago\n\nTitulo : ${yt.title}\n\nVizus : ${yt.views}\n\n\n????Aguarde , rlx ai que vou mandar sim????`
		  lolizita.sendMessage(from, {text: djasjus}, {quoted: mek})
		  sendFileFromUrl(from, yt.url, mek)
		  break
	   }

default:


}
} catch (e) {
e = String(e)
console.log('Error : %s', color(e, 'red'));
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
let { bannerText } = require('./base de dados/lib/banner');
console.log(bannerText(`Modificado: ${__filename}`).string);
delete require.cache[file]
require(file)
})