chrome:
	cp ~/.ssh/li_classic_share.pem key.pem
	zip -r /tmp/li_classic_share_chrome.zip content.js background.js icon128.png icon64.png icon48.png icon32.png manifest.json LICENSE key.pem
	rm key.pem

firefox:
	zip -r /tmp/li_classic_share_ff.zip content.js background.js icon128.png icon64.png icon48.png icon32.png manifest.json LICENSE

clean:
	rm -fv /tmp/li_classic_share_*.zip
