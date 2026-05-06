			<div class="container mt-4" id="content">
					<div class="row">
							<div class="col-sm-12 text-center"><img src="/img/readme/logo.png"/></div>
							<div class="col-sm-12 text-center">
									<h1 id="bonziworld"></h1>
									<br />
									<h3 class="text-muted">Leading the industry in gorilla-based chat clients.</h3>
							</div>
							<div class="col-sm-12 text-center">
									<a href="https://web.archive.org/web/20220515095300/https://twitter.com/JustBonziThings" target="_blank" style="margin-right: 10px;"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></a>
									<a href="https://web.archive.org/web/20220515095300/https://www.facebook.com/bonziworld/" target="_blank" style="margin-right: 10px;"><i class="fab fa-facebook fa-2x" aria-hidden="true"></i></a>
									<a href="https://web.archive.org/web/20220515095300/https://www.instagram.com/bonziworld/" target="_blank" style="margin-right: 10px;"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
									<a href="https://web.archive.org/web/20220515095300/https://www.youtube.com/channel/UCYyNXFU-dw4PTBsLQFtDlww" target="_blank" style="margin-right: 10px;"><i class="fab fa-youtube fa-2x" aria-hidden="true"></i></a>
							</div>
					</div>
			 <div class="row">
							<div class="col-sm-12"><hr /></div>
							<div class="col-sm-12">
									<b><h2 id="what-the-hell-is-this-">What the hell is this?</h2></b>
									<p>
											BonziWORLD is a node.js and socket.io based chat client featuring everyone's most <del>hated</del> loved purple gorilla. The client also uses speak.js to provide text-to-speech voices. Not exactly the original
											BonziBUDDY voice, but hey, it works.
									</p>
								    <h2 id="why-did-you-make-this-why-would-you-make-this">Why did you make this? Why WOULD you make this?</h2>
									<p>
											Memes. Also because I'd already finished the BonziBUDDY portion of this project like a year in advance and was trying to find some way to put it to use.
									</p>
									<h2 id="how-do-i-use-it-">How do I use it?</h2>
									<ol>
											<li>Enter a nickname (under 25 characters). If you don't enter one, you'll be named "Anonymous". (we r legion du nut 4 get)</li>
											<li>
													Optionally, enter a room ID. If you want to join someone else, their room ID will be in the bottom-right corner of the screen.
													<ul>
															<li>If you enter a room ID that doesn't exist, you will be placed in a private room which can only be joined by people you share the ID with.</li>
													</ul>
											</li>
											<li>Be a BonziBUDDY.</li>
									</ol>
									<h2 id="what-are-the-chat-commands-">What are the chat commands?</h2>
									<p>If you see any brackets, they indicate a placeholder. Don't type them in.</p>
									<ul>
											<li>
													<code>/name [name]</code> - Change your name.
													<ul>
															<li>There is a 25 character limit on names.</li>
													</ul>
											</li>
											<li>
													<code>/speed [speed]</code> - Change your voice's speed.
													<ul>
															<li>Max value is 275, min value is 125.</li>
													</ul>
											</li>
											<li>
													<code>/pitch [pitch]</code> - Change your voice's pitch.
													<ul>
															<li>Max value is 125, min value is 15.</li>
													</ul>
											</li>
											<li>
													<code>/color [color]</code> - Change your BonziBUDDY's color! The ones available are:
													<ul>
															<li>red</li>
															<li>brown</li>
															<li>green</li>
															<li>blue</li>
															<li>purple</li>
															<li>black</li>
															<li>pink</li>
															<li>If you don't type a color, you will be given one at random.</li>
													</ul>
											</li>
											<li><code>/joke</code> - Tell a horribly written joke.</li>
											<li><code>/fact</code> - Tell a horribly written "fact".</li>
											<li>
													<code>/backflip</code> - Do a backflip.
													<ul>
															<li>Do '/backflip swag' for extra swag.</li>
													</ul>
											<li>
													<code>/youtube [video ID]</code> - Play a YouTube video.
													<ul>
															<li>Alternatively, you can simply paste the URL in chat and it will automatically play it.</li>
													</ul>
											</li>
											<li>
													<code>/image [URL]</code> - Post an image.
											</li>
											<li>
													<code>/video [URL]</code> - Play an mp4 video.
											</li>
											<li>
													<code>/audio [URL]</code> - Listen to an mp3 file.
											</li>
											<li>
													<code>/asshole [name]</code> - Call someone an asshole.
											</li>
											<li>
													<code>/owo [name]</code> - owo, wat dis?
									<ul>
												<li>kill me</li>
												<li>Works pretty much the same as /asshole, right click and all.</li>
													</ul>
											<li>
										
												    <code>/triggered</code> - The best copypasta.
											</li>
											<li>
												    <code>/linux</code> - I'd just like to interject for a moment.
											</li>
											<li>
												    <code>/pawn</code> - Hi, my name is BonziBUDDY, and this is my website.
											</li>
											<li>
												    <code>/bees</code> - According to all known laws of aviation, there is no way a bee should be able to fly.
											</li>
											<li>
												    <code>/vaporwave</code> - ＡＥＳＴＨＥＴＩＣ
											</li>
											<li>
												    <code>/unvaporwave</code> - ＡＥＳＴＨＥＴＩＣ ＩＳ ＫＩＬＬ
											</li>
											 
													</ul>
											</li>
									</ul>
									<h2 id="are-there-any-rules-">Are there any rules?</h2>
									<ul>
											<li>
											Obviously no illegal shit. On top of that, there are a few limitations:
									<ul>
												<li>All strings are sanitized to get rid of any malicious HTML/JS/CSS.&#32;<em>Don't even try it motherfucker.</em></li>
											<li>
													There is a 2500 character limit in public rooms and a 5000 limit in private rooms. (Yes, the Navy Seals copypasta fits.)

											</li>
											<li>There is a 25 character limit on names.</li>
											<li>
												A max of 8 people are allowed in a public lobby. After that, a new public room will be created.
											</li>
											<li>
												A max of 30 people are allowed in private lobbies. (Yeah, I know I changed the limit down from 15. With the limited screen space and processing power on mobile, this was part of the reason things were running so shitty.)
											</li>


									</ul>
									<p>
										    Remember that people can play YouTube videos whenever they want. Keep your volume down, headphone users. Chat rooms are for the most part unmoderated. If shit starts getting spambotty, I might start using my banhammer.
										
										
											Remember that people can post files whenever they want! Furthermore, I am not responsible for anything that might happen to you or your device. If something happens, it's <strong>your</strong> fault and <strong>not</strong> mine!
									</p>
								<p>
									<strong>PS:</strong> By visiting BonziWORLD you accept the risk of getting infected with malware via user generated content, and that I am in no way liable for you or your devices! (hell nah that would never happen BonziWORLD is safe and it doesn't do any harm on your devices)
								</p>
									
									<h2 id="shoutouts-to">Shoutouts to:</h2>
									<ul>
											<li><del>Simpleflips</del></li>
											<li>Node.JS</li>
											<li>socket.io</li>
											<li>sanitize-html</li>
											<li>Grunt</li>
											<li>Winston<del>(hi there)</del></li>
											<li>Express</li>
											<li>Create.js (Easel.js &amp; Preload.js)</li>
											<li>jQuery</li>
											<li>jquery-contextmenu</li>
											<li>speak.js</li>
											<li>seedrandom</li>
											<li>realfavicongenerator.net</li>
											<li>Apache Cordova</li>
											<li>Foodz/Legitosaurus (the creator of the ORIGINAL bonzi.world)</li>
                                            <li>UnrealSticky</li>
                                            <li>Izhan</li>
                                            <li>BonziUSER</li>
                                            <li>DarlloGuy</li>
											<li><del>Crosswalk</del> RIP CROSSWALK v1.?.? - v1.4.2</li>
											<li>scss/sass</li>

									</ul>
									<p>
										You guys are awesome. (And so are you, whoever's reading this!) There are also probably some others I forgot. If I remember you, I'll add you here.
									</ul>




<h2>Contact me:</h2>
<ul><h5>bonzi.world@outlook.com</h5></ul>
<ul>
<li>Email me there with any comments, questions, or concerns. Or whatever else. Memes?
Sure, throw those in too! Be warned that I'm notoriously awful at checking my email though...</li>
</ul>
					</div>
			</div>
					<div class="row">
							<div class="col-sm-12">
									<div id="432332282"></div>
							</div>
					</div>
			</div>
			<footer>
					<div class="container">
							<p class="float-right"><a href="#">Back to top</a></p>
							<p>BonziWORLD - v4.63.3921</p>
					</div>
			</footer>
