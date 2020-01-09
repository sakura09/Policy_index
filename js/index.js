const loc_cities = ['杭州市', '宁波市', '温州市', '绍兴市','湖州市','嘉兴市','金华市','衢州市','舟山市','台州市','丽水市']
new Vue({
	el: "#app",
	data: {
		//new radar
		radarList:[],
		checkedCities: [],
		cities:[],
		activeName:'second',
		loading:false,
		indicator:[],
		countcitylist:[],
		radarParams:{
			province:"浙江省",
			typeList:'',
			cityList:''
		},
		lineParams:{
			province:"浙江省",
			type:'',
			cityList:[]
		},
		// 政策区域数据
		areaData: {
			'国家级': 2958,
			'浙江省': 15746,
			'广东省': 81,
			'江苏省': 200,
			'福建省': 210
		},
		"&#10": "&#10",
		// 政策区域所选中的数据
		selectArea: [],
		//政策类别数据
		categoryData: ["人才引进", "人才培养", "人才流动", "人才评价", "人才激励", "人才服务保障"],
		// 政策类别所选中的数据
		selectCategory: [],
		typeData: {
			"经济补贴类": ["经费资助", "生活补贴", "引才补助", "担保贷款"],
			"住房保障类": ["周转住房", "购房补贴", "租房补贴", "安家补贴", "人才公寓"],
			"服务保障类": ["户籍保障", "家属就业", "医疗保健", "社会保险", "综合服务", "子女教育"]
		},
		typeData1: ["税收奖补", "车辆上牌", "身份编制", "场地支持", "结业补贴"],
		//经济补贴类选中数据
		typeSelectData1: [],
		//住房保障类选中数据
		typeSelectData2: [],
		//服务保障类选中数据
		typeSelectData3: [],
		//其他类选中数据
		typeSelectData4: [],
		//表格数据
		tableData: [{
			"政策标题": null,
			"人才待遇": "投入经费不低于2000万元",
			"待遇类型": "经费资助",
			"适用区域": "浙江省全省",
			"政策条款及服务内容": "领军型创新创业团队首个资助周期为3年，资助期内对每个团队投入经费不低于2000万元，其中省级财政投入不低于500万元，团队所在地地方政府按照不低于省级财政投入额度进行配套资助，团队所在企业按照不低于各级财政资助资金总额对团队进行配套资助。",
			"url": "http://www.zjkjt.gov.cn/news/node18/detail180201/2016/180201_70902.htm"
		}, {
			"政策标题": null,
			"人才待遇": "先设站后授牌",
			"待遇类型": "综合服务",
			"适用区域": "浙江省全省",
			"政策条款及服务内容": "凡符合《浙江省博士后试点工作管理实施办法》（浙博办〔2008〕1号）基本条件的企业单位，均可申请设立浙江省企业博士后工作站。按照“先设站、后授牌”原则，申请设站企业单位，需填写《浙江省企业博士后工作站申请表》，经设区市人力社保局审核同意后，报省人力社保厅备案，并在省厅门户网站上进行公布。",
			"url": "http://zjbsh.zjhwrc.com/laws/12"
		}, {
			"政策标题": null,
			"人才待遇": "50万",
			"待遇类型": "经费资助",
			"适用区域": "浙江省全省",
			"政策条款及服务内容": "省财政给予“海鸥计划”引进人才每人人民币50万元的一次性省科学技术人才奖励。",
			"url": "http://www.lsrc.cn/qrjh/201210/t20121019_56498.htm"
		}],
		total1: 15904,
		total2: 9,
		total3: 9,
		currentPage1: 1,
		currentPage2: 1,
		currentPage3: 1,
		isShowAllPolicy: true,
		isClick: false,
		// 人才引进计划
		talentsData: null,
		content1: "年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才年深圳市海外高层次海外留学人才",
		selectTalent: [],
		isShowLinkContent: true,
		isClick1: false,
		pageNum: [1, 1],
		content3Data: {
			"treat1": [{
				"政策标题": "31 广州市“岭南英杰工程”实施意见 穗人社规字〔2018〕3号 2019-11-01",
				"省份": "广东省",
				"人才待遇1": "基本养老保险待遇第一，参加基本养老保险的个人，达到法定退休年龄时累计缴费满十五年的，按月领取基本养老金。基本养老金由统筹养老金（现行制度中称为基础养老金）和个人账户养老金组成，基本养老金根据个人累计缴费年限、缴费工资、当地职工平均工资、个人账户金额、城镇人口平均预期寿命等因素确定。缴费不足十五年的人员可以缴费至满十五年，按月领取基本养老金；也可以转入新型农村社会养老保险或者城镇居民社会养老保险，按照国务院规定享受相应的养老保险待遇。第二，参加新型农村社会养老保险的农村居民，符合国家规定条件的，按月领取新型农村社会养老保险待遇。新型农村社会养老保险待遇由基础养老金和个人账户养老金组成。第三，参加基本养老保险的个人，因病或者非因工死亡的，其遗属可以领取丧葬补助金和抚恤金；在未达到法定退休年龄时因病或者非因工致残完全丧失劳动能力的，可以领取病残津贴。",
				"url": "null"
			}, {
				"政策标题": "32 广州市促进人力资源服务机构创新发展办法 穗人社规字〔2019〕5号 2019-11-01",
				"省份": "广东省",
				"人才待遇1": "工伤保险待遇在《工伤保险条例》规定的工伤保险待遇基础上，《社会保险法》有三项突破第一，将现行规定由用人单位支付的工伤职工“住院伙食补助费”、“到统筹地区以外就医的交通食宿费”和“终止或者解除劳动合同时应当享受的一次性医疗补助金”改为由工伤保险基金支付，在进一步保障工伤职工权益的同时，减轻了参保用人单位的负担。第二，为保证工伤职工得到及时救治，本法规定了工伤保险待遇垫付追偿制度。即职工所在用人单位未依法缴纳工伤保险费，发生工伤事故的，由用人单位支付工伤保险待遇。用人单位不支付的，从工伤保险基金中先行支付，然后由社会保险经办机构依照本法规定追偿。第三，规定由于第三人的原因造成工伤，第三人不支付工伤医疗费用或者无法确定第三人的，由工伤保险基金先行支付后，向第三人追偿。",
				"url": "null"
			}, {
				"政策标题": "34 汕头市新引进人才购房补助和住房补助发放办法 汕人社发〔2019〕4号 2019-10-31",
				"省份": "广东省",
				"人才待遇1": "生育保险待遇在总结生育保险制度实施经验的基础上，本法规定，用人单位已经缴纳生育保险费的，其职工享受生育保险待遇，生育保险待遇包括生育医疗费用和生育津贴；职工未就业配偶按照国家规定享受生育医疗费用待遇。",
				"url": "null"
			}, {
				"政策标题": "35 汕头市体育名师评选实施办法（试行） 汕人才发〔2018〕4号 2019-10-31",
				"省份": "广东省",
				"人才待遇1": "2万元给予补助。中央财政给予新招募且在岗服务满6个月的“三支一扶”人员一次性安家费3000元。2019年中央财政对调标进行补发，补发范围为本通知印发时仍在岗服务的国家招募计划内“三支一扶”人员。地方各级人社部门要会同财政部门结合实际加大配套资金支持力度，按时足额发放工作生活补贴，全面落实社会保险政策，确保“三支一扶”人员在岗期间的工作生活补贴基本达到当地乡镇机关或事业单位从高校毕业生中新聘用工作人员试用期满后工资收入水平，在艰苦边远地区服务的可享受艰苦边远地区津补贴。鼓励有条件的地方为“三支一扶”人员办理补充医疗保险，重大疾病、人身意外伤害等商业保险以及住房公积金，建立年度考核奖励机制。各地要按规定严格管理使用中央补助资金，确保资金花得其所、用得安全，提高资金使用效益。",
				"url": "null"
			}, {
				"政策标题": "37 韶关市扶持产业科技人才实施意见 （试行） 2019-10-23",
				"省份": "广东省",
				"人才待遇1": "保障措施（一）加强组织领导。高校毕业生“三支一扶”计划是引导和鼓励高校毕业生到基层工作的重要平台，是引导人才向基层一线流动、为基层事业发展提供人才支持的有效措施。各地要高度重视，加强组织领导，健全完善“三支一扶”工作领导小组工作机制，强化部门沟通协调，通力合作，围绕打赢脱贫攻坚战和推进基层人才队伍建设，深入推进计划实施，务求取得实效。",
				"url": "null"
			}, {
				"政策标题": "38 中共云浮市委关于深化人才发展体制机制改革的实施意见 2019-10-23",
				"省份": "广东省",
				"人才待遇1": "关于加大职业培训投入力度近些年，各地根据国家有关规定，相应出台了一系列政策措施，明确城乡有就业要求和培训愿望的劳动者参加就业技能培训或创业培训，培训合格并通过技能鉴定取得初级以上职业资格证书，根据其获得职业资格证书或就业情况，按规定给予培训费补贴；企业新录用的符合职业培训补贴条件的劳动者，由企业依托所属培训机构或政府认定培训机构开展岗前培训的，按规定给予企业一定的培训费补贴；对通过初次职业技能鉴定并取得职业资格证书或专项职业能力证书的，按规定给予一次性职业技能鉴定补贴；对城乡未继续升学的应届初高中毕业生参加劳动预备制培训的，按规定给予培训费补贴，同时对其中农村学员和城市家庭经济困难学员给予一定生活费补贴。“十一五”期间和“十二五”期间，政府职业培训补贴资金分别达到230亿元和350多亿元，其中2015年政府职业培训补贴资金为",
				"url": "null"
			}, {
				"政策标题": "39 中共云浮市委 云浮市人民政府关于印发《云浮市人才发展“十三五”规划》的通知 云发〔2016〕9号 2019-10-22",
				"省份": "广东省",
				"人才待遇1": "专家评审。市人力资源和社会保障局组织相关专业学科领域的专家，按照公开、竞争、择优原则对符合申报资格的人选进行评审。对被确定为相应梯队的人选在市人力资源和社会保障局门户网站、广州人才工作网同步公示，公示期为7天。经公示无异议的，由市人才工作领导小组办公室制作并颁发荣誉证书，纳入广州市“岭南英杰工程”人才库管理。原则上两年选拔一次。",
				"url": "null"
			}, {
				"政策标题": "40 关于印发《云浮市引进人才“一站式”服务实施细则》的通知 云人才办〔2016〕5号 2019-10-22",
				"省份": "广东省",
				"人才待遇1": "后备人才所在单位应当遵照国家有关法律法规和财务规章制度，遵循项目合理、专款专用、加强管理、保证绩效的原则，加强对资助经费的管理，严禁截留、挤占、挪用。有本意见规定的应当撤销后备人才培养资格情形的，后备人才所在单位应及时作出经费结算，报行政主管部门核批后报送市人力资源和社会保障局，并积极配合做好已发放资助经费追缴或结余资金上缴财政工作。",
				"url": "null"
			}, {
				"政策标题": "41 珠海市高端学术交流资助办法实施细则（试行） 2019-10-22",
				"省份": "广东省",
				"人才待遇1": "实施人力资源服务机构创新发展“三个十”工程。每年评选出10家“广州市创新人力资源服务机构”、10名“广州市人力资源服务业领军人才”和10个“广州市人力资源服务业创新项目”。对评选出的每家“广州市创新人力资源服务机构”给予100万元奖励，对评选出的每名“广州市人力资源服务业领军人才”给予50万元奖励，对评选出的每个“广州市人力资源服务业创新项目”给予30万元奖励，分别授予荣誉称号并颁发证书。对已入选“广州市创新人力资源服务机构”、“广州市人力资源服务业领军人才”的，不得重复申领奖励。",
				"url": "null"
			}],
			"treatList2": [{
				"政策标题": "《中共浙江省委办公厅 浙江省人民政府办公厅关于实施领军型创新创业团队引进培育计划的意见》",
				"省份": "浙江省",
				"人才待遇": "投入经费不低于2000万元",
				"政策条款及服务内容": "省财政给予“海鸥计划”引进人才每人人民币50万元的一次性省科学技术人才奖励。",
				"url": "http://www.zjkjt.gov.cn/news/node18/detail180201/2016/180201_70902.htm"
			}, {
				"政策标题": "《关于做好我省企业博士后工作站先设站后授牌工作的通知》",
				"省份": "浙江省",
				"人才待遇": "先设站后授牌",
				"url": "http://zjbsh.zjhwrc.com/laws/12"
			}, {
				"政策标题": "《关于实施“海鸥计划” 完善省“千人计划”人才引进体系的意见》",
				"省份": "浙江省",
				"人才待遇": "50万",
				"url": "http://www.lsrc.cn/qrjh/201210/t20121019_56498.htm"
			}, {
				"政策标题": "《关于印发〈浙江省高层次人才特殊支持计划〉的通知》",
				"省份": "浙江省",
				"人才待遇": "50万",
				"url": "http://www.zjkjt.gov.cn/news/node01/detail0101/2017/0101_75279.htm"
			}, {
				"政策标题": "《关于印发〈浙江省高层次人才特殊支持计划〉的通知》",
				"省份": "浙江省",
				"人才待遇": "30万",
				"url": "http://www.zjkjt.gov.cn/news/node01/detail0101/2017/0101_75279.htm"
			}, {
				"政策标题": "《关于印发〈浙江省高层次人才特殊支持计划〉的通知》",
				"省份": "浙江省",
				"人才待遇": "80万",
				"url": "http://www.zjkjt.gov.cn/news/node01/detail0101/2017/0101_75279.htm"
			}, {
				"政策标题": "《关于印发〈浙江省高层次人才特殊支持计划〉的通知》",
				"省份": "浙江省",
				"人才待遇": "100万",
				"url": "http://www.zjkjt.gov.cn/news/node01/detail0101/2017/0101_75279.htm"
			}, {
				"政策标题": "《关于杭州市市属事业单位考核引进高层次人才试行备案制工作的通知》",
				"省份": "浙江省",
				"人才待遇": "备案制考核引进",
				"url": "http://www.hangzhou.gov.cn/art/2015/11/6/art_1060011_395064.html"
			}, {
				"政策标题": "《海宁市人才公寓建设和使用管理办法（试行）》",
				"省份": "浙江省",
				"人才待遇": "租住市级人才公寓",
				"url": ""
			}]
		},
	},
	created() {
		$.ajax({
			type: 'GET',
			data: {
				pageNum: 1
			},
			xhrFields: {
				withCredentials: true
			},
			url: 'http://210.14.118.96/api/v1/data/policy/d20e17c02875eddb28c0eee366c91231',
			crossDomain: true,
			async: true,
			dataType: 'json',
			success: (data) => {
				this.tableData = data.retList
				this.total1 = 15904
				this.currentPage1 = 1
			}
		});
		$.ajax('./json/plan.json', {
			dataType: 'json',//服务器返回json格式数据
			type: 'get',//HTTP请求类型
			timeout: 10000,//超时时间设置为10秒；
			success: (data) => {
				this.talentsData = data
			},
			error: (xhr, type, errorThrown) => {
				console.log("请求失败")
			}
		});
		//全部政策默认
		$.ajax('./json/政策.json', {
			dataType: 'json',//服务器返回json格式数据
			type: 'get',//HTTP请求类型
			timeout: 10000,//超时时间设置为10秒；
			success: (data) => {
				let chartData = data.chartData
				let arr = []
				arr.push(chartData['浙江省'])
				this.randarChart1Init('浙江省', arr)
				let chartData1 = data.chartData1
				let arr1 = []
				arr1.push(chartData1['浙江省'])
				this.randarChart1Init1('浙江省', arr1)
				this.radarService('浙江省')
			},
			error: function (xhr, type, errorThrown) {
				console.log('请求失败')
			}
		});
	},
	watch: {
		selectArea() {
			this.isClick = true
			this.isShowAllPolicy = true
			if (this.selectArea.length == 0) {
				$.ajax({
					type: 'GET',
					data: {
						pageNum: 1
					},
					xhrFields: {
						withCredentials: true
					},
					url: 'http://210.14.118.96/api/v1/data/policy/d20e17c02875eddb28c0eee366c91231',
					crossDomain: true,
					async: true,
					dataType: 'json',
					success: (data) => {
						this.tableData = data.retList
						this.total1 = 15904
						this.currentPage1 = 1
					}
				});
			}
			if (this.selectArea.length == 1) {
				$.ajax('./json/政策.json', {
					dataType: 'json',//服务器返回json格式数据
					type: 'get',//HTTP请求类型
					timeout: 10000,//超时时间设置为10秒；
					success: (data) => {
						let chartData = data.chartData
						let arr = []
						arr.push(chartData[this.selectArea[0]])
						this.randarChart1Init(this.selectArea[0], arr)

						let chartData1 = data.chartData1
						let arr1 = []
						arr1.push(chartData1[this.selectArea[0]])
						this.randarChart1Init1(this.selectArea[0], arr1)
					},
					error: function (xhr, type, errorThrown) {
						console.log('请求失败')
					}
				});

			}
		},
		selectTalent() {
			this.isClick1 = true
			this.isShowLinkContent = true
		},
		selectCategory() { this.isClick = true },
		typeSelectData1() { this.isClick = true },
		typeSelectData2() { this.isClick = true },
		typeSelectData3() { this.isClick = true },
		typeSelectData4() { this.isClick = true }
	},
	mounted() {
		this.init()
		this.lineChart()
	},
	methods: {
		init() {

		},
		// 政策区域点击
		areaClick(a) {
			if (a.target.className) {
				a.target.className = ""
			} else {
				if (this.selectArea.length > 1) {
					alert("政策区域最多只能选择两个")
					return
				}
				a.target.className = "icon"
			}
			let nextInnerText = a.target.nextSibling.nextSibling.innerText
			if (this.selectArea.indexOf(nextInnerText) == -1) {
				this.selectArea.push(nextInnerText)
				//TODO second checkbox to city
				if (nextInnerText == '浙江省'){
					this.cities = loc_cities
				}
			} else {
				let index = this.selectArea.indexOf(nextInnerText)
				this.selectArea.splice(index, 1)
				if (nextInnerText == '浙江省'){
					this.cities = []
				}
			}
		},
		//政策类别点击
		categoryClick(a) {
			if (a.target.className) {
				a.target.className = ""
			} else {
				a.target.className = "icon"
			}
			let nextInnerText = a.target.nextSibling.nextSibling.innerText
			if (this.selectCategory.indexOf(nextInnerText) == -1) {
				this.selectCategory.push(nextInnerText)
			} else {
				let index = this.selectCategory.indexOf(nextInnerText)
				this.selectCategory.splice(index, 1)
			}
		},
		//服务类型标题点击
		typeTitleClick(a) {
			let dom = a.target.parentNode
			let text = a.target.parentNode.innerText
			let category = JSON.parse(JSON.stringify(this.categoryClickSon(text)))
			this.categoryClickSon(text).splice(0)
			if (a.target.className) {
				a.target.className = ""
				$(dom).parent().find("i").removeClass("icon")
				this.radarList = this.radarList.filter(key => !category.includes(key))
			} else {
				a.target.className = "icon"
				$(dom).parent().find("i").addClass("icon")
				let doms = a.target.parentNode.nextElementSibling
				let domss = $(doms).find("span")
				for (let i = 0; i < domss.length; i++) {
					this.categoryClickSon(text).push($(domss[i]).text())
					this.radarList.push($(domss[i]).text())
				}
			}
			this.radarList = [...new Set(this.radarList)]
			//TODO radar function
			this.handleRadarService()
			console.log('radar',this.radarList)
		},
		//政策类别点击
		categoryClickSon(text) {
			switch (text) {
				case "经济补贴类:":
					return this.typeSelectData1
				case "住房保障类:":
					return this.typeSelectData2
				case "服务保障类:":
					return this.typeSelectData3
				case "其他类:":
					return this.typeSelectData4
			}
		},
		//服务类型内容点击
		typeContentClick(a) {
			let dom = a.target.parentNode.parentNode.previousElementSibling
			if ($(dom).find("i")[0].className) {
				$(dom).find("i")[0].className = ""
			}
			let text = $(dom).find("span").text()
			if (a.target.className) {
				a.target.className = ""
			} else {
				a.target.className = "icon"
			}
			let nextInnerText = a.target.nextSibling.nextSibling.innerText
			if (this.categoryClickSon(text).indexOf(nextInnerText) == -1) {
				this.categoryClickSon(text).push(nextInnerText)
				this.radarList.push(nextInnerText)
			} else {
				let index = this.categoryClickSon(text).indexOf(nextInnerText)
				this.categoryClickSon(text).splice(index, 1)
				this.radarList = this.radarList.filter((item)=>{
					return item != nextInnerText
				  });
			}
			//console.log(this.categoryClickSon(text))
			//TODO radar function
			this.handleRadarService()
			console.log('radar',this.radarList)
			
		},
		//table点击详情跳转
		deleteRow(a, b) {
			if (b[a].url) {
				window.location.href = b[a].url
			} else {
				alert("暂无收录")
			}
		},
		//url跳转
		getUrl(url) {
			if (url.length > 0 && url != "null") {
				window.location.href = url
			}
		},
		// 分页
		//全部政策分页
		handleCurrentChange(val) {
			if (this.selectArea.length == 0) {
				let url = 'http://210.14.118.96/api/v1/data/policy/d20e17c02875eddb28c0eee366c91231'
				$.ajax({
					type: 'GET',
					data: {
						pageNum: val
					},
					xhrFields: {
						withCredentials: true
					},
					url: url,
					crossDomain: true,
					async: true,
					dataType: 'json',
					success: (data) => {
						this.tableData = data.retList
						this.total1 = 15904
						this.currentPage1 = 1
					}
				});
			}
			if (this.selectArea.length == 1) {
				let arr5 = []
				function func(arr, arr1) {
					for (let i = 0; i < arr.length; i++) {
						arr1.push(arr[i])
					}
				}
				func(this.typeSelectData1, arr5)
				func(this.typeSelectData2, arr5)
				func(this.typeSelectData3, arr5)
				let url = "http://210.14.118.96/api/v1/data/policy/ac8d658f03e7c1108198cae4b43b930a?token=01311272-ae3c-4b64-b615-42cb850b9385"
				$.ajax({
					type: 'GET',
					data: {
						province: JSON.stringify(this.selectArea),
						"政策类型": JSON.stringify(this.selectCategory),
						"服务类型": JSON.stringify(arr5),
						pageNum: JSON.stringify([val])
					},
					xhrFields: {
						withCredentials: true
					},
					url: url,
					crossDomain: true,
					async: true,
					dataType: 'json',
					success: (data) => {
						this.tableData = data.retList
					}
				})
			}
			console.log(`当前页: ${val}`);
		},
		//人才待遇分页
		handleCurrentChange1(val) {
			this.pageNum[0] = val
			let arr5 = []
			function func(arr, arr1) {
				for (let i = 0; i < arr.length; i++) {
					arr1.push(arr[i])
				}
			}
			func(this.typeSelectData1, arr5)
			func(this.typeSelectData2, arr5)
			func(this.typeSelectData3, arr5)
			let url = "http://210.14.118.96/api/v1/data/policy/ac8d658f03e7c1108198cae4b43b930a?token=01311272-ae3c-4b64-b615-42cb850b9385"
			$.ajax({
				type: 'GET',
				data: {
					province: JSON.stringify(this.selectArea),
					"政策类型": JSON.stringify(this.selectCategory),
					"服务类型": JSON.stringify(arr5),
					pageNum: JSON.stringify(this.pageNum)
				},
				xhrFields: {
					withCredentials: true
				},
				url: url,
				crossDomain: true,
				async: true,
				dataType: 'json',
				success: (data) => {
					if (data.total_num1 != 0) {
						this.content3Data = data
						this.total2 = data.total_num1
						this.total3 = data.total_num2
						console.log(data)
					}
				}
			})
		},
		handleCurrentChange2(val) {
			this.pageNum[1] = val
			let arr5 = []
			function func(arr, arr1) {
				for (let i = 0; i < arr.length; i++) {
					arr1.push(arr[i])
				}
			}
			func(this.typeSelectData1, arr5)
			func(this.typeSelectData2, arr5)
			func(this.typeSelectData3, arr5)
			let url = "http://210.14.118.96/api/v1/data/policy/ac8d658f03e7c1108198cae4b43b930a?token=01311272-ae3c-4b64-b615-42cb850b9385"
			$.ajax({
				type: 'GET',
				data: {
					province: JSON.stringify(this.selectArea),
					"政策类型": JSON.stringify(this.selectCategory),
					"服务类型": JSON.stringify(arr5),
					pageNum: JSON.stringify(this.pageNum)
				},
				xhrFields: {
					withCredentials: true
				},
				url: url,
				crossDomain: true,
				async: true,
				dataType: 'json',
				success: (data) => {
					if (data.total_num1 != 0) {
						this.content3Data = data
						this.total2 = data.total_num1
						this.total3 = data.total_num2
						console.log(data)
					}
				}
			})
		},
		//删除选中区域
		delectArea(a) {
			let dom = a.target.parentNode
			let text = $(dom).text().split(" ")
			let index = this.selectArea.indexOf(text[0])
			this.selectArea.splice(index, 1)
		},
		//对比内容
		//高端人才数量雷达图
		randarChart1Init(title, data) {
			let chart1 = echarts.init(document.getElementById("randarChart1"))
			let option = {
				legend: {
					x: "center",
					bottom: "10%"
				},
				title: {
					text: title ? title + '高端人才数量' : "高端人才数量",
					top: 20,
					left: "center"
				},
				tooltip: {
					confine: true,
					formatter: (params) => {
						return `
							${params.name} <br >
							国家级奖项获奖人才: ${params.value[0]} <br >
							<p style="padding-left: 10px;">国家最高科学技术奖: ${params.data['国家最高科学技术奖'] || 0}</p>
							<p style="padding-left: 10px;">国家自然科学奖: ${params.data['国家自然科学奖'] || 0}</p>
							<p style="padding-left: 10px;">国家科学技术进步奖: ${params.data['国家科学技术进步奖'] || 0}</p>
							<p style="padding-left: 10px;">国家技术发明奖: ${params.data['国家技术发明奖'] || 0}</p>
							
							国家人才计划: ${params.value[1]} <br >
							<p style="padding-left: 10px;">两院院士: ${params.data['两院院士'] || 0}</p>
							<p style="padding-left: 10px;">长江学者: ${params.data['长江学者'] || 0}</p>
							<p style="padding-left: 10px;">千人计划: ${params.data['千人计划'] || 0}</p>
							<p style="padding-left: 10px;">万人计划: ${params.data['万人计划'] || 0}</p>
							青年人才: ${params.value[2]} <br >
							<p style="padding-left: 10px;">杰出青年科学基金: ${params.data['杰出青年科学基金'] || 0}</p>
							<p style="padding-left: 10px;">优秀青年科学基金: ${params.data['优秀青年科学基金'] || 0}</p>
							<p style="padding-left: 10px;">中国青年女科学家: ${params.data['中国青年女科学家'] || 0}</p>
							科技人才总数: ${params.value[3]} <br >
							科技贡献: ${params.value[4]} <br >
						`
					},
				},
				radar: {
					// shape: 'circle',
					name: {
						textStyle: {
							color: '#000',
						}
					},
					center: ['50%', '50%'],
					radius: "60%",
					indicator: [
						{ name: '国家级奖项获奖人才', max: 1 },
						{ name: '科技贡献', max: 1 },
						{ name: '科技人才总数', max: 1 },
						{ name: '青年人才', max: 1 },
						{ name: '国家人才计划', max: 1 },
					]
				},
				series: [{
					name: '',
					type: 'radar',
					data: data,
					symbol: "circle",
					symbolSize: 10
				}]
			};
			chart1.setOption(option)
		},
		//人才政策数量雷达图
		randarChart1Init1(title, data) {
			console.log('radar',data)
			let chart1 = echarts.init(document.getElementById("randarChart2"))
			let option = {
				legend: {
					x: "center",
					bottom: "10%"
				},
				title: {
					text: title ? title + "人才政策数量" : "人才政策数量",
					top: 20,
					left: "center"
				},
				tooltip: {
					confine: true
				},
				radar: {
					// shape: 'circle',
					name: {
						textStyle: {
							color: '#000',
						}
					},
					center: ['50%', '50%'],
					radius: "60%",
					indicator: [
						{ name: '总数量', max: 18000 },
						{ name: '经济补贴类', max: 10000 },
						{ name: '住房保障类', max: 3000 },
						{ name: '服务保障类', max: 3000 },
						{ name: '其他类', max: 1500 }
					]
				},
				series: [{
					name: '',
					type: 'radar',
					data: data,
					symbol: "circle",
					symbolSize: 10
				}]
			};
			chart1.setOption(option)
		},
		//服务类型雷达
		radarService(title, data,indicator){
			if (typeof indicator == 'undefined' || indicator.length == 0 ){
				indicator = [{}]
			}
			let chart1 = echarts.init(document.getElementById("radarService"))
			let option = {
				legend: {
					x: "center",
					bottom: "10%"
				},
				title: {
					text: title ? title + "服务政策" : "服务政策",
					top: 20,
					left: "center"
				},
				tooltip: {
					confine: true
				},
				radar: {
					shape: 'circle',
					name: {
						textStyle: {
							color: '#000',
						}
					},
					center: ['50%', '50%'],
					radius: "60%",
					indicator: indicator
				},
				series: [{
					name: '',
					type: 'radar',
					data: data,
					symbol: "circle",
					symbolSize: 10
				}]
			};
			chart1.on('click',(params) => {
				console.log(params)
				if(typeof params.event.topTarget.__dimIdx != 'undefined'){
					this.handleLineChart(this.indicator[params.event.topTarget.__dimIdx].name,params.name)
					//this.handleLineChart(this.indicator[params.event.topTarget.__dimIdx].name)
					//TODO handle lineService
				}
			});
			chart1.setOption(option)
		},
		lineChart(data1=[],data2=[],xdata=[],title='',name=[]){
			let chart1 = echarts.init(document.getElementById("lineChart"))
			let option = {
				backgroundColor: '#fff',
				title: {
					text: title,
					textStyle: {
						fontWeight: 'bold',
						fontSize: 18,
						color: '#333'
					},
					left: 'center',
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},
				legend: {
					icon: 'rect',
					itemWidth: 14,
					itemHeight: 5,
					itemGap: 13,
					data: ['移动'],
					right: '4%',
					textStyle: {
						fontSize: 12,
						color: '#F1F1F3'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					axisLine: {
						lineStyle: {
							color: '#57617B'
						}
					},
					data: xdata
				}],
				yAxis: [{
					type: 'value',
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#57617B'
						}
					},
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 14
						}
					},
					splitLine: {
						lineStyle: {
							color: '#57617B'
						}
					}
				}],
				series: [{
					name: name[0],
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 1
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(219, 50, 51, 0.3)'
							}, {
								offset: 0.8,
								color: 'rgba(219, 50, 51, 0)'
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
			
							color: 'rgb(219,50,51)',
							borderColor: 'rgba(219,50,51,0.2)',
							borderWidth: 12
						}
					},
					data: data1
				},{
					name: name[1],
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: false,
					lineStyle: {
						normal: {
							width: 1
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(0, 136, 212, 0.3)'
							}, {
								offset: 0.8,
								color: 'rgba(0, 136, 212, 0)'
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: 'rgb(0,136,212)',
							borderColor: 'rgba(0,136,212,0.2)',
							borderWidth: 12
			
						}
					},
					data:data2
				}]
			}
			chart1.setOption(option)
		},
		handleLineChart(type='',city=""){
			this.lineParams.type = type
			//this.lineParams.cityList = '["'+city+'"]'
			this.lineParams.cityList = JSON.stringify(this.countcitylist)
			$.ajax({
				type: 'GET',
				data: this.lineParams,
				xhrFields: {
					withCredentials: true
				},
				url: 'http://210.14.118.96/api/v1/data/policy/ccbe6d168c169805efac93a6a0d0ef2c',
				crossDomain: true,
				async: true,
				dataType: 'json',
				success: (data) => {
					console.log(data)
					if(typeof data.b2 == 'undefined'){
						this.lineChart(data.b1,[],data.a,type,this.countcitylist)
					}
					else{
						this.lineChart(data.b1,data.b2,data.a,type,this.countcitylist)
					}
					
				}
			})
		},
		handleRadarService(){
			let indicator = []
			let radarData = []
			let seriesData = []
			//created indicator
			// for(let i = 0;i<this.radarList.length;i++){
			// 	indicator.push({name:this.radarList[i]})
			// }
			// for(let i = 0;i<this.radarList.length;i++){
			// 	indicator[i].max = 50
			// }
			
			// TODO created series series[0].data = [{ name;"",value:[]}]
			this.radarParams.typeList =JSON.stringify(this.radarList)
			this.loading = true
			let url = '/api/v1/data/policy/fd768b07bcbc10bba820bd49f50a5390'
			if (this.activeName == 'first'){
				url = '/api/v1/data/policy/8d9f3c227257e3747e81d3b7432d37ef'
			}
			else if (this.activeName == 'third'){
				url = '/api/v1/data/policy/862a2d10861c02411bc87acd060bae86'
			}
			else{
				url = '/api/v1/data/policy/fd768b07bcbc10bba820bd49f50a5390'
			}
			$.ajax({
				type: 'GET',
				data: this.radarParams,
				xhrFields: {
					withCredentials: true
				},
				url: 'http://210.14.118.96/'+url,
				crossDomain: true,
				async: true,
				dataType: 'json',
				success: (data) => {
					console.log('radar data',data)
					radarData = data.dataList
					let values1 = []
					let values2 = []
					for(let i=0;i<radarData.length;i++){
						indicator.push({name:radarData[i].name,max:radarData[i].max})
						values1.push(radarData[i].value1)
						if(typeof radarData[i].value2 != 'undefined'){
							values2.push(radarData[i].value2)
						}
					}
					seriesData.push({value:values1,name:this.countcitylist[0]})
					if (this.countcitylist.length > 1){
						seriesData.push({value:values2,name:this.countcitylist[1]})
					}
					this.indicator = indicator
					console.log('indicator',indicator)
					console.log('seris',seriesData)
					this.radarService('',seriesData,indicator)
					this.loading = false
				}
			});
		},
		handleCheckedCitiesChange(value) {
			this.countcitylist = value
			this.radarParams.cityList = JSON.stringify(value)
			this.handleRadarService()
		},
		handleClick(tab) {
			this.handleRadarService()
		},
		//点击开始对比
		clickButton() {
			if (this.selectArea.length == 1) {

				$.ajax('./json/政策.json', {
					dataType: 'json',//服务器返回json格式数据
					type: 'get',//HTTP请求类型
					timeout: 10000,//超时时间设置为10秒；
					success: (data) => {
						let chartData = data.chartData
						let arr = []
						arr.push(chartData[this.selectArea[0]])
						this.randarChart1Init(this.selectArea[0], arr)

						let chartData1 = data.chartData1
						let arr1 = []
						arr1.push(chartData1[this.selectArea[0]])
						this.randarChart1Init1(this.selectArea[0], arr1)
					},
					error: function (xhr, type, errorThrown) {
						console.log('请求失败')
					}
				});


				//请求省全部政策
				let arr5 = []
				function func(arr, arr1) {
					for (let i = 0; i < arr.length; i++) {
						arr1.push(arr[i])
					}
				}
				func(this.typeSelectData1, arr5)
				func(this.typeSelectData2, arr5)
				func(this.typeSelectData3, arr5)
				let url = "http://210.14.118.96/api/v1/data/policy/ac8d658f03e7c1108198cae4b43b930a?token=01311272-ae3c-4b64-b615-42cb850b9385"
				$.ajax({
					type: 'GET',
					data: {
						province: JSON.stringify(this.selectArea),
						"政策类型": JSON.stringify(this.selectCategory),
						"服务类型": JSON.stringify(arr5),
						pageNum: JSON.stringify([1])
					},
					xhrFields: {
						withCredentials: true
					},
					url: url,
					crossDomain: true,
					async: true,
					dataType: 'json',
					success: (data) => {
						this.tableData = data.retList
						this.total1 = data.total_num
						this.currentPage1 = 1
					}
				})
			} else if (this.selectArea.length == 2) {
				if (this.isClick) {
					this.isClick = false
					this.isShowAllPolicy = false
					this.$nextTick(() => {
						let height = $(".content3").height()
						$(".content3>div").height(height)
						$('.content3Div').height(height)
						$.ajax('./json/政策.json', {
							dataType: 'json',//服务器返回json格式数据
							type: 'get',//HTTP请求类型
							timeout: 10000,//超时时间设置为10秒；
							success: (data) => {
								let chartData = data.chartData
								let arr = []
								arr.push(chartData[this.selectArea[0]])
								arr.push(chartData[this.selectArea[1]])
								this.randarChart1Init(null, arr)

								let chartData1 = data.chartData1
								let arr1 = []
								arr1.push(chartData1[this.selectArea[0]])
								arr1.push(chartData1[this.selectArea[1]])
								this.randarChart1Init1(null, arr1)
							},
							error: function (xhr, type, errorThrown) {
								console.log('请求失败')
							}
						});

						let arr5 = []
						function func(arr, arr1) {
							for (let i = 0; i < arr.length; i++) {
								arr1.push(arr[i])
							}
						}
						func(this.typeSelectData1, arr5)
						func(this.typeSelectData2, arr5)
						func(this.typeSelectData3, arr5)
						let url = "http://210.14.118.96/api/v1/data/policy/ac8d658f03e7c1108198cae4b43b930a?token=01311272-ae3c-4b64-b615-42cb850b9385"
						$.ajax({
							type: 'GET',
							data: {
								province: JSON.stringify(this.selectArea),
								"政策类型": JSON.stringify(this.selectCategory),
								"服务类型": JSON.stringify(arr5),
								pageNum: JSON.stringify([1, 1])
							},
							xhrFields: {
								withCredentials: true
							},
							url: url,
							crossDomain: true,
							async: true,
							dataType: 'json',
							success: (data) => {
								this.content3Data = data
								this.total2 = data.total_num1
								this.total3 = data.total_num2
								this.currentPage2 = 1
								this.currentPage3 = 1
							}
						})
					})
				}
			} else {
				alert("请至少选择一项区域")
			}

		},
		//开始对比2
		clickButton1() {
			if (this.selectTalent.length != 0) {
				if (this.isClick1) {
					this.isClick1 = false
					this.isShowLinkContent = false
					this.$nextTick(() => {
						let height1 = $(".linkTableContentBox1").height()
						$(".linkTableContentBox1>span").height(height1)
						let height2 = $(".linkTableContentBox2").height()
						$(".linkTableContentBox2>span").height(height2)
						console.log(height2)
					})
				}
			} else {
				alert("请选择两项对比区域")
			}
		},
		selectLink(a) {
			if (a.target.className) {
				a.target.className = ""
			} else {
				if (this.selectTalent.length > 1) {
					alert("最多只能选择两个")
					return
				}
				a.target.className = "icon"
			}
			let nextInnerText = a.target.nextSibling.nextSibling.innerText
			if (this.selectTalent.indexOf(nextInnerText) == -1) {
				this.selectTalent.push(nextInnerText)
			} else {
				let index = this.selectTalent.indexOf(nextInnerText)
				this.selectTalent.splice(index, 1)
			}
		}
	}
})
