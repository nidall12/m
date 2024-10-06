const fs = require('fs');

const proxies = [];
const output_file = 'proxy.txt';

if (fs.existsSync(output_file)) {
  fs.unlinkSync(output_file);
  console.log(`'${output_file}' telah dihapus.`);
}

const raw_proxy_sites = [
"https://raw.githubusercontent.com/tuanminpay/live-proxy/master/all.txt",
"https://raw.githubusercontent.com/zevtyardt/proxy-list/main/all.txt",
"https://sunny9577.github.io/proxy-scraper/generated/socks5_proxies.txt",
"https://raw.githubusercontent.com/zloi-user/hideip.me/main/socks5.txt",
"https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/Proxies.txt",
"https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/RAW.txt",
"https://raw.githubusercontent.com/ErcinDedeoglu/proxies/main/proxies/socks5.txt",
"https://api.proxyscrape.com/v4/free-proxy-list/get?request=display_proxies&proxy_format=protocolipport&format=text",
  "https://raw.githubusercontent.com/tuanminpay/live-proxy/master/all.txt",
  "https://raw.githubusercontent.com/zevtyardt/proxy-list/main/all.txt",
  "https://sunny9577.github.io/proxy-scraper/generated/socks5_proxies.txt",
  "https://raw.githubusercontent.com/zloi-user/hideip.me/main/socks5.txt",
  "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/Proxies.txt",
  "https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/xResults/RAW.txt",
  "https://raw.githubusercontent.com/ErcinDedeoglu/proxies/main/proxies/socks5.txt",
  "https://api.proxyscrape.com/v4/free-proxy-list/get?request=display_proxies&proxy_format=protocolipport&format=text",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
  "https://www.proxy-list.download/api/v1/get?type=socks5",
  "https://www.socks-proxy.net/",
  "https://www.proxyscan.io/download?type=socks5",
  "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt",
  "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks5.txt",
  "https://www.my-proxy.com/free-socks-5-proxy.html",
  "https://www.freeproxychecker.com/result/socks5_proxies.txt",
  "https://openproxy.space/list/socks5",
  "https://www.proxy-list.space/socks5",
  "https://free-proxy-list.net/socks-proxy.html",
  "https://proxyspace.pro/socks5.txt",
  "https://spys.one/en/socks-proxy-list/",
  "https://multiproxy.org/txt_anon/proxy.txt",
  "https://www.sslproxies.org/",
  "https://www.us-proxy.org/",
  "https://free-proxy-list.net/",
  "https://www.proxy-list.download/SOCKS5",
  "https://vpnoverview.com/privacy/anonymous-browsing/free-proxy-servers/",
  "https://list.proxylistplus.com/Fresh-HTTP-Proxy-List-1",
  "https://www.socks-proxy.net/all.txt",
  "https://www.proxylists.net/socks5.txt",
  "https://raw.githubusercontent.com/mmpx12/proxy-list/master/socks5.txt",
  "https://proxy-daily.com/",
  "https://proxyhub.me/en/proxy-list/type-socks5/",
  "https://www.cool-proxy.net/proxies.json",
  "https://github.com/clarketm/proxy-list/blob/master/proxy-list-raw.txt",
  "https://hidemy.name/en/proxy-list/?type=5",
  "https://www.xroxy.com/proxylist.htm",
  "https://spys.me/proxy.txt",
  "https://github.com/jetkai/proxy-list/blob/main/online-proxies/txt/proxies-socks5.txt",
  "https://www.proxy-list.download/SOCKS5",
  "https://spys.one/free-proxy-list/Socks5/",
  "https://api.proxyscrape.com/?request=displayproxies&proxytype=socks5&timeout=10000&country=all",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://proxyspace.pro/socks5.txt",
  "https://spys.me/socks.txt",
  "https://spys.one/en/socks-proxy-list/",
  "https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt",
  "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks5.txt",
  "https://proxyscan.io/api/proxy?type=socks5",
  "https://www.proxy-list.download/SOCKS5",
  "https://free-proxy-list.net/socks-proxy.html",
  "https://www.sslproxies.org/",
  "https://www.proxy-list.download/SOCKS5",
  "https://openproxy.space/list/socks5",
  "https://www.cool-proxy.net/proxies.json",
  "https://www.proxynova.com/proxy-server-list/country-us/",
  "https://api.proxyscrape.com/v2/?request=displayproxies&proxytype=socks5&timeout=10000",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
  "https://proxyscrape.com/free-proxy-list",
  "https://free-proxy-list.net/",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
  "https://www.proxy-list.download/SOCKS5",
  "https://spys.one/en/socks-proxy-list/",
  "https://openproxy.space/list/socks5",
  "https://www.us-proxy.org/",
  "https://www.proxy-list.download/SOCKS5",
  "https://www.proxy-list.space/socks5",
  "https://www.free-proxy-list.net/socks-proxy.html",
  "https://spys.one/free-proxy-list/Socks5/",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://proxyscan.io/download?type=socks5",
  "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks5.txt",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
  "https://www.proxy-list.download/SOCKS5",
  "https://openproxy.space/list/socks5",
  "https://proxyscan.io/download?type=socks5",
  "https://proxyhub.me/en/proxy-list/type-socks5/",
  "https://proxy-daily.com/",
  "https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt",
  "https://www.cool-proxy.net/proxies.json",
  "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
  "https://free-proxy-list.net/socks-proxy.html",
  "https://spys.one/en/socks-proxy-list/",
  "https://www.my-proxy.com/free-socks-5-proxy.html",
  "https://www.sslproxies.org/",
  "https://www.socks-proxy.net/",
  "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
  "https://proxyscan.io/download?type=socks5",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://www.proxy-list.download/SOCKS5",
  "https://spys.one/free-proxy-list/Socks5/",
  "https://openproxy.space/list/socks5",
  "https://proxyscan.io/api/proxy?type=socks5",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt",
  "https://proxyscan.io/api/proxy?type=socks5",
  "https://proxyscan.io/download?type=socks5",
  "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
  "https://raw.githubusercontent.com/monosans/proxy-list/main/proxies/socks5.txt",
];

async function fetchProxies() {
  for (const site of raw_proxy_sites) {
    try {
      const response = await fetch(site);
      if (response.ok) {
//console.log(`success: ${site}`);
        const data = await response.text();
        const lines = data.split('\n');
        for (const line of lines) {
          if (line.includes(':')) {
            const [ip, port] = line.split(':', 2);
            proxies.push(`${ip}:${port}`);
          }
        }
      } else {
//console.log(`skip: ${site}`);
      }
    } catch (error) {
//console.error(`skip: ${site}`);
    }
  }

  fs.writeFileSync(output_file, proxies.join('\n'));
  fs.readFile(output_file, 'utf8', (err, data) => {
    if (err) {
      console.error('Gagal membaca file:', err);
      return;
    }
    const proxies = data.trim().split('\n');
    const totalProxies = proxies.length;
    console.log(`success scraping ${totalProxies} proxy`);
  });
}
fetchProxies();
