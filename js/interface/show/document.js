/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */



showThen['Document']=function(){
	$('#showGround .ground1').html(
		'<textarea class=editorText tip="'+gM('input')+' HTML"></textarea>'+
		itvc('" hotkey="Ctrl + E')+
		DCtv('inblk',[
			Arrf(Melef,ZLR('IL LA MD HTML')).join(''),
			Arrf(Melef,ZLR('CV SV EC')).join(''),
			Arrf(Melef,ZLR('JS I18 YAML')).join(''),
		].join(br))+
		detail(SCtv('DocumentTool','<input type="file" id=DocumentFile accept=".md, text/*" multiple="multiple" />'+
		strbtn+gM('Play')+'" id=DocumentPlay />'),''
		)
	);
	$('#showGround .editorText').val(L.document||'');

	$('#showGround .DocumentTool').on('click',':button',function(){
		var T=$('#showGround .editorText'),s=T.val(), st=s.trim(), me=$(this),id=me.attr('id');
		if(id=='DocumentPlay'){
			L.document=s;
			if(/^https?.+$/.test(st)){
				open('document.html?src='+st);
			}else{
				open('document.html');
			}
		}
		
	}).on('change',':file',function(){
		var v=$(this).val();
		if(v){
			var files=this.files, fl=files.length;
			for(var i=0;i<fl;i++){
				var f=files[i], s=f.size, ext=f.type.replace(/text[/]/,''), name=f.name;

consolelog(f);
				if(/^text[/]/.test(f.type) || !ext){
					if(!ext && /\..+/.test(name)){
						ext=name.replace(/.+\./,'').toUpperCase()
					}
					if(!s){s='?KB'}else{
						s=sizeKB(s)
					}

					var reader=new FileReader();
					reader.onload = function(e){
						//var txt = this.result;
						var txt=e.target.result;
						consolelog('txt',txt);
						if(/MD|MARKDOWN/.test(ext)){
							txt=XML.wrapE('MD',txt)
						}
						textareaAdd(txt,'#showGround .ground1 .editorText',1);
					};
					//reader.readAsDataURL(f);
					reader.readAsText(f);
					

				}
			}
		}
	});


	
};
