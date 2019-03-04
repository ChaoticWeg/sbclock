# SBClock

Messing around with a [Xen HTML] homescreen widget on iOS 12.1.1~b3.

## About this...

[SpringBoard] is what iOS calls the home screen, where all of the app icons live. On a jailbroken iOS device, [Cydia Substrate] provides developers with the means to modify SpringBoard in whatever way the dev desires.

One way that [Xen HTML][Xen HTML git] makes use of this exploit is to render layers of HTML in between the background and the existing SpringBoard UI. For homescreen widgets, this HTML is read from `/private/var/mobile/Library/SBHTML/<widget>/Wallpaper.html` and rendered as previously described.

Massive, massive props to [Matchstic] for Xen HTML, and to [saurik] for literally everything that iOS tweaking is built on.

[SpringBoard]: https://www.theiphonewiki.com/wiki//System/Library/CoreServices/SpringBoard.app
[Cydia Substrate]: https://www.theiphonewiki.com/wiki/Cydia_Substrate

[Xen HTML]: https://incendo.ws/projects/#xenhtml
[Xen HTML git]: https://github.com/Matchstic/Xen-HTML

[Matchstic]: https://incendo.ws/
[saurik]: http://www.saurik.com/
