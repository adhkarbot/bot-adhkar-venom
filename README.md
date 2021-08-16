

<p align="center">
  <img align="center" src="/bot-adkhar-termux-1-1536x864.png" alt="Logo" width="768" height="432">
</p>


#  Bot Adkhar WhatsApp || بوت أذكار للواتساب
##### A bot that sends adhkar and photos and video automatically every hour to all your chats
##### روبوت يرسل الأذكار والصور و الفيديو تلقائيًا كل ساعة لجميع الدردشات

<p align="center">
  <a href="https://orkestral.github.io/venom">• شكراً venom</a>
</p>

#####

# Installation linux || طريقة التثبيت للينكس

```bash
> sudo apt-get update && sudo apt-get upgrade -y
> sudo apt-get install curl -y
> curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash 
> sudo apt-get install -y nodejs
> sudo apt-get install -y git
> git clone https://github.com/adhkarbot/bot-adhkar-venom
> cd bot-adhkar-venom
> npm i
> node index.js
```

# Installation Termux || طريقة التثبيت تيرماكس

```bash
> pkg update && pkg upgrade
> pkg install proot-distro
> proot-distro install alpine
> proot-distro login alpine
> apk update && apk add --no-cache nmap && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk update && \
  apk add --no-cache \
  chromium
> apk add --update nodejs npm
> apk add git
> git clone https://github.com/adhkarbot/bot-adhkar-venom
> cd bot-adhkar-venom
> npm i
> node index.js
```









# Bot features || مميزات البوت

|        ✅        |                Feature           |
| :-------------: | :------------------------------: | 
|       ✅        | مرحبا                                |
|       ✅        | ذكر                                  |
|       ✅        | أذكار الصباح                          |
|       ✅        | أذكار المساء                          |
|       ✅        | قرآن كريم                             |
|       ✅        | صور                                  |
|       ✅        | فيديو                                |
|       ✅        | بث صور او فيديو لجميع القروبات |
|       ✅        | إرسال تلقائ للاذكار                   |










