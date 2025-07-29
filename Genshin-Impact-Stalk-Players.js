//Creator: MisheruModz </> - 5512988047370
//My whatsapp channel: https://whatsapp.com/channel/0029Vb5z4jOG3R3cKpOENd0D
//https://github.com/MisheruModz - Segue lá

const axios = require('axios')
const cheerio = require('cheerio')

function FuncExtraur(htmlzao) {
if (!htmlzao) return [undefined, undefined]
const PegarRank = htmlzao.match(/Rank\s*(\d+)/i)
const PegarLvMundo = htmlzao.match(/Md\.\s*(\d+)/i)
const ar = PegarRank ? PegarRank[1] : undefined
const wl = PegarLvMundo ? PegarLvMundo[1] : undefined
return [ar, wl]
}

async function MisheruStalkeador(uidzin) {
try {
const linkZinMisheru = `https://enka.network/u/${uidzin}/`
const { data } = await axios.get(linkZinMisheru, {
headers: {
'User-Agent': 'Mozilla/5.0 (MisheruModsBot)',
'Accept-Language': 'pt-BR,pt;q=0.9'
}})

const $ = cheerio.load(data)

const NomePlayer = $('h1.svelte-ea8b6b').text().trim()
const linkAvatar = $('figure.avatar-icon img').attr('src')
const PerfilFt = linkAvatar ? 'https://enka.network' + linkAvatar : null
const blocoRank = $('div.ar.svelte-ea8b6b').html()?.trim()
const [arzin, wlzin] = FuncExtraur(blocoRank)
const assinaturaTop = $('div.signature.svelte-ea8b6b').text().trim()
const statsLindos = $('table.stats tr')
const conquistaszin = $(statsLindos[0]).find('td').first().text().trim()
const abismozin = $(statsLindos[1]).find('td').first().text().trim()
const teatrozin = $(statsLindos[2]).find('td').first().text().trim()
const stygianzin = $(statsLindos[3]).find('td').first().text().trim()

return {
feito_por: `By: MisheruModz </>`,
Uid: uidzin,
Nome: NomePlayer,
FotoPerfil: PerfilFt,
RankAventura: arzin,
NivelMundo: wlzin,
Biozin: assinaturaTop,
Conquistas: conquistaszin,
Abismo: abismozin,
Teatro: teatrozin,
Stygian: stygianzin
}

} catch (err) {
return {
erro: `Uid está errado ou deu erro...`,
detalhe: typeof err === 'string' ? err : err.message,
feito_por: `Creator: MisheruModz </>`
}}}

module.exports = MisheruStalkeador

             //case 

case 'genshinstalk': {//By: MisheruModz </>
if (!q) return reply('🧪 Digite o UID do jogador do Genshin Impact')
try {//By: MisheruModz </>
reply(mess.wait())
const MisheruStalkeador = require('./Bomba/scrapers/StalkGenshin.js')//By: MisheruModz </>
const puxando = await MisheruStalkeador(q)
if (puxando.erro) return reply(`${puxando.erro}\n🔍 ${puxando.detalhe}`)
const infostxt = `*💥 MEGUMIN - STALK GENSHIN 💥*

👤 *Nome:* ${puxando.Nome}
🆔 *UID:* ${puxando.Uid}
🎖️ *AR:* *${puxando.RankAventura}*
🌍 *Nível Do Mundo:* *${puxando.NivelMundo}*

📜 *Bio:* ${puxando.Biozin || 'Nenhuma'}

🏆 *Conquistas:* *${puxando.Conquistas || 'Nenhuma'}*
🌀 *Abismo:* *${puxando.Abismo || 'Sem registro'}*
🎭 *Teatro:* *${puxando.Teatro || 'Sem registro'}*
🌑 *Stygian:* *${puxando.Stygian || 'Sem registro'}*

🏷 _By: MisheruModz_`
megumin.sendMessage(from, {image: {url: puxando.FotoPerfil}, caption: infostxt}, {quoted: megu})
} catch (e) {
reply('Vish pae, deu erro ao puxar o perfil!')
}}
break
