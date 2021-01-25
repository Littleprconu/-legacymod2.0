G.AddData({
name:'debug',
author:'Littlepriceonu',
desc:'debug mod',
engineVersion:1,
manifest:0,
requires:['Default dataset*'],
sheets:0,
func:function()
{
new G.Unit({
		name:'Bugged Dreamer',
		desc:'@generates [insight].... a LOT of insight',
		icon:0,
		cost:{},
		use:{'worker':1},
		//upkeep:{'coin':0.2},
		effects:[
			{type:'gather',what:{'insight':30}},
			{type:'gather',what:{'insight':100},req:{'symbolism':true}},
			{type:'mult',value:2,req:{'wisdom rituals':'on'}}
		],
		req:{'speech':true},
		category:'discovery',
		priority:5,
	});
  
}
});
