const Discord = require('discord.js');
const meercy = new Discord.Client();

const adminprefix = "B";
const devs = ['564794492473835520'];
meercy.on('message', message => {
    console.log("oNNN");
    
meercy.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  meercy.user.setStatus("idle")
});     

  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'pl')) {
  meercy.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
meercy.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
meercy.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith('ls')) {
   meercy.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(` تم تغير اللسننق ألى **${argresult} \** `)
} else        
if (message.content.startsWith('wt')) {
   meercy.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(` تم تغير الواتشنق ألى **${argresult} \** `)
}
});
 meercy.login(process.env.B);
