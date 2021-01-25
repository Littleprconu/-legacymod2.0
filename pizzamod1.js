G.AddData({
name:'Pizza Mod',
author:'Littlepriceonu',
desc:'A simple example mod that adds pizza.',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:0,
func:function()
{
new G.Unit({
		name:'Pizza Makers',
		desc:'@Makes extremly tasty [Pizza]s out of [seafood] and [herb]s.',
		icon:0,
		cost:{},
		use:{'worker':1},
		staff:{'knapped tools':1},
		//upkeep:{'coin':0.1},
		gizmos:true,
		modes:{
    'cook':{name:'Cook',icon:0,desc:'Turn [seafood] and [herb]s into [Pizza].',req:{'Pizza':true}},
			},
		effects:[
			{type:'convert',from:{'seafood':1,'herb':1},into:{'Pizza':1},every:1,repeat:1,mode:'cook'},
		],
		req:{'Pizza':true},
		category:'crafting',
		priority:3,
	});
new G.Res({
		name:'Pizza',
		desc:'[Pizza]s are made out of [seafood] and [herb]s, They have a slight spicy taste to them with [herb]s being lightly dropped on top',
		icon:0,
		turnToByContext:{'eat':{'health':3,'happiness':5},'decay':{'spoiled food':0.5}},//this basically translates to : "when eaten, generate some health and happiness; when rotting, turn into either nothing or some spoiled food"
		partOf:'food',
		category:'food',
	});
  new G.Tech({
		name:'Pizza',
		desc:'@Unlocks [Pizza Makers]s. Pizza makers can make pizza out of [herb]s and [seafood]',
		icon:0,
		cost:{'insight':20},
		req:{'cooking':true},
	});
  
}
});
