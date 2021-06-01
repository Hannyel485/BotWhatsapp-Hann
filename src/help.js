const help = (prefix) => {
	return `
「 *HannyelBot by Hannyel* 」

◪ *INFORMACION*
  ❏ Comando: 「  ${prefix}  」
  ❏ Creador: Hannyel


◪ *COMUNICADO*
${prefix}ytmp4 y ${prefix}ytmp3 estan en mantenimiento ya que los servidores estan colapsados

◪ *PARA USAR EL BOT*
  ❏ Registrate con el comando ${prefix}daftar y tu nombre

◪ *NUEVA ACTUALIZACION*
  │
  ├─ ❏ ${prefix}welcome 1
  └─ Da la bienvenida a los nuevos miembro

◪ *CREAR STICKERS*
  │
  ├─ ❏ ${prefix}sticker o s
  ├─ ❏ ${prefix}stickergif
  ├─ 6 segundos de video stickergif
  ├─ ❏ ${prefix}toimg
  ├─ De sticker a imagen JPG
  ├─ ❏ ${prefix}tomp3
  └─ De video a audio MP3

◪ *DESCARGAS*
  │
  ├─ ❏ ${prefix}play
  └─ Mas nombre y artista o link del video de YT
El límite es 2000 canciones se restablecerá cada 00.00 o 12.00 a. m.
Asi que no abusen del ${prefix}play :)

◪ *AUDIO*
  │
  ├─ ❏ ${prefix}play
  ├─ ❏ ${prefix}bahasa
  └─ ❏ ${prefix}tts es

◪ *OTROS*
  │
  ├─ ❏ ${prefix}wame
  ├─ Link de Whatsapp de un user
  ├─❏ ${prefix}qrcode
  └─ Coloca un texto a qr

◪ *GRUPOS*
  │
  ├─ ❏ ${prefix}closegc
  ├─ Cerrar el grupo solo admins
  ├─ ❏ ${prefix}opengc
  ├─ Abrir grupo solo admins
  ├─ ❏ ${prefix}kick o pafuera
  ├─ Eliminar a un miembro 
  ├─ ❏ ${prefix}promote
  ├─ Dar admin a un miembro
  ├─ ❏ ${prefix}demote
  ├─ Quitar el admin
  ├─ ❏ ${prefix}linkgc
  ├─ Link del grupo
  ├─ ❏ ${prefix}tagall
  └─ Nombra a todos los del grupo

by Hannyel
`
}

exports.help = help
