G.AddData({
name:'Pizza Mod',
author:'Littlepriceonu',
desc:'A simple example mod that adds pizza.',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:0,
func:function()
{
new G.Res({
		name:'Pizza',
		desc:'[Pizza]s are loaded with capsaicin and, depending on who you ask, may produce a pleasant burn when eaten.',
		icon:0,
		turnToByContext:{'eat':{'health':3,'happiness':5},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
	G.getDict('grass').res['gather']['Pizza']=10;
}
});
