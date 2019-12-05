Universal solution: Browserstack

Microsoft offers free VMs for each MS browsers, no license needed https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/


https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/


Chrome (latest) https://www.google.com/chrome/browser/desktop/index.html
 Other versions

    Beta https://www.google.fr/chrome/browser/beta.html
    Canary (dev version, before beta) https://www.google.fr/chrome/browser/canary.html

	(coche)	(coche)	(coche)

Firefox (latest) https://www.mozilla.org/en-US/firefox/desktop/
 Other versions

    Beta, Dev or Nightly https://www.mozilla.org/en-US/firefox/channel/desktop/
    Firefox ESR https://www.mozilla.org/en-US/firefox/organizations/
    Any version https://ftp.mozilla.org/pub/firefox/releases/

	(coche)	(coche)	(coche)	See "Launching multiple versions of Firefox using profiles" notes for using multiples versions at the same time
Edge latest	official vm	official vm	(coche) https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
native
IE11	official vm	official vm	(coche)
native	IE 11 is the latest IE and is still installed on recent Windows OS
IE10	official vm	official vm

Integrated emulation in IE11

official vm

Safari latest (10)	(erreur)

(coche)
native
	(erreur)	macOs is hard to virtualize, even if possible (ex. no shared clipboard)
Safari 9	(erreur)	(erreur)	(erreur)	Safari is only distributed bundled with macOS, so Safari 9 requires an old macOS version
iOS safari (iPad, iPhone)	(question)	(coche)
Xcode Simulator	(question)
Opera http://www.opera.com/	(coche)	(coche)	(coche)
Android Chrome	 	 	 	android studio ?



Testing localhost apps IE with Microsoft official VMs

Currently, our apps have localhost:3000 hardcoded, making them unaccesible from a network.

In the VMs, the trick is to modify the host file to make "localhost" point to "10.0.2.2" (10.0.2.2 is the host adress for VirtualBox "NAT" mode)

Start notepad with admin rights (right-click) then open C:\Windows\System32\drivers\etc\hosts and add this line:

10.0.2.2  localhost

reference: http://askubuntu.com/questions/295962/how-to-access-localhost8080-running-on-ubuntu-from-windows-running-into-virtual
Launching multiple versions of Firefox using profiles

Firefox might complain if you try to launch different versions at the same time (ESR, Aurora, Nightly, Stable, etc…). One solution is to use a different profile for each launched version. A profile is the closest definition of a user for Firefox. Bookmarks, extensions, settings, etc. are defined in the profile.

To manage multiple profile, look at this page: https://developer.mozilla.org/en-US/Firefox/Multiple_profiles

