//base by XxVenom
//re-upload? recode? copy code? give credit ya :)
//YouTube: @vortex-X-no-Name-Tech
//Telegram: https://t.me/+bi_uGsdC46phNTFk
//GitHub: @vortex-X-no-Name-Tech
//WhatsApp: https://whatsapp.com/channel/0029Vaylj097z4keWU9KXG0N
//want more free bot scripts? subscribe to my youtube channel: https://www.youtube.com/@vortex-X-no-Name-Tech

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
