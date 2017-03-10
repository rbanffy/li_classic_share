package:
	cp ~/.ssh/li_classic_share.pem key.pem
	zip -r /tmp/linkedin_classic_share.zip background.js content.js icon128.png icon64.png icon48.png icon32.png manifest.json key.pem
	rm key.pem

clean:
	rm -f /tmp/linkedin_classic_share.zip
