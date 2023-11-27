function makeamold(size, type) {
	var SquareSort = Math.sqrt(size);
	var cellwidth = 100 / (SquareSort + 1);
	if (type == 0) {
		var cellwidth = 100 / (SquareSort + 1);
		var htmlmold = `	<table style="width: 100%; background: transparent;">
		<tr>
			<td colspan="4">
				<p style="width: 100%; color: darkred; text-align: left;">
				<strong>Satır, Sütun, Köşegen Eşitliği Sorgulaması</strong>
				</p>
			</td>
		</tr>
        <tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputzero" style="display: inline-block;"><strong>Tablo : (n, r)</strong></label>
			</td>
			<td colspan="3" style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputzero" type="text" name="moldinputzero" value=0>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputone" style="display: inline-block;"><strong>Kombinasyonlar</strong></label>
			</td>
			<td colspan="3" style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputone" type="text" name="moldinputone" value=0>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputfive" style="display: inline-block;"><strong>Sorgulananlar</strong></label>
			</td>
			<td colspan="3" style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputfive" type="text" name="moldinputfive" value=0>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="remainingtime" style="display: inline-block;"><strong>Kalan Süre</strong></label>
			</td>
			<td colspan="3" style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="remainingtime" type="text" name="remainingtime" value=0>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputthree" style="display: inline-block;"><strong>Aktif Tablo Kodları</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputthree" type="text" name="moldinputthree">
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputfour" style="display: inline-block;"><strong>Ebced Tabloları</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputfour" type="text" name="moldinputfour">
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputtwo" style="display: inline-block;"><strong>Eşitliği Sağlayanlar</strong></label>
			</td>
			<td colspan="3" style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputtwo" type="text" name="moldinputtwo" value=0>
			</td>
		</tr>
		<tr>
			<td colspan="4" style="padding-top: 5px;">
				<table style="width: 100%; background: transparent;">
					<tbody>
						<tr>
							<td id="progressbg" colspan="${SquareSort}" style="text-align: center; font-weight: bold; border-radius: 5px;">
								<div id="progressbar" style="width: 100%;"></div>
							</td>
							<td id="celltoup" class="theader" style="width: ${cellwidth}%;">?</td>
						</tr>`;
		for (var rows = 0; rows < SquareSort; rows++) {
			htmlmold += `						<tr>`;
			for (var cols = 0; cols < SquareSort; cols++) {
				var colrowsend = String(rows) + "cend";
				var coordinate = String(rows) + "x" + String(cols);
				htmlmold += `							<td id="cell${coordinate}" class="hucre" style="width: ${cellwidth}%;">?</td>`;
			}
			htmlmold += `							<td id="cell${colrowsend}" class="theader" style="width: ${cellwidth}%;">?</td>
								</tr>`;
		}
		htmlmold += `					<tfoot>`;
		for (var cols = 0; cols < SquareSort; cols++) {
			var rowcolsend = String(cols) + "rend";
			htmlmold += `							<td id="cell${rowcolsend}" class="theader" style="width: ${cellwidth}%;">?</td>`;
		}
		htmlmold += `								<td id="celltodown" class="theader" class="theader" style="width: ${cellwidth}%;">?</td>
						</tfoot>
					</tbody>
				</table>
			</td>
		</tr>	
	</table>`;
	} else if (type > 0) {
		var cellwidth = 100 / SquareSort;
		var htmlmold = `	<hr>
		<table style="width: 100%; background: transparent;">
		<tr>
			<td colspan="2">
				<p style="width: 100%; color: darkred; text-align: left;">
				<strong><span id="tablokodu${type}"></span> kodlu tabloya göre satır, sütun, köşegen eşitliği sağlanmış vefk : ${type}</strong>
				</p>
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputone${type}" style="display: inline-block;"><strong>Sorgulama No</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputzero${type}" type="text" name="moldinputzero${type}">
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputone${type}" style="display: inline-block;"><strong>Satır toplamı</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputone${type}" type="text" name="moldinputone${type}">
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputtwo${type}" style="display: inline-block;"><strong>Ulvi vazifeli</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputtwo${type}" type="text" name="moldinputtwo${type}">
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputthree${type}" style="display: inline-block;"><strong>Sufli vazifeli</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputthree${type}" type="text" name="moldinputthree${type}">
			</td>
		</tr>
		<tr>
			<td style="padding-top: 5px; text-align: right;">
				<label for="moldinputfour${type}" style="display: inline-block;"><strong>Şerli vazifeli</strong></label>
			</td>
			<td style="padding-top: 5px; text-align: right;">
				<input readonly style="width: 100%;" id="moldinputfour${type}" type="text" name="moldinputfour${type}">
			</td>
		</tr>
		<tr>
			<td colspan="2">
			<table class="wider" id="phraseslist${type}" onclick="hidenview('phraseslist${type}', 'valueslist${type}')" width="100%" style="background: transparent;">
					<tbody>`;
		for (var rows = 0; rows < SquareSort; rows++) {
			htmlmold += `						<tr>`;
			for (var cols = 0; cols < SquareSort; cols++) {
				var colrowsend = String(rows) + "cend";
				var coordinate = String(rows) + "x" + String(cols);
				htmlmold += `							<td id="pcell${coordinate}${type}" class="hucre" onclick="hidenview('phraseslist${type}', 'valueslist${type}')" width="${cellwidth}%">?</td>`;
			}
			htmlmold += `								</tr>`;
		}
		htmlmold += `					</tbody>
			</table>
			<table class="wider" id="valueslist${type}" onclick="hidenview('valueslist${type}', 'phraseslist${type}')" width="100%" style="background: transparent;">
					<tbody>`;
		for (var rows = 0; rows < SquareSort; rows++) {
			htmlmold += `						<tr>`;
			for (var cols = 0; cols < SquareSort; cols++) {
				var colrowsend = String(rows) + "cend";
				var coordinate = String(rows) + "x" + String(cols);
				htmlmold += `							<td id="vcell${coordinate}${type}" class="hucre" onclick="hidenview('valueslist${type}', 'phraseslist${type}')" width="${cellwidth}%">?</td>`;
			}
			htmlmold += `								</tr>`;
		}
		htmlmold += `					</tbody>
				</table>				
			</td>
		</tr>
		<tr>
			<td colspan="2" id="notes${type}">
			</td>
		</tr>
	</table>`;
	}
	return htmlmold;
}

function readTextFile(file, callback, encoding) {
	var reader = new FileReader();
	reader.addEventListener('load', function (e) {
		callback(this.result);
	});
	if (encoding)
		reader.readAsText(file, encoding);
	else
		reader.readAsText(file);
}

function fileChosen(input, output) {
	if (input.files && input.files[0]) {
		readTextFile(input.files[0], function (str) {
			output.value = str;
		});
	}
}

function downloadjsmacro() {
	var text = document
		.getElementById("halfta")
		.value;
	text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
	var blob = new Blob([text], {
		type: "text/plain"
	});
	var anchor = document.createElement("a");
	anchor.download = "abjad.js";
	anchor.href = window
		.URL
		.createObjectURL(blob);
	anchor.target = "_blank";
	anchor.style.display = "none"; // just to be safe!
	document
		.body
		.appendChild(anchor);
	anchor.click();
	document
		.body
		.removeChild(anchor);
}

function unseperator(text, section) {
	switch (section) {
		case 'first':
			return text
				.replace(/\n$/g, '[yeni-satır]')
				.replace(/\t$/g, '[tab]')
				.replace(/\.$/g, '[nokta]')
				.replace(/\,$/g, '[virgül]')
				.replace(/\s$|\ $/g, '[boşluk]');
		case 'firstserie':
			return text.replace(/[^0-9]+/g, ',');
		case 'second':
			return text
				.replace(/\n$/g, '\\n')
				.replace(/\r\n$/g, '\\n')
				.replace(/\t$/g, '\\t')
				.replace(/\ $/g, '\\s');
		case 'secondserie':
			var seperatorregex = "[";
			$.each($("input[name='seperator']:checked"), function () {
				seperatorregex += '' + $(this).val() + '|';
			});
			if (seperatorregex.charAt(seperatorregex.length - 1) == '|') {
				seperatorregex = seperatorregex.slice(0, -1);
			}
			seperatorregex += ']';
			var sregex = new RegExp(seperatorregex, 'g');
			$('#twofm').val(sregex);
			return text
				.replace(sregex, ',')
				.replace(/,+/g, ',');
		default:
			break;
	}
}

function hidenview(tohide, toview) {
	var xtohide = document.getElementById(tohide);
	xtohide.style.display = "none";
	var xtoview = document.getElementById(toview);
	xtoview.style.display = "block";
}

function allAreEqual(array) {
	const result = array.every(element => {
		if (element === array[0]) {
			return true;
		}
	});
	return result;
}

function runbuttonviewer() {
	var potentiation = 0;
	if ($("#zero").hasClass("accepted")) {
		potentiation += 1;
	}
	if ($("#half").hasClass("accepted")) {
		potentiation += 1;
	}
	if ($("#one").hasClass("accepted")) {
		potentiation += 1;
	}
	if ($("#two").hasClass("accepted")) {
		potentiation += 1;
	}
	if (potentiation == 4) {
		$("#pview").show();
	} else {
		$("#pview").hide();
	}
}

function testmacro() {
	if ($("input[name='macrotester']").is(":checked")) {
		$("[class='tablecodes']").show();
		$('#activemacro').remove();
		$('<script/>', {
			id: 'activemacro'
		}).insertBefore('#FunctionCentered');
		$('#activemacro').html($("#halfta").val());
		var tablecodes = $("input[name='tablecodes']")
			.val()
			.split(',');
		var cellwidth = 100 / (tablecodes.length + 1);
		var testelements = [
			"ا",
			"أ",
			"إ",
			"آ",
			"ء",
			"ى",
			"ؤ",
			"ئ",
			"ۀ",
			"ب",
			"ﭖ",
			"ج",
			"ﭺ",
			"د",
			"ه",
			"ة",
			"و",
			"ز",
			"ﮊ",
			"ح",
			"ط",
			"ی",
			"ي",
			"ك",
			"ﮒ",
			"ک",
			"ل",
			"ﻻ",
			"م",
			"ن",
			"ﯓ",
			"س",
			"ع",
			"ف",
			"ص",
			"ق",
			"ر",
			"ش",
			"ت",
			"ث",
			"خ",
			"ذ",
			"ض",
			"ظ",
			"غ"
		];
		var shadda = 0;
		var testresults = `<tr>
								<td style="width: ${cellwidth}%;" class="testtableharf">Test tablosu</td>`;
		if ($("input[name='shadda']").is(":checked")) {
			shadda = 2;
		} else {
			shadda = 1;
		}
		for (var tablo = 0; tablo < tablecodes.length; tablo++) {
			testresults += `<td style="width: ${cellwidth}%;" class="testtableharf">${tablecodes[parseFloat(tablo)]}</td>`;
		}
		testelements
			.forEach(function (harf) {
				testresults += `</tr>
			<tr>
				<td style="width: "${cellwidth}%;" class="testtableharf">${harf}</td>`;
				for (var tablo = 0; tablo < tablecodes.length; tablo++) {
					testresults += `<td style="width: ${cellwidth}%;" class="testtableresult">${abjad(harf, parseFloat(tablecodes[parseFloat(tablo)]), shadda)}</td>`;
				}
				testresults += `</tr>`;
			});
		$('#testtable').html(testresults);
		$('#half').removeClass('content');
		$('#half').addClass('accepted');
		runbuttonviewer();
	} else {
		$("[class='tablecodes']").hide();
		$('#half').removeClass('accepted');
		$('#half').addClass('content');
		runbuttonviewer();
		console.log('Yenileniyor...');
		window
			.location
			.reload(true);
	}
}

function first(content) {
	var seperator = $('#oneta').val();
	var series = seperator;
	var seperation = '';
	var found = []; // this remembers what we have already found
	for (var i = 0; i < seperator.length; i++) {
		var m; // hold the match
		if (m = seperator[i].match(/[^0-9]/g)) {
			// not found yet
			if (found.indexOf(m[0]) == -1) {
				found.push(m[0]); // remember it's been found
				seperation += unseperator(seperator[i], 'first') + ',';
			}
		}
	}
	var seperatorleest = seperation.slice(0, -1);
	$('#onein').val(seperatorleest);
	series = unseperator(series, 'firstserie');
	var lastchar = series.charAt(series.length - 1);
	var firstchar = series.charAt(0);
	if (lastchar == ',') {
		series = series.slice(0, -1);
	}
	if (firstchar == ',') {
		series = series.slice(1);
	}
	var seriesleest = series.split(',');
	var SquareRoot = Math.sqrt(seriesleest.length);
	var RoundDown = Math.floor(SquareRoot);
	if (seriesleest.length / RoundDown == SquareRoot && SquareRoot > 1) {
		$('#onefn').val(SquareRoot + "x" + SquareRoot);
		var htmlproperties = `<br>
			<p style="width: 100%; color: darkred; text-align: left;">
			<strong>Sıra önizleme:</strong><br>
			<table style="background: transparent;">
			<tbody><thead><th class="theader">&nesear;</th>`;
		for (var headerrow = 1; headerrow < SquareRoot + 1; headerrow++) {
			htmlproperties += `<th class="theader">${headerrow}</th>`;
		}
		htmlproperties += `</thead>`;
		for (var rows = 0; rows < SquareRoot; rows++) {
			htmlproperties += `<tr>`;
			for (var cols = 0; cols < SquareRoot; cols++) {
				if (cols == 0) {
					htmlproperties += `<th class="theader">${ (rows + 1)}</th>`;
				}
				htmlproperties += `<td class="hucre">${seriesleest[rows * SquareRoot + cols]}</td>`;
			}
			htmlproperties += `</tr>`;
		}
		htmlproperties += `</tbody></table></p><br>`;
		$('#squarepreview').html(htmlproperties);
		$('#one').removeClass('content');
		$('#one').addClass('accepted');
		runbuttonviewer();
	} else {
		$('#onefn').val("Sıralama yetersiz, kare değil");
		$('#squarepreview').html('');
		$('#one').removeClass('accepted');
		$('#one').addClass('content');
		runbuttonviewer();
	}
	if (content == 'leest') {
		return seriesleest;
	}
}

function seconder(serie, content) {
	var series = unseperator(serie, 'secondserie');
	var lastchar = series.charAt(series.length - 1);
	var firstchar = series.charAt(0);
	if (lastchar == ',') {
		series = series.slice(0, -1);
	}
	if (firstchar == ',') {
		series = series.slice(1);
	}
	var seriestwoleest = series.split(',');
	if (seriestwoleest.length > 1) {
		$('#twofn').val(seriestwoleest.length);
		var phraseshtml = ``;
		for (phrases = 0; phrases < seriestwoleest.length; phrases++) {
			phraseshtml += `<phrase>${seriestwoleest[phrases]}
				<porder>${ (phrases + 1).toString()}</porder>
			</phrase>`;
		}
		$('#phrasespreview').html(phraseshtml);
		$('#two').removeClass('content');
		$('#two').addClass('accepted');
		runbuttonviewer();
	} else {
		$('#twofn').val(0);
		$('#phrasespreview').html('');
		$('#two').removeClass('accepted');
		$('#two').addClass('content');
		runbuttonviewer();
	}
	if (content == 'leest') {
		return seriestwoleest;
	}
}

function second(content) {
	if (content == 'leest') {
		return seconder($('#twota').val(), content);
	} else {
		var seperator = $('#twota').val();
		var seperation = `<span>`;
		var found = []; // this remembers what we have already found
		for (var i = 0; i < seperator.length; i++) {
			var m; // hold the match
			if (m = seperator[i].match(/[^\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFﭖﭺﮊﮒﻻﯓ]/g)) {
				// not found yet
				if (found.indexOf(m[0]) == -1) {
					found.push(m[0]); // remember it's been found
					seperation += `<nowrap>
									<input type="checkbox" id="seperator${i}" name="seperator" value="${unseperator(seperator[i], 'second')}">
									<label for="seperator${i}">${unseperator(seperator[i], 'first')}</label>
								</nowrap>`;
				}
			}
		}
		seperation += `</span>`;
		$('#twoin').html(seperation);
		$("input[name='seperator']").change(function () {
			if (this.checked) {
				seconder($('textarea#twota').val(), 'dothat');
			} else {
				seconder($('textarea#twota').val(), 'dothat');
			}
		});
		seconder($('textarea#twota').val(), 'dothat');
	}
}

function loadtxt(fileurl) {
	$.ajax({
		url: fileurl,
		dataType: "text",
		success: function (data) {
			$("#twota").val(data);
			second();
		}
	});
}

function product_Range(a, b) {
	var prd = a,
		i = a;
	while (i++ < b) {
		prd = BigNumber(prd.toFixed()).times(i.toFixed());
	}
	return prd;
}

function numberofcomb(n, r) {
	if (n == r || r == 0) {
		return 1;
	} else {
		r = (r < n - r) ?
			n - r :
			r;
		return BigNumber(product_Range(r + 1, n).toFixed()).dividedBy(BigNumber(product_Range(1, n - r).toFixed()));
	}
}

function adder(arr, max) {
	var k = arr.length;
	var n = max;
	var carry = false;
	var i;
	do {
		for (i = k - 1; i >= 0; i--) {
			arr[i]++;
			if (arr[i] < n - (k - (i + 1))) {
				break;
			}
			carry = true;
		}
		if (carry === true && i < 0) {
			return false; // overflow;
		}
		if (carry === false) {
			return true;
		}
		carry = false;
		for (i = i + 1; i < k; i++) {
			arr[i] = arr[i - 1] + 1;
			if (arr[i] >= n - (k - (i + 1))) {
				carry = true;
			}
		}
	} while (carry === true);
	return true;
}

function nchoosekUniq(arr, k, cb) {
	// make the array a distinct set
	var set = new Set();
	for (var i = 0; i < arr.length; i++) {
		set.add(arr[i]);
	}
	arr = [];
	set.forEach(function (v) {
		arr.push(v);
	});
	//
	var n = arr.length;
	// create index array
	var iArr = Array(k);
	for (var i = 0; i < k; i++) {
		iArr[i] = i;
	}
	// find unique combinations;
	var t0 = performance.now();
	var t1 = performance.now();
	var remains = t1 - t0;
	var combo = [];
	for (var i = 0; i < iArr.length; i++) {
		combo.push(arr[iArr[i]]);
	}
	cb(combo, remains);
	var t2 = performance.now();
	var intervals = t1 - t2;
	var interval = setInterval(function () {
		if (adder(iArr, n) === true) {
			var combo = [];
			for (var i = 0; i < iArr.length; i++) {
				combo.push(arr[iArr[i]]);
			}
			cb(combo, remains);
			var t1 = performance.now();
			remains = t1 - t0;
		} else {
			clearInterval(interval);
		}
	}, intervals);
}

function recordthings(type, csortdatas) {
	if (type == "searcher") {
		var searchdata = new FormData();
		searchdata.append("find", "searcher");
		searchdata.append("oneta", $('#oneta').val());
		searchdata.append("twota", $('#twota').val());
		searchdata.append("twofm", $('#twofm').val());
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://ebced.abdil.one/savethis.php");
		xhr.onload = function () {};
		xhr.send(searchdata);
	} else if (type == "founder") {
		var csortdata = new FormData();
		csortdata.append("find", "founder");
		csortdata.append("found", csortdatas);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "https://ebced.abdil.one/savethis.php");
		xhr.onload = function () {};
		xhr.send(csortdata);
	}
	return false;
}

function begincalc() {
	var tablecodes = $("input[name='tablecodes']")
		.val()
		.split(',');
	var firstvalue = String([first('leest')]).split(',');
	$('#pview').html(makeamold(firstvalue.length, 0));
	var secondvalue = String([second('leest')]).replace($('#twofm').val(), ',').split(',');
	var firstsort = [];
	for (var k = 0; k < firstvalue.length; k++) {
		var firstline = {};
		firstline['a'] = String(k);
		firstline['v'] = String(firstvalue[k]);
		firstsort.push(JSON.stringify([firstline]));
	}
	for (var i = 1; i < firstsort.length; i++)
		for (var j = 0; j < i; j++) {
			var sortone = jQuery.parseJSON(firstsort[i].slice(0, -1).slice(1));
			var sorttwo = jQuery.parseJSON(firstsort[j].slice(0, -1).slice(1));
			if (sortone.v < sorttwo.v) {
				var x = firstsort[i];
				firstsort[i] = firstsort[j];
				firstsort[j] = x;
			}
		}
	for (var l = 0; l < firstsort.length; l++) {
		var updatev = jQuery.parseJSON(firstsort[l].slice(0, -1).slice(1));
		var firstline = {};
		firstline['a'] = updatev.a;
		firstline['v'] = String(l + 1);
		firstsort[l] = JSON.stringify([firstline]);
	}
	if ($("input[name='shadda']").is(":checked")) {
		shadda = 2;
	} else {
		shadda = 1;
	}
	$("input[name='moldinputzero']").val("");
	var activetables = "";
	var tablestotest = 0;
	var refresher = setInterval(function () {
		if (tablestotest < tablecodes.length) {
			activetables += tablecodes[tablestotest] + ", ";
			$("input[name='moldinputthree']").val(activetables.slice(0, -2));
			$("input[name='moldinputfour']").val((parseFloat(tablestotest) + 1) + "\/" + tablecodes.length);
			var combs = [];
			var secondsort = [];
			for (var o = 0; o < secondvalue.length; o++) {
				var today = {};
				today['t'] = secondvalue[o];
				today['e'] = parseFloat(abjad(String(secondvalue[o]), parseFloat(tablecodes[tablestotest]), parseFloat(shadda)));
				today['m'] = tablecodes[tablestotest];
				secondsort.push(JSON.stringify(today));
			}
			for (var tablesort = 1; tablesort < secondsort.length; tablesort++)
				for (var yope = 0; yope < tablesort; yope++) {
					var jsonObjectone = jQuery.parseJSON(secondsort[tablesort]);
					var jsonObjecttwo = jQuery.parseJSON(secondsort[yope]);
					if (jsonObjectone.e < jsonObjecttwo.e) {
						var rope = secondsort[tablesort];
						secondsort[tablesort] = secondsort[yope];
						secondsort[yope] = rope;
					}
				}
			var records = [];
			for (var tablegroup = 0; tablegroup < secondsort.length; tablegroup++) {
				var jsonObjectthree = jQuery.parseJSON(secondsort[tablegroup]);
				var testlap = tablegroup;
				var temp = [];
				temp.push(jsonObjectthree.t);
				if (tablegroup !== secondsort.length - 1) {
					do {
						testlap += 1;
						var jsonObjectfour = jQuery.parseJSON(secondsort[testlap]);
						if (jsonObjectthree.e == jsonObjectfour.e) {
							temp.push(jsonObjectfour.t);
							goon = "please";
						} else {
							tablegroup = testlap - 1;
							goon = "stop";
						}
					} while (goon == "please");
				}
				var sorter = ((secondsort.length - 1) * tablestotest) + tablegroup;
				var theline = {};
				theline['s'] = sorter;
				theline['t'] = temp;
				theline['e'] = parseFloat(jsonObjectthree.e);
				theline['m'] = tablecodes[tablestotest];
				records.push(JSON.stringify([theline]));
			}
			var acomb = records[0]
				.slice(0, -1)
				.slice(1);
			var anobj = jQuery.parseJSON(acomb);
			var aline = String($("input[name='moldinputzero']").val() + ", " + anobj.m + " : (" + String(records.length) + ", " + String(firstsort.length) + ")");
			if (tablestotest == 0) {
				aline = String(aline).slice(2);
			}
			$("input[name='moldinputzero']").val(aline);
			if (records.length >= firstsort.length) {
				var thirdsort = [];
				for (var third = 0; third < records.length; third++) {
					thirdsort.push(third);
				}
				$("input[name='moldinputone']").val(BigNumber(BigNumber($("input[name='moldinputone']").val().toString()).plus(BigNumber(numberofcomb(records.length, firstsort.length).toFixed()))).toFixed());
				nchoosekUniq(thirdsort, firstsort.length, function (set, remaining) {
					var tablecodes = $("input[name='tablecodes']")
						.val()
						.split(',');
					var firstvalue = String([first('leest')]).split(',');
					$("input[name='moldinputfive']").val(BigNumber($("input[name='moldinputfive']").val().toString()).plus('1'));
					$("#progressbar").html(BigNumber($("input[name='moldinputfive']").val().toString()).times('100').dividedBy(BigNumber($("input[name='moldinputone']").val().toString())).toFixed() + "%");
					$("title").html(String(Math.floor(parseInt($("#progressbar").html().slice(0, -1)))) + "% ebced.abdil.one");
					$("td#progressbg").css({
						'background': 'linear-gradient(90deg, rgb(100,28,161,.6) 0%, rgb(76,20,116,.6) ' + String(parseFloat($("#progressbar").html().slice(0, -1)) - .1) + '%, rgb(100,28,161,0) ' + $("#progressbar").html().slice(0, -1) + '%, rgb(100,28,161,0) 100%)'
					});
					var timeleft = BigNumber(BigNumber(remaining).dividedBy(BigNumber($("input[name='moldinputfive']").val().toString()))).times(BigNumber($("input[name='moldinputone']").val().toString()).minus(BigNumber($("input[name='moldinputfive']").val().toString()))).toNumber();
					var mileniums = Math.floor(timeleft / (1000 * 60 * 60 * 24 * 30 * 12 * 100 * 10));
					var ages = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30 * 12 * 100 * 10) / (1000 * 60 * 60 * 24 * 30 * 12 * 100));
					var years = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30 * 12 * 100) / (1000 * 60 * 60 * 24 * 30 * 12));
					var months = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30));
					var days = Math.floor(timeleft % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));
					var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
					var remainingtime = "";
					if (mileniums > 0) {
						remainingtime += mileniums.toFixed() + " milenyum ";
					}
					if (ages > 0) {
						remainingtime += ages + " asır ";
					}
					if (years > 0) {
						remainingtime += years + " yıl ";
					}
					if (months > 0) {
						remainingtime += months + " ay ";
					}
					if (days > 0) {
						remainingtime += days + " gün ";
					}
					if (hours > 0) {
						remainingtime += hours + " saat ";
					}
					if (minutes > 0) {
						remainingtime += minutes + " dakika ";
					}
					if (seconds > 0) {
						remainingtime += seconds + " saniye";
					}
					$("input[name='remainingtime']").val(remainingtime);
					var csort = [];
					var thecomb = [];
					for (var fourth = 0; fourth < set.length; fourth++) {
						thecomb[fourth] = records[set[fourth]];
					}
					for (g = 0; g < firstsort.length; g++) {
						thecombobj = jQuery.parseJSON(thecomb[g].slice(0, -1).slice(1));
						thesortobj = jQuery.parseJSON(firstsort[g].slice(0, -1).slice(1));
						var combsort = {};
						combsort['m'] = thecombobj.m;
						combsort['e'] = thecombobj.e;
						combsort['v'] = thesortobj.v;
						combsort['t'] = thecombobj.t;
						combsort['a'] = thesortobj.a;
						combsort['s'] = thecombobj.s;
						csort.push(JSON.stringify([combsort]));
					}
					for (var w = 1; w < csort.length; w++)
						for (var q = 0; q < w; q++) {
							var sortone = jQuery.parseJSON(csort[w].slice(0, -1).slice(1));
							var sorttwo = jQuery.parseJSON(csort[q].slice(0, -1).slice(1));
							if (sortone.a < sorttwo.a) {
								var rope = csort[w];
								csort[w] = csort[q];
								csort[q] = rope;
							}
						}
					var SquareSort = Math.sqrt(csort.length);
					var colssum = [];
					var rowssum = [];
					var colsum = 0;
					var rowsum = 0;
					for (var rows = 0; rows < SquareSort; rows++) {
						for (var cols = 0; cols < SquareSort; cols++) {
							var sortcell = jQuery.parseJSON(csort[rows * SquareSort + cols].slice(0, -1).slice(1));
							var co = {};
							var ro = {};
							co['colset'] = cols;
							ro['rowset'] = rows;
							co['vals'] = jQuery
								.parseJSON(csort[rows * SquareSort + cols].slice(0, -1).slice(1))
								.e;
							ro['vals'] = jQuery
								.parseJSON(csort[rows * SquareSort + cols].slice(0, -1).slice(1))
								.e;
							colssum.push(JSON.stringify(co));
							rowssum.push(JSON.stringify(ro));
							$("#cell" + String(rows) + "x" + String(cols)).html(jQuery.parseJSON(csort[rows * SquareSort + cols].slice(0, -1).slice(1)).e);
						}
					}
					var diagonalup = 0;
					var diagonaldown = 0;
					for (var diagonals = 0; diagonals < SquareSort; diagonals++) {
						var invert = SquareSort - (diagonals + 1);
						diagonalup += parseFloat($("#cell" + String(invert) + "x" + String(diagonals)).html());
						diagonaldown += parseFloat($("#cell" + String(diagonals) + "x" + String(diagonals)).html());
					}
					var someelements = [];
					for (var footerrow = 0; footerrow < SquareSort; footerrow++) {
						colsum = 0;
						for (var harder = 0; harder < colssum.length; harder++) {
							var colsortsum = jQuery.parseJSON(colssum[harder]);
							if (colsortsum.colset == footerrow) {
								colsum += colsortsum.vals;
							}
						}
						rowsum = 0;
						for (var worker = 0; worker < rowssum.length; worker++) {
							var rowsortsum = jQuery.parseJSON(rowssum[worker]);
							if (rowsortsum.rowset == footerrow) {
								rowsum += rowsortsum.vals;
							}
						}
						$("#celltoup").html(diagonalup);
						$("#celltodown").html(diagonaldown);
						$("#cell" + String(footerrow) + "cend").html(rowsum);
						$("#cell" + String(footerrow) + "rend").html(colsum);
						someelements.push(rowsum);
						someelements.push(colsum);
					}
					someelements.push(diagonalup);
					someelements.push(diagonaldown);
					if (allAreEqual(someelements)) {
						var found = parseFloat($("#moldinputtwo").val());
						found += 1;
						var foundation = found.toString();
						$("#moldinputtwo").val(found);
						$("#endofresults").before(makeamold(firstvalue.length, found));
						$("#tablokodu" + foundation).html(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m);
						$("#moldinputzero" + foundation).val($("input[name='moldinputfive']").val());
						$("#moldinputone" + foundation).val(diagonalup);
						$("#moldinputtwo" + foundation).val("Bayanlara :" + String(huddam(bastet(diagonalup, 4, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "ULVI")) + ", Baylara :" + String(huddam(bastet(diagonalup, 5, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "ULVI")));
						$("#moldinputthree" + foundation).val("Bayanlara :" + String(huddam(bastet(diagonalup, 4, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "SUFLI")) + ", Baylara :" + String(huddam(bastet(diagonalup, 5, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "SUFLI")));
						$("#moldinputfour" + foundation).val("Bayanlara :" + String(huddam(bastet(diagonalup, 4, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "ŞER")) + ", Baylara :" + String(huddam(bastet(diagonalup, 5, parseFloat(jQuery.parseJSON(csort[0].slice(0, -1).slice(1)).m), shadda, "ARABIC"), "ŞER")));
						for (var rows = 0; rows < SquareSort; rows++) {
							for (var cols = 0; cols < SquareSort; cols++) {
								var sortcell = jQuery.parseJSON(csort[rows * SquareSort + cols].slice(0, -1).slice(1));
								$("#pcell" + String(rows) + "x" + String(cols) + foundation).html(sortcell.t[0]);
								$("#vcell" + String(rows) + "x" + String(cols) + foundation).html(sortcell.e);
								if (sortcell.t.length > 1) {
									var notes = `<justify><strong>${sortcell.t[0]}</strong> ibaresi için listenizden ebced değeri eşit olan `;
									for (p = 1; p < sortcell.t.length; p++) {
										notes += `${sortcell.t[p]}`;
										if (p !== sortcell.t.length - 1) {
											notes += `, `;
										}
									}
									notes += ` ibareleri de yerleştirilebilir.</justify>`;
									$("#notes" + foundation).html($("#notes" + foundation).html() + notes);
								}
							}
						}
						recordthings("founder", csort.toString());
						someelements = [];
						hidenview("valueslist" + foundation, "phraseslist" + foundation);
						document
							.getElementById("bottomer")
							.scrollIntoView();
					}
				});
			}
		} else {
			clearInterval(refresher);
		}
		tablestotest++;
	}, 666);
}
$(document)
	.ready(function () {
		var myInput = document.getElementById('twota');
		if (!myInput.VKI_attached)
			VKI_attach(myInput);
		document
			.getElementById("zero")
			.scrollIntoView();
		$('#zero').removeClass('content');
		$('#zero').addClass('accepted');
		$('#twota').on({
			'input': second,
			'focusout': second,
			'change': second
		});
		$("input[name='seperator']").change(function () {
			seconder($('#twota').val(), 'dothat');
		});
		$("#halfta").ready(function () {
			$.ajax({
				url: "js/abjad.js",
				dataType: "text",
				success: function (data) {
					$("#halfta").val(data);
				}
			});
			$("input:checked[name='macrotester']").attr('checked', false);
			$("[class='tablecodes']").hide();
			$('#half').removeClass('accepted');
			$('#half').addClass('content');
			runbuttonviewer();
		});
		$('#oneta').on({
			'input': first,
			'focusout': first,
			'change': first
		});
		$('#files').change(function () {
			$('#activemacro').load(location.href + " #activemacro");
			fileChosen(this, document.getElementById('halfta'));
			$("input:checked[name='macrotester']").attr('checked', false);
			$("[class='tablecodes']").hide();
			$('#half').removeClass('accepted');
			$('#half').addClass('content');
			runbuttonviewer();
		});
		$("#macroreloader").click(function () {
			$.ajax({
				url: "js/abjad.js",
				dataType: "text",
				success: function (data) {
					$("#halfta").val(data);
				}
			});
			$("input:checked[name='macrotester']").attr('checked', false);
			$("[class='tablecodes']").hide();
			$('#half').removeClass('accepted');
			$('#half').addClass('content');
			runbuttonviewer();
			alert('Varsayılan makro yeniden yüklendi.');
		});
		$("input[name='tablecodes']").on({
			'input': testmacro,
			'change': testmacro
		});
		$("input[name='macrotester']").change(function () {
			testmacro();
		});
		first();
		second();
		runbuttonviewer();
		$("#begincalc").click(function () {
			document
				.getElementById("bottomer")
				.scrollIntoView();
			recordthings("searcher", "nomore");
			begincalc();
		});
	});
