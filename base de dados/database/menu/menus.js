const fs = require("fs");
const chalk = require('chalk')

//menu 
exports.menu = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐➤──━── ⊱⊰ ──━──➤
⏐𝐴𝑝𝑎𝑔𝑎𝑟 𝑚𝑠𝑔𝑠 
⏐
⏐❱ 𝑐𝑙𝑒𝑎𝑟
⏐
⏐
⏐𝐴𝑣𝑎𝑙𝑖𝑎𝑟 𝑜 𝑏𝑜𝑡
⏐
⏐❱ 𝑎𝑣𝑎𝑙𝑖𝑎𝑟
⏐➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
╭➤──━──📝𝑴𝑬𝑵𝑼𝑺📝◅⏤⏤
⏐
⏐❱ ${prefix}Grupo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}foto
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Jogos
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Criador
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Animes
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Download
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Figurinhas
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//download 
exports.download = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──📥𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫◅⏤⏤
⏐
⏐❱ ${prefix}Play「Nome」 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tiktok「Link」 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Mediafire「Link」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Twitter「Link」 
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//grupo 
exports.avaliar = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤✅𝑂𝑃𝐶𝑂𝐸𝑆 𝐷𝐸 𝐴𝑉𝐴𝐿𝐼𝐴𝐶𝐴𝑂✅◅
⏐
⏐❱ ${prefix}1pessimo
⏐
⏐❱ ${prefix}1ruim
⏐
⏐❱ ${prefix}1bom
⏐
⏐❱ ${prefix}1muinto-bom
⏐
⏐❱ ${prefix}1perfeito
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//grupo 
exports.grupo = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🛐𝑨𝑫𝑴𝑺◅⏤⏤
⏐
⏐❱ ${prefix}Kick「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Promote「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Promover「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Demote「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Rebaixar「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Add「Msg」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Reviver「Numero」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}marcar (marca geral)
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Grupo1 {fechar / abrir}
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antilink「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Antitrava「On/Off」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Link
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Clear
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Listadm
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tagall「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Hidetag「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Setdesc「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Setnome「Texto」
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//logos 
exports.logos = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🖼𝑭𝑶𝑻𝑶️◅⏤⏤
⏐
⏐❱ ${prefix}metadinha
⏐➤──━──━──━───━➤
⏐❱ ${prefix}loli
⏐➤──━──━──━───━➤
⏐❱ ${prefix}neko
⏐➤──━──━──━───━➤
⏐❱ ${prefix}hentai
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//jogos 
exports.jogos = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🎮𝑱𝑶𝑮𝑶𝑺◅⏤⏤
⏐❱ ${prefix}Dado
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Slot
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Corno「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Roleta
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tagme
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Cassino
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Caracoroa
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Sn「Text?」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Amongus「@Tag」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gay
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pau
⏐➤──━──━──━───━➤
⏐❱ ${prefix}grupos 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Feio
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Avaliar 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pau 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Lixo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gado
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Burro
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gordo
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Pobre
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Corno
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Bonito
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Macaco
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Gostoso
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//criador 
exports.criador = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──𝑴𝑬𝑵𝑼 𝑫𝑶 𝑰𝑨𝑮𝑶🤵🏻◅⏤⏤
⏐
⏐❱ ${prefix}08
⏐➤──━──━──━───━➤
⏐❱ ${prefix}07
⏐➤──━──━──━───━➤
⏐❱ ${prefix}kitar 
⏐➤──━──━──━───━➤
⏐❱ ${prefix}add
⏐➤──━──━──━───━➤
⏐❱ ${prefix}bc (text)
⏐
╰➤──━── ⊱⊰ ──━──➤`
}

//animes 
exports.animes = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🥗/🔞️𝑨𝑵𝑰𝑴𝑬◅⏤⏤
⏐
⏐❱ ${prefix}Hentai
⏐➤──━── ⊱⊰ ──━──➤
⏐❱ ${prefix}loli
⏐
╰➤──━── ⊱⊰ ──━──➤
`
}

//figurinhas 
exports.figurinhas = (prefix, hr, me) => {
return `
╭➤──━──🛠️️𝑰𝑵𝑭𝑶 𝑩𝑶𝑻🛠️◅⏤⏤
⏐❱Prefixo:「${prefix}」
⏐
⏐❱Hora: ${hr}
⏐
⏐❱Nome: ${me.name}
⏐
╰➤──━── ⊱⊰ ──━──➤
⏐
⏐
⏐
⏐
╭➤──━──🗃𝑺𝑻𝑰𝑪𝑲𝑬𝑹️◅⏤⏤
⏐
⏐❱ Não e preciso comando 
⏐pra fazer sticker so envie a foto/vidio
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Attp「Texto」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Tourl「Imagem」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}Toimg「Sticker」
⏐➤──━──━──━───━➤
⏐❱ ${prefix}figualeatoria
⏐➤──━──━──━───━➤
⏐❱ ${prefix}stickeranime
⏐
╰➤──━── ⊱⊰ ──━──➤`
}