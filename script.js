document.getElementById('websiteCheckerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var websiteUrl = document.getElementById('websiteUrl').value;
    var resultElement = document.getElementById('result');
    
    // Perform the website authenticity check
    if (isRealWebsite(websiteUrl)) {
        resultElement.innerHTML = 'This is a <span class="real">real</span> website.';
    } else {
        resultElement.innerHTML = 'This is a <span class="fake">fake</span> website.';
    }
    
});
document.getElementById('passwordGeneratorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var passwordLength = document.getElementById('passwordLength').value;
    var includeUppercase = document.getElementById('includeUppercase').checked;
    var includeLowercase = document.getElementById('includeLowercase').checked;
    var includeNumbers = document.getElementById('includeNumbers').checked;
    var includeSpecialChars = document.getElementById('includeSpecialChars').checked;
    var passwordResultElement = document.getElementById('passwordResult');

    var generatedPassword = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
    passwordResultElement.innerHTML = 'Generated Password: ' + generatedPassword;

});


function isRealWebsite(websiteUrl) {
    // List of known real websites
    var realWebsites = [
        "www.google.com",
        "www.facebook.com",
        'www.amazon.com',
        'www.microsoft.com',
        'www.blogger.com',
"www.google.com" ,
"youtube.com" ,
"support.google.com" ,
"microsoft.com" ,
"linkedin.com" ,
"play.google.com" ,
"apple.com" ,
"wordpress.org" ,
"youtu.be" ,
"cloudflare.com" ,
"en.wikipedia.org" ,
"maps.google.com" ,
"whatsapp.com" ,
"docs.google.com" ,
"europa.eu" ,
"mozilla.org" ,
"adobe.com" ,
"plus.google.com" ,
"googleusercontent.com" ,
"bp.blogspot.com" ,
"drive.google.com" ,
"sites.google.com" ,
"accounts.google.com" ,
"github.com" ,
"vimeo.com" ,
"t.me" ,
"facebook.com" ,
"amazon.com" ,
"vk.com" ,
"policies.google.com" ,
"uol.com.br" ,
"istockphoto.com" ,
"enable-javascript.com" ,
"search.google.com" ,
"gstatic.com" ,
"developers.google.com" ,
"theguardian.com" ,
"dailymotion.com" ,
"draft.blogger.com" ,
"google.co.jp" ,
"jimdofree.com" ,
"news.google.com" ,
"nih.gov" ,
"tools.google.com" ,
"brandbucket.com" ,
"mail.google.com" ,
"tiktok.com" ,
"fr.wikipedia.org" ,
"creativecommons.org" ,
"buydomains.com" ,
"feedburner.com" ,
"pt.wikipedia.org" ,
"medium.com" ,
"wikimedia.org" ,
"slideshare.net" ,
"imdb.com" ,
"myspace.com" ,
"files.wordpress.com" ,
"bbc.co.uk" ,
"who.int" ,
"netvibes.com" ,
"paypal.com" ,
"msn.com" ,
"nytimes.com" ,
"google.de" ,
"opera.com" ,
"globo.com" ,
"shopify.com" ,
"dropbox.com" ,
"gravatar.com" ,
"google.com.br" ,
"cnn.com" ,
"es.wikipedia.org" ,
"live.com" ,
"wa.me" ,
"forbes.com" ,
"www.yahoo.com" ,
"line.me" ,
"www.weebly.com" ,
"google.es" ,
"ok.ru" ,
"t.co" ,
"planalto.gov.br" ,
"dan.com" ,
"shutterstock.com" ,
"dailymail.co.uk" ,
"abc.es" ,
"wsj.com" ,
"bloomberg.com" ,
"tinyurl.com" ,
"ytimg.com" ,
"forms.gle" ,
"ft.com" ,
"www.gov.uk" ,
"domainmarket.com" ,
"namecheap.com" ,
"google.fr" ,
"plesk.com" ,
"goo.gl" ,
"independent.co.uk" ,
"ru.wikipedia.org" ,
"instagram.com" ,
"researchgate.net" ,
"fb.com" ,
"google.it" ,
"mirror.co.uk" ,
"telegram.me" ,
"fandom.com" ,
"marketingplatform.google...." ,
"de.wikipedia.org" ,
"bbc.com" ,
"cdc.gov" ,
"list-manage.com" ,
"storage.googleapis.com" ,
"webmd.com" ,
"amazon.de" ,
"un.org" ,
"scribd.com" ,
"usatoday.com" ,
"wp.com" ,
"estadao.com.br" ,
"office.com" ,
"nature.com" ,
"huffingtonpost.com" ,
"news.yahoo.com" ,
"amazon.es" ,
"washingtonpost.com" ,
"bit.ly" ,
"get.google.com" ,
"google.pl" ,
"soundcloud.com" ,
"bing.com" ,
"samsung.com" ,
"issuu.com" ,
"youronlinechoices.com" ,
"mediafire.com" ,
"reuters.com" ,
"cnet.com" ,
"indiatimes.com" ,
"booking.com" ,
"yadi.sk" ,
"elpais.com" ,
"nasa.gov" ,
"aboutads.info" ,
"discord.com" ,
"ig.com.br" ,
"time.com" ,
"adssettings.google.com" ,
"myaccount.google.com" ,
"wikia.com" ,
"telegraph.co.uk" ,
"pinterest.com" ,
"hugedomains.com" ,
"businessinsider.com" ,
"photos.google.com" ,
"change.org" ,
"w3.org" ,
"4shared.com" ,
"picasaweb.google.com" ,
"amazon.co.uk" ,
"pixabay.com" ,
"cbsnews.com" ,
"hatena.ne.jp" ,
"mail.ru" ,
"networkadvertising.org" ,
"it.wikipedia.org" ,
"cpanel.net" ,
"foxnews.com" ,
"amazon.co.jp" ,
"thesun.co.uk" ,
"google.co.uk" ,
"imageshack.us" ,
"huffpost.com" ,
"aliexpress.com" ,
"abril.com.br" ,
"archive.org" ,
"twitter.com" ,
"terra.com.br" ,
"afternic.com" ,
"books.google.com" ,
"leparisien.fr" ,
"lemonde.fr" ,
"php.net" ,
"nginx.com" ,
"cbc.ca" ,
"spotify.com" ,
"google.ca" ,
"xbox.com" ,
"netlify.app" ,
"ja.wikipedia.org" ,
"express.co.uk" ,
"calendar.google.com" ,
"www.over-blog.com" ,
"icann.org" ,
"clarin.com" ,
"ziddu.com" ,
"sedo.com" ,
"wiley.com" ,
"wiktionary.org" ,
"akamaihd.net" ,
"amazon.it" ,
"bloglovin.com" ,
"newyorker.com" ,
"privacyshield.gov" ,
"berkeley.edu" ,
"doi.org" ,
"discord.gg" ,
"sciencedaily.com" ,
"search.yahoo.com" ,
"amazon.fr" ,
"yelp.com" ,
"xing.com" ,
"ggpht.com" ,
"insider.com" ,
"elmundo.es" ,
"sputniknews.com" ,
"whitehouse.gov" ,
"www.wix.com" ,
"translate.google.com" ,
"windows.net" ,
"rakuten.co.jp" ,
"gnu.org" ,
"mashable.com" ,
"finance.yahoo.com" ,
"webnode.page" ,
"francetvinfo.fr" ,
"surveymonkey.com" ,
"ria.ru" ,
"e-monsite.com" ,
"guardian.co.uk" ,
"www.gov.br" ,
"000webhost.com" ,
"rapidshare.com" ,
"google.co.in" ,
"bp2.blogger.com" ,
"lavanguardia.com" ,
"nginx.org" ,
"academia.edu" ,
"akamaized.net" ,
"abcnews.go.com" ,
"google.ru" ,
"liveinternet.ru" ,
"twitch.tv" ,
"spiegel.de" ,
"rambler.ru" ,
"plos.org" ,
"smh.com.au" ,
"stanford.edu" ,
"wikihow.com" ,
"google.nl" ,
"eventbrite.com" ,
"20minutos.es" ,
"addthis.com" ,
"id.wikipedia.org" ,
"disney.com" ,
"theatlantic.com" ,
"sapo.pt" ,
"yandex.ru" ,
"welt.de" ,
"nationalgeographic.com" ,
"vkontakte.ru" ,
"skype.com" ,
"cointernet.com.co" ,
"goodreads.com" ,
"redbull.com" ,
"detik.com" ,
"hindustantimes.com" ,
"alicdn.com" ,
"xinhuanet.com" ,
"vice.com" ,
"dw.com" ,
"kickstarter.com" ,
"pl.wikipedia.org" ,
"photobucket.com" ,
"mozilla.com" ,
"www.canalblog.com" ,
"target.com" ,
"amzn.to" ,
"npr.org" ,
"ca.gov" ,
"nydailynews.com" ,
"qq.com" ,
"ikea.com" ,
"outlook.com" ,
"taringa.net" ,
"rtve.es" ,
"ea.com" ,
"cambridge.org" ,
"ibm.com" ,
"deezer.com" ,
"espn.com" ,
"statista.com" ,
"pexels.com" ,
"offset.com" ,
"ovhcloud.com" ,
"springer.com" ,
"arxiv.org" ,
"hubspot.com" ,
"doubleclick.net" ,
"yahoo.co.jp" ,
"nikkei.com" ,
"newsweek.com" ,
"britannica.com" ,
"apache.org" ,
"alibaba.com" ,
"buzzfeed.com" ,
"prezi.com" ,
"economist.com" ,
"fb.me" ,
"cnil.fr" ,
"rt.com" ,
"tripadvisor.com" ,
"mega.nz" ,
"usnews.com" ,
"oracle.com" ,
"techcrunch.com" ,
"zoom.us" ,
"pbs.org" ,
"ebay.com" ,
"lefigaro.fr" ,
"zdf.de" ,
"huawei.com" ,
"sfgate.com" ,
"picasa.google.com" ,
"naver.com" ,
"addtoany.com" ,
"metro.co.uk" ,
"home.pl" ,
"themeforest.net" ,
"photos1.blogger.com" ,
"cnbc.com" ,
"latimes.com" ,
"secureserver.net" ,
"imageshack.com" ,
"steampowered.com" ,
"hp.com" ,
"aol.com" ,
"nypost.com" ,
"godaddy.com" ,
"instructables.com" ,
"ietf.org" ,
"ouest-france.fr" ,
"canada.ca" ,
"timeweb.ru" ,
"engadget.com" ,
"netflix.com" ,
"zendesk.com" ,
"www.wikipedia.org" ,
"weibo.com" ,
"oup.com" ,
"cornell.edu" ,
"groups.google.com" ,
"loc.gov" ,
"sciencedirect.com" ,
"gofundme.com" ,
"tmz.com" ,
"ovh.com" ,
"sendspace.com" ,
"cpanel.com" ,
"disqus.com" ,
"gizmodo.com" ,
"alexa.com" ,
"amazonaws.com" ,
"gooyaabitemplates.com" ,
"harvard.edu" ,
"www.livejournal.com" ,
"yandex.com" ,
"sakura.ne.jp" ,
"psychologytoday.com" ,
"googleblog.com" ,
"android.com" ,
"mit.edu" ,
"nbcnews.com" ,
"code.google.com" ,
"wired.com" ,
"radiofrance.fr" ,
"sky.com" ,
"quora.com" ,
"playstation.com" ,
"m.wikipedia.org" ,
"variety.com" ,
"thenai.org" ,
"unsplash.com" ,
"bandcamp.com" ,
"ssl-images-amazon.com" ,
"thetimes.co.uk" ,
"unesco.org" ,
"pinterest.fr" ,
"ftc.gov" ,
"freepik.com" ,
"ted.com" ,
"walmart.com" ,
"gmail.com" ,
"zippyshare.com" ,
"biglobe.ne.jp" ,
"clickbank.net" ,
"theverge.com" ,
"reg.ru" ,
"ipv4.google.com" ,
"linktr.ee" ,
"abc.net.au" ,
"about.com" ,
"dreamstime.com" ,
"salesforce.com" ,
"frontiersin.org" ,
"vox.com" ,
"upenn.edu" ,
"weather.com" ,
"sports.yahoo.com" ,
"elsevier.com" ,
"yale.edu" ,
"ign.com" ,
"focus.de" ,
"apnews.com" ,
"jhu.edu" ,
"over-blog-kiwi.com" ,
"rbc.ru" ,
"g.co" ,
"ox.ac.uk" ,
"hollywoodreporter.com" ,
"bustle.com" ,
"wordreference.com" ,
"messenger.com" ,
"java.com" ,
"euronews.com" ,
"google.co.th" ,
"google.com.tw" ,
"usgs.gov" ,
"trustpilot.com" ,
"asahi.com" ,
"softonic.com" ,
"narod.ru" ,
"businesswire.com" ,
"goo.ne.jp" ,
"amazon.ca" ,
"kakao.com" ,
"boston.com" ,
"last.fm" ,
"nba.com" ,
"indianexpress.com" ,
"scmp.com" ,
"ovh.co.uk" ,
"fifa.com" ,
"unicef.org" ,
"fedoraproject.org" ,
"theconversation.com" ,
"biblegateway.com" ,
"dailystar.co.uk" ,
"depositfiles.com" ,
"repubblica.it" ,
"howstuffworks.com" ,
"video.google.com" ,
"admin.ch" ,
"com.com" ,
"itmedia.co.jp" ,
"reddit.com" ,
"unam.mx" ,
"canva.com" ,
"stackoverflow.com" ,
"nl.wikipedia.org" ,
"ebay.co.uk" ,
"jstor.org" ,
"ap.org" ,
"nicovideo.jp" ,
"sec.gov" ,
"woocommerce.com" ,
"m.me" ,
"news.com.au" ,
"ucla.edu" ,
"bigcommerce.com" ,
"channel4.com" ,
"justgiving.com" ,
"mailchimp.com" ,
"flickr.com" ,
"usda.gov" ,
"etsy.com" ,
"evernote.com" ,
"google.co.id" ,
"dictionary.com" ,
"sina.com.cn" ,
"soratemplates.com" ,
"nokia.com" ,
"utexas.edu" ,
"inc.com" ,
"debian.org" ,
"twimg.com" ,
"lg.com" ,
"rollingstone.com" ,
"feedproxy.google.com" ,
"bp0.blogger.com" ,
"foursquare.com" ,
"blackberry.com" ,
"fastcompany.com" ,
"theglobeandmail.com" ,
"blog.google" ,
"esa.int" ,
"prnewswire.com" ,
"liberation.fr" ,
"umn.edu" ,

        
        

        
    ];
    
    // Check if the website is a known real website
    if (realWebsites.includes(websiteUrl)) {
        return true;
    }
    
    // Check other criteria to determine if the website is real or fake
    // In this example, we are assuming that any website that starts with "https" is real, and any website that starts with "http" is fake.
    if (websiteUrl.startsWith('https')) {
        return true;
    } else {
        return false;
    }
}
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
        var charset = '';
        if (includeUppercase) {
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (includeLowercase) {
            charset += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (includeNumbers) {
            charset += '0123456789';
        }
        if (includeSpecialChars) {
            charset += '!@#$%^&*()-=_+[]{}|;:,.<>?/';
        }
    
        var password = '';
        for (var i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
    
        return password;

}
