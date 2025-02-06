

I think it's common to...

I typically...


consistency https://www.seangoedecke.com/large-established-codebases/
readability
complexity
new dependencies Be very, very reluctant to introduce new dependencies. In large codebases, code often lives forever. Dependencies introduce an ongoing cost in security vulnerabilities and package updates that will almost certainly outlive your tenure at the company. If you have to, make sure you pick dependencies that are widely-used and reliable, or that are easy to fork if needed.
remove code, take it with both hands. This is some of the riskiest work in large codebases, so don’t half-ass it: first instrument the code to identify callers in production and drive them down to zero, so you can be absolutely certain it’s safe to remove. But it’s still worth doing. There are few things in a large codebase more worthwhile than safely removing code.
mark area for FF cleaning

Work in small PRs and front-load the changes that affect other teams’ code. This one is important in small projects too, but it’s critical in large ones. That’s because you’ll often be relying on the domain experts in other teams to anticipate things you’ve missed (since large projects are just too complex to anticipate it all yourself). If you keep your changes to risky areas small and easy-to-read, those domain experts have a much better chance of noticing problems and saving you from an incident.


++ https://www.seangoedecke.com/large-established-codebases/  https://news.ycombinator.com/item?id=42627227


* Large codebases are worth working in because they usually pay your salary
* By far the most important thing is consistency
* Never start a feature without first researching prior art in the codebase
* If you don’t follow existing patterns, you better have a very good reason for it
* Understand the production footprint of the codebase
* Don’t expect to be able to test every case - instead, rely on monitoring
* Remove code any chance you get, but be very careful about it
* Make it as easy as possible for domain experts to catch your mistakes
