const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');

// Ganti dengan token bot Telegram Anda
const token = '7245837939:AAE-eoKlVGfG2WZrJI4OMyYpGPCFw9Vy9M4';

// Inisialisasi bot dengan token
const bot = new TelegramBot(token, { polling: true });

// Fungsi untuk mencatat aktivitas penggunaan bot di console log
function logActivity(msg) {
  const user = msg.from;
  const chat = msg.chat;
  const command = msg.text.toLowerCase();

  console.log(`Aktivitas Penggunaan Bot Telegram`);
  console.log(`• User ID: ${user.id}`);
  console.log(`• Username: ${user.username || 'Tidak ada'}`);
  console.log(`• Chat ID: ${chat.id}`);
  console.log(`• Perintah: ${command}`);
}

// Event listener untuk pesan dari pengguna
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const command = msg.text.toLowerCase();

  // Mencatat aktivitas penggunaan bot di console log
  logActivity(msg);

  // Menanggapi perintah /mix
  if (command.startsWith('/mix')) {
    // Mengekstrak argumen dari pesan
    const args = command.split(' ');
    const url = args[1];
    const time = args[2];
    const rate = args[3];
    const thread = args[4];
    const ProxyFile = args[5];

    // Memeriksa apakah format pesan benar
    if (args.length === 6 && url && time && rate && thread && ProxyFile) {
      // Menjalankan file mix.js dengan argumen yang diberikan
      exec(`node admin.js ${url} ${time} ${rate} ${thread} ${ProxyFile}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          bot.sendMessage(chatId, 'Successful');
          return;
        }
        // Menampilkan output stdout jika berhasil
        console.log(`stdout: ${stdout}`);
        bot.sendMessage(chatId, 'Proses telah dimulai.');
      });
    } else {
      // Memberi tahu pengguna bahwa format pesan tidak benar
      bot.sendMessage(chatId, 'Format pesan tidak benar. Gunakan format: /mix [url] [time] [rate] [thread] [ProxyFile]');
    }
  }
});