/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(7);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(60);

	var _src2 = _interopRequireDefault(_src);

	var _beeFormGroup = __webpack_require__(62);

	var _beeFormGroup2 = _interopRequireDefault(_beeFormGroup);

	var _beeControlLabel = __webpack_require__(64);

	var _beeControlLabel2 = _interopRequireDefault(_beeControlLabel);

	var _beeButton = __webpack_require__(66);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _beeFormControl = __webpack_require__(68);

	var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

	var _beeInputGroup = __webpack_require__(70);

	var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

	var _beeRadioGroup = __webpack_require__(76);

	var _beeRadioGroup2 = _interopRequireDefault(_beeRadioGroup);

	var _beeSelect = __webpack_require__(79);

	var _beeSelect2 = _interopRequireDefault(_beeSelect);

	var _beeCheckbox = __webpack_require__(112);

	var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

	var _beeIcon = __webpack_require__(114);

	var _beeIcon2 = _interopRequireDefault(_beeIcon);

	var _beeUpload = __webpack_require__(116);

	var _beeUpload2 = _interopRequireDefault(_beeUpload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowdown' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-chevronarrowup' });

	/**
	 * @title Checkbox
	 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
	 */
	var provinceData = ['Zhejiang', 'Jiangsu'];
	var cityData = {
		Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
		Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
	};
	var uploadprops = {
		action: '/upload.do',
		onChange: function onChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file);
				console.log(info.fileList);
			}
		},

		defaultFileList: [{
			uid: -1,
			name: 'xxx.png',
			status: 'done',
			url: 'http://www.baidu.com/xxx.png'
		}, {
			uid: -2,
			name: 'yyy.png',
			status: 'done',
			url: 'http://www.baidu.com/yyy.png'
		}]
	};

	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);

		function Demo1(props) {
			_classCallCheck(this, Demo1);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props));

			_this.state = {
				options: [],
				selectedSex: 'female',
				cities: cityData[provinceData[0]],
				secondCity: cityData[provinceData[0]][0]
			};
			_this.handleProvinceChange = _this.handleProvinceChange.bind(_this);
			_this.onSecondCityChange = _this.onSecondCityChange.bind(_this);
			_this.ChangeMail = _this.ChangeMail.bind(_this);
			return _this;
		}

		Demo1.prototype.ChangeMail = function ChangeMail(value) {
			var options = void 0;
			if (!value || value.indexOf('@') >= 0) {
				options = [];
			} else {
				options = ['gmail.com', '163.com', 'qq.com'].map(function (domain) {
					var email = value + '@' + domain;
					return _react2['default'].createElement(
						Option,
						{ key: email },
						email
					);
				});
			}
			this.setState({ options: options });
		};

		Demo1.prototype.ChangeSex = function ChangeSex(value) {
			this.setState({ selectedSex: value });
		};

		Demo1.prototype.handleProvinceChange = function handleProvinceChange(value) {
			this.setState({
				cities: cityData[value],
				secondCity: cityData[value][0]
			});
		};

		Demo1.prototype.onSecondCityChange = function onSecondCityChange(value) {
			this.setState({
				secondCity: value
			});
		};

		Demo1.prototype.render = function render() {
			var provinceOptions = provinceData.map(function (province) {
				return _react2['default'].createElement(
					Option,
					{ key: province },
					province
				);
			});
			var cityOptions = this.state.cities.map(function (city) {
				return _react2['default'].createElement(
					Option,
					{ key: city },
					city
				);
			});
			return _react2['default'].createElement(
				_src2['default'],
				{ horizontal: true },
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineName' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u59D3\u540D:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(_beeFormControl2['default'], { htmlType: 'text', placeholder: 'Jane Doe' })
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineSex' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u59D3\u522B:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeRadioGroup2['default'],
								{
									name: 'sex',
									selectedValue: this.state.selectedSex,
									onChange: this.ChangeSex.bind(this) },
								_react2['default'].createElement(
									_beeRadioGroup2['default'].Radio,
									{ colors: 'dark', value: 'female' },
									'female'
								),
								_react2['default'].createElement(
									_beeRadioGroup2['default'].Radio,
									{ colors: 'dark', value: 'male' },
									'male'
								)
							)
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineMoney' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u9996\u4ED8\u6B3E:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeInputGroup2['default'],
								null,
								_react2['default'].createElement(
									_beeInputGroup2['default'].Addon,
									null,
									'\uFFE5'
								),
								_react2['default'].createElement(_beeFormControl2['default'], { type: 'text' }),
								_react2['default'].createElement(
									_beeInputGroup2['default'].Addon,
									null,
									'.00'
								)
							)
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineSex' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u4F4F\u5740:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeSelect2['default'],
								{ defaultValue: provinceData[0], style: { width: 90 }, onChange: this.handleProvinceChange },
								provinceOptions
							),
							_react2['default'].createElement(
								_beeSelect2['default'],
								{ value: this.state.secondCity, style: { width: 90 }, onChange: this.onSecondCityChange },
								cityOptions
							)
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineSex' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u6807\u7B7E:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeInputGroup2['default'],
								null,
								_react2['default'].createElement(
									_beeInputGroup2['default'].Addon,
									{ style: { paddingBottom: 0 } },
									_react2['default'].createElement(_beeCheckbox2['default'], { style: { marginTop: 4 } })
								),
								_react2['default'].createElement(_beeFormControl2['default'], { type: 'text' }),
								_react2['default'].createElement(
									_beeInputGroup2['default'].Addon,
									null,
									'.00'
								)
							)
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineSex' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u90AE\u4EF6:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeSelect2['default'],
								{ combobox: true,
									onChange: this.ChangeMail,
									filterOption: false,
									placeholder: 'Enter the account name'
								},
								this.state.options
							)
						)
					)
				),
				_react2['default'].createElement(
					_beeLayout.Row,
					null,
					_react2['default'].createElement(
						_beeFormGroup2['default'],
						{ controlId: 'formInlineSex' },
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 1, className: 'text-right' },
							_react2['default'].createElement(
								_beeControlLabel2['default'],
								null,
								'\u6807\u7B7E:'
							)
						),
						_react2['default'].createElement(
							_beeLayout.Col,
							{ md: 5 },
							_react2['default'].createElement(
								_beeUpload2['default'],
								uploadprops,
								_react2['default'].createElement(
									_beeButton2['default'],
									{ shape: 'border' },
									_react2['default'].createElement(_beeIcon2['default'], { type: 'upload' }),
									' Click to Upload'
								)
							)
						)
					)
				)
			);
		};

		return Demo1;
	}(_react.Component);

	var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Checkbox", "code": "/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n const provinceData = ['Zhejiang', 'Jiangsu'];\nconst cityData = {\n  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],\n  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],\n};\nconst uploadprops = {\n  action: '/upload.do',\n  onChange(info) {\n    if (info.file.status !== 'uploading') {\n      console.log(info.file);\n      console.log(info.fileList);\n    }\n  },\n  defaultFileList: [{\n    uid: -1,\n    name: 'xxx.png',\n    status: 'done',\n    url: 'http://www.baidu.com/xxx.png',\n  }, {\n    uid: -2,\n    name: 'yyy.png',\n    status: 'done',\n    url: 'http://www.baidu.com/yyy.png',\n  }],\n};\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t  \tsuper(props);\n\t  \tthis.state = {\n\t  \t\toptions: [],\n\t    \tselectedSex: 'female',\n\t    \tcities: cityData[provinceData[0]],\n      \t\tsecondCity: cityData[provinceData[0]][0]\n\t    };\n\t    this.handleProvinceChange = this.handleProvinceChange.bind(this);\n\t\tthis.onSecondCityChange = this.onSecondCityChange.bind(this);\n\t\tthis.ChangeMail = this.ChangeMail.bind(this);\n\t}\n\tChangeMail(value) {\n\t    let options;\n\t    if (!value || value.indexOf('@') >= 0) {\n\t      options = [];\n\t    } else {\n\t      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\n\t        const email = `${value}@${domain}`;\n\t        return <Option key={email}>{email}</Option>;\n\t      });\n\t    }\n\t    this.setState({ options });\n\t}\n\tChangeSex(value) {\n\t    this.setState({selectedSex: value});\n\t}\n\thandleProvinceChange(value) {\n\t    this.setState({\n\t      cities: cityData[value],\n\t      secondCity: cityData[value][0],\n\t    });\n\t}\n\tonSecondCityChange(value) {\n\t    this.setState({\n\t      secondCity: value,\n\t    });\n\t}\n\trender () {\n\t\tconst provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\n\t    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\n\t\treturn (\n\t\t\t<Form horizontal>\n\t\t\t\t<Row>\n\t\t\t\t    <FormGroup controlId=\"formInlineName\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>姓名:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<FormControl htmlType=\"text\" placeholder=\"Jane Doe\" />\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t\t    <FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>姓别:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<RadioGroup\n\t\t\t\t\t\t        name=\"sex\"\n\t\t\t\t\t\t        selectedValue={this.state.selectedSex}\n\t\t\t\t\t\t        onChange={this.ChangeSex.bind(this)}>\n\t\t\t\t\t\t          <RadioGroup.Radio colors=\"dark\" value=\"female\" >female</RadioGroup.Radio>\n\t\t\t\t\t\t          <RadioGroup.Radio colors=\"dark\" value=\"male\" >male</RadioGroup.Radio>\n\t\t\t\t\t\t      </RadioGroup>\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineMoney\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>首付款:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<InputGroup>\n\t\t\t\t\t\t \t\t<InputGroup.Addon>￥</InputGroup.Addon>\n\t\t\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t\t    </InputGroup>\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>住址:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>\n\t\t\t\t\t          {provinceOptions}\n\t\t\t\t\t        </Select>\n\t\t\t\t\t        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>\n\t\t\t\t\t          {cityOptions}\n\t\t\t\t\t        </Select>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>标签:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<InputGroup>\n\t\t\t\t\t\t \t\t<InputGroup.Addon style={{paddingBottom: 0}}><Checkbox style={{marginTop:4}}></Checkbox></InputGroup.Addon>\n\t\t\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t\t    </InputGroup>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>邮件:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Select combobox\n\t\t\t\t\t\t        onChange={this.ChangeMail}\n\t\t\t\t\t\t        filterOption={false}\n\t\t\t\t\t\t        placeholder=\"Enter the account name\"\n\t\t\t\t\t\t      >\n\t\t\t\t\t\t        {this.state.options}\n\t\t\t\t\t\t      </Select>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>标签:</ControlLabel>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Upload {...uploadprops}>\n\t\t\t\t\t\t        <Button shape=\"border\">\n\t\t\t\t\t\t          <Icon type=\"upload\" /> Click to Upload\n\t\t\t\t\t\t        </Button>\n\t\t\t\t\t\t    </Upload>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t</Form>\t\n\t\t)\n\t}\n}\n", "desc": " `checked` 参数设置是否选中，`disabled`设置是否可用。" }];

	var Demo = function (_Component2) {
		_inherits(Demo, _Component2);

		function Demo(props) {
			_classCallCheck(this, Demo);

			var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

			_this2.state = {
				open: false
			};
			_this2.handleClick = _this2.handleClick.bind(_this2);
			return _this2;
		}

		Demo.prototype.handleClick = function handleClick() {
			this.setState({ open: !this.state.open });
		};

		Demo.prototype.render = function render() {
			var _props = this.props,
			    title = _props.title,
			    example = _props.example,
			    code = _props.code,
			    desc = _props.desc;

			var caret = this.state.open ? CARETUP : CARET;
			var text = this.state.open ? "隐藏代码" : "查看代码";

			var footer = _react2['default'].createElement(
				_beeButton2['default'],
				{ shape: 'block', onClick: this.handleClick },
				caret,
				text
			);
			return _react2['default'].createElement(
				_beeLayout.Col,
				{ md: 12 },
				_react2['default'].createElement(
					'h3',
					null,
					title
				),
				_react2['default'].createElement(
					'p',
					null,
					desc
				),
				_react2['default'].createElement(
					_beePanel.Panel,
					{ collapsible: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0, borderColor: "transparent" } },
					_react2['default'].createElement(
						'pre',
						null,
						_react2['default'].createElement(
							'code',
							{ className: 'hljs javascript' },
							code
						)
					)
				)
			);
		};

		return Demo;
	}(_react.Component);

	var DemoGroup = function (_Component3) {
		_inherits(DemoGroup, _Component3);

		function DemoGroup(props) {
			_classCallCheck(this, DemoGroup);

			return _possibleConstructorReturn(this, _Component3.call(this, props));
		}

		DemoGroup.prototype.render = function render() {
			return _react2['default'].createElement(
				_beeLayout.Row,
				null,
				DemoArray.map(function (child, index) {

					return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
				})
			);
		};

		return DemoGroup;
	}(_react.Component);

		_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;

	var _Col2 = __webpack_require__(2);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Row2 = __webpack_require__(5);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),

	  /**
	   * xs显示列数
	   */
	  xs: _react.PropTypes.number,
	  /**
	   * sm显示列数
	   */
	  sm: _react.PropTypes.number,
	  /**
	   * md显示列数
	   */
	  md: _react.PropTypes.number,
	  /**
	   * lg显示列数
	   */
	  lg: _react.PropTypes.number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _react.PropTypes.number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _react.PropTypes.number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _react.PropTypes.number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _react.PropTypes.number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _react.PropTypes.number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _react.PropTypes.number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _react.PropTypes.number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _react.PropTypes.number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _react.PropTypes.number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _react.PropTypes.number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _react.PropTypes.number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _react.PropTypes.number
	};

	var defaultProps = {
	  componentClass: 'div'
	};

	var clsPrefix = 'u-col';

	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

	var Col = function (_Component) {
	  _inherits(Col, _Component);

	  function Col() {
	    _classCallCheck(this, Col);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className']);

	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];

	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }

	        delete others[propName];
	      }

	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });

	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };

	  return Col;
	}(_react.Component);

	Col.propTypes = propTypes;
	Col.defaultProps = defaultProps;

	exports["default"] = Col;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div'
	};

	var clsPrefix = 'u-row';

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className']);

	    var bsclass = '' + clsPrefix;

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Row;
	}(_react.Component);

	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;

	exports["default"] = Row;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _react.PropTypes.bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  fluid: false
	};

	var clsPrefix = 'u-container';

	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);

	  function Con() {
	    _classCallCheck(this, Con);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Con.prototype.render = function render() {
	    var _tbclass;

	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'className']);

	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Con;
	}(_react2["default"].Component);

	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;

	exports["default"] = Con;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(8);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(59);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeTransition = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否添加折叠
	  collapsible: _react2["default"].PropTypes.bool,
	  onSelect: _react2["default"].PropTypes.func,
	  //头部组件
	  header: _react2["default"].PropTypes.node,
	  headerStyle: _react2["default"].PropTypes.object,
	  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  headerContent: _react2["default"].PropTypes.bool,
	  //footer组件
	  footer: _react2["default"].PropTypes.node,
	  footerStyle: _react2["default"].PropTypes.object,
	  //默认是否打开
	  defaultExpanded: _react2["default"].PropTypes.bool,
	  //是否打开
	  expanded: _react2["default"].PropTypes.bool,
	  //每个panel的标记
	  eventKey: _react2["default"].PropTypes.any,
	  headerRole: _react2["default"].PropTypes.string,
	  panelRole: _react2["default"].PropTypes.string,
	  //颜色
	  colors: _react2["default"].PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),

	  // From Collapse.的扩展动画
	  onEnter: _react2["default"].PropTypes.func,
	  onEntering: _react2["default"].PropTypes.func,
	  onEntered: _react2["default"].PropTypes.func,
	  onExit: _react2["default"].PropTypes.func,
	  onExiting: _react2["default"].PropTypes.func,
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel(props, context) {
	    _classCallCheck(this, Panel);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);

	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }

	  //头部点击事件


	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };

	  //渲染panelheader


	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';

	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }

	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };

	  //如果使用链接，渲染为a标签


	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        onClick: this.handleClickTitle,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };

	  //如果有折叠动画，渲染折叠动画


	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix)
	      )
	    );
	  };

	  //渲染panelbody


	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix) {
	    var children = [];
	    var bodyChildren = [];

	    var bodyClassName = clsPrefix + '-body';

	    //添加到body的children中
	    function maybeAddBody() {
	      if (!bodyChildren.length) {
	        return;
	      }

	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren
	      ));

	      bodyChildren = [];
	    }

	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody();

	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));

	        return;
	      }

	      bodyChildren.push(child);
	    });

	    maybeAddBody();

	    return children;
	  };

	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-heading', style: headerStyle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };

	  return Panel;
	}(_react2["default"].Component);

	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;

	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(10);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(15);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(58);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(12);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(14);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var transitionEndEvent = _properties2["default"].end;

	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _react.PropTypes.bool,

	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _react.PropTypes.bool,

	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _react.PropTypes.bool,

	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _react.PropTypes.number,

	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _react.PropTypes.string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _react.PropTypes.string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _react.PropTypes.string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _react.PropTypes.string,

	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _react.PropTypes.func
	};

	function noop() {}

	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	/**
	 * 动画组件
	 */

	var Transition = function (_Component) {
	  _inherits(Transition, _Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };

	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };

	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;

	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }

	      return;
	    }

	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;

	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };

	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    // 这里接收新props
	    props.onEnter(node);

	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);

	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    props.onExit(node);

	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };

	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;

	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);

	    if (node) {
	      (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };

	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;

	    var childProps = _objectWithoutProperties(_props, ['children', 'className']);

	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });

	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }

	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };

	  return Transition;
	}(_react.Component);

	Transition.propTypes = propTypes;

	Transition.defaultProps = defaultProps;

	exports["default"] = Transition;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return 'moz' + e;
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) transitionEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(16);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _capitalize = __webpack_require__(24);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}

	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];

	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}

	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2["default"].PropTypes.func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(['height', 'width']), _react2["default"].PropTypes.func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2["default"].PropTypes.func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,

	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};

	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);

	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }

	  /* -- Expanding -- */


	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };

	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };

	  /* -- Collapsing -- */


	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };

	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };

	  // for testing


	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };

	  Collapse.prototype.render = function render() {
	    var _props = this.props;
	    var onEnter = _props.onEnter;
	    var onEntering = _props.onEntering;
	    var onEntered = _props.onEntered;
	    var onExit = _props.onExit;
	    var onExiting = _props.onExiting;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);

	    delete props.dimension;
	    delete props.getDimensionValue;

	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);

	    var classes = {
	      width: this._dimension() === 'width'
	    };

	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };

	  return Collapse;
	}(_react2["default"].Component);

	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;

	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(19);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(21);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(22);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(12);

	var _isTransform = __webpack_require__(23);

	var _isTransform2 = _interopRequireDefault(_isTransform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;

	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }

	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });

	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }

	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(18);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;

	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(20);

	var _hyphenate2 = _interopRequireDefault(_hyphenate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */

	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;

	var rUpper = /([A-Z])/g;

	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _camelizeStyle2.default)(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

	var _all2 = __webpack_require__(26);

	var _all3 = _interopRequireDefault(_all2);

	var _componentOrElement2 = __webpack_require__(28);

	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);

	var _deprecated2 = __webpack_require__(29);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	var _elementType2 = __webpack_require__(32);

	var _elementType3 = _interopRequireDefault(_elementType2);

	var _isRequiredForA11y2 = __webpack_require__(33);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	var _splitComponent2 = __webpack_require__(34);

	var _splitComponent3 = _interopRequireDefault(_splitComponent2);

	var _createChainedFunction2 = __webpack_require__(35);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(36);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(37);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(38);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(43);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(47);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(48);

	var _Align3 = _interopRequireDefault(_Align2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';

	exports.Align = _Align3.default;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = all;

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }

	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var error = null;

	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }

	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });

	    return error;
	  }

	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Mostly taken from ReactPropTypes.

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }

	      return null;
	    }

	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }

	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }

	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = deprecated;

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;

	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

	      warned[messageKey] = true;
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}

	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },
/* 31 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;

	  var parentProps = {};
	  var childProps = {};

	  Object.entries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];

	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });

	  return [parentProps, childProps];
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(39);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventObject = __webpack_require__(40);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventBaseObject = __webpack_require__(41);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(42);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(44);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(45);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports.default = cssAnimation;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports.default = TransitionEvents;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(46);
	} catch (err) {
	  var index = __webpack_require__(46);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = toArray;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(49);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(38);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import isWindow from './isWindow';

	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2.default.createClass({
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports.default = Align;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(53);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(54);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(55);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(56);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(51);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(57);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};

	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);

	  function Fade() {
	    _classCallCheck(this, Fade);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };

	  return Fade;
	}(_react2["default"].Component);

	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;

	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否是手风琴效果
	  accordion: _react2["default"].PropTypes.bool,
	  //激活的项
	  activeKey: _react2["default"].PropTypes.any,
	  //默认的激活的项
	  defaultActiveKey: _react2["default"].PropTypes.any,
	  //选中函数
	  onSelect: _react2["default"].PropTypes.func,
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};

	// TODO: Use uncontrollable.

	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);

	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleSelect = _this.handleSelect.bind(_this);

	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }

	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({ activeKey: key });
	  };

	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);

	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }

	    var classes = {};
	    classes['' + clsPrefix] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };

	        if (accordion) {
	          Object.assign(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }

	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };

	  return PanelGroup;
	}(_react2["default"].Component);

	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;

	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(61);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _Form2['default'];
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  horizontal: _react.PropTypes.bool,
	  inline: _react.PropTypes.bool,
	  componentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
	};

	var defaultProps = {
	  horizontal: false,
	  inline: false,
	  componentClass: 'form',
	  clsPrefix: 'u-form'
	};

	var Form = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Form.prototype.render = function render() {
	    var _props = this.props,
	        horizontal = _props.horizontal,
	        inline = _props.inline,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['horizontal', 'inline', 'componentClass', 'className', 'clsPrefix']);

	    var classes = {};

	    if (inline) {
	      classes[clsPrefix + '-inline'] = true;
	    }
	    if (horizontal) {
	      classes[clsPrefix + '-horizontal'] = true;
	    }

	    var classnames = (0, _classnames2['default'])(classes, clsPrefix);
	    return _react2['default'].createElement(Component, _extends({}, others, {
	      className: (0, _classnames2['default'])(className, classnames)
	    }));
	  };

	  return Form;
	}(_react2['default'].Component);

	Form.propTypes = propTypes;
	Form.defaultProps = defaultProps;

	exports['default'] = Form;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormGroup = __webpack_require__(63);

	var _FormGroup2 = _interopRequireDefault(_FormGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _FormGroup2["default"];
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
					validationState: _react.PropTypes.oneOf(['success', 'warning', 'error'])
	};
	var defaultProps = {
					clsPrefix: 'u-form-group'
	};

	var FormGroup = function (_React$Component) {
					_inherits(FormGroup, _React$Component);

					function FormGroup(props) {
									_classCallCheck(this, FormGroup);

									return _possibleConstructorReturn(this, _React$Component.call(this, props));
					}

					FormGroup.prototype.render = function render() {
									var _props = this.props;
									var validationState = _props.validationState;
									var className = _props.className;
									var children = _props.children;
									var clsPrefix = _props.clsPrefix;

									var others = _objectWithoutProperties(_props, ['validationState', 'className', 'children', 'clsPrefix']);

									var classes = {};

									if (validationState) {
													classes['has-' + validationState] = true;
									}

									var classNames = (0, _classnames2["default"])(clsPrefix, classes);

									return _react2["default"].createElement(
													'div',
													_extends({}, others, {
																	className: (0, _classnames2["default"])(className, classNames)
													}),
													children
									);
					};

					return FormGroup;
	}(_react2["default"].Component);

	FormGroup.propTypes = propTypes;
	FormGroup.defaultProps = defaultProps;

	exports["default"] = FormGroup;
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ControlLabel = __webpack_require__(65);

	var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _ControlLabel2["default"];
	module.exports = exports['default'];

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-control-label'
	};

	var ControlLabel = function (_Component) {
	  _inherits(ControlLabel, _Component);

	  function ControlLabel() {
	    _classCallCheck(this, ControlLabel);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  ControlLabel.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var children = _props.children;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'children', 'clsPrefix']);

	    var classes = {};

	    var classNames = (0, _classnames2["default"])(clsPrefix, classes);

	    return _react2["default"].createElement(
	      'label',
	      _extends({}, others, {
	        className: classNames
	      }),
	      children
	    );
	  };

	  return ControlLabel;
	}(_react.Component);

	ControlLabel.defaultProps = defaultProps;

	exports["default"] = ControlLabel;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(67);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border', 'icon']),
	    /**
	    * @title 类型
	    */
	    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button'

	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormControl = __webpack_require__(69);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _FormControl2["default"];
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	  type: _react.PropTypes.string,
	  id: _react.PropTypes.string
	};

	var defaultProps = {
	  componentClass: 'input',
	  clsPrefix: 'u-form-control',
	  type: 'text'
	};

	var FormControl = function (_React$Component) {
	  _inherits(FormControl, _React$Component);

	  function FormControl() {
	    _classCallCheck(this, FormControl);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  FormControl.prototype.render = function render() {
	    var formGroup = this.context.$bs_formGroup;
	    var controlId = formGroup && formGroup.controlId;

	    var _props = this.props;
	    var Component = _props.componentClass;
	    var type = _props.type;
	    var _props$id = _props.id;
	    var id = _props$id === undefined ? controlId : _props$id;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['componentClass', 'type', 'id', 'className', 'clsPrefix']);

	    (0, _warning2["default"])(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.');

	    // input[type="file"] 不应该有类名 .form-control.
	    var classes = {};
	    var classNames = void 0;
	    if (type !== 'file') {
	      classNames = (0, _classnames2["default"])(clsPrefix, classes);
	    }

	    return _react2["default"].createElement(Component, _extends({}, others, {
	      type: type,
	      id: id,
	      className: (0, _classnames2["default"])(className, classNames)
	    }));
	  };

	  return FormControl;
	}(_react2["default"].Component);

	FormControl.propTypes = propTypes;
	FormControl.defaultProps = defaultProps;

	exports["default"] = FormControl;
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(71);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeInputGroupAddon = __webpack_require__(72);

	var _beeInputGroupAddon2 = _interopRequireDefault(_beeInputGroupAddon);

	var _beeInputGroupButton = __webpack_require__(74);

	var _beeInputGroupButton2 = _interopRequireDefault(_beeInputGroupButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group'
	};

	var InputGroup = function (_React$Component) {
	  _inherits(InputGroup, _React$Component);

	  function InputGroup() {
	    _classCallCheck(this, InputGroup);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroup.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroup;
	}(_react2["default"].Component);

	/**
	  * 将InputGroupAddon与InputGroupButton组件作为InputGroup的附属组件
	  */


	InputGroup.Addon = _beeInputGroupAddon2["default"];
	InputGroup.Button = _beeInputGroupButton2["default"];
	InputGroup.defaultProps = defaultProps;
	exports["default"] = InputGroup;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InputGroupAddon = __webpack_require__(73);

	var _InputGroupAddon2 = _interopRequireDefault(_InputGroupAddon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _InputGroupAddon2["default"];
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group-addon'
	};

	var InputGroupAddon = function (_React$Component) {
	  _inherits(InputGroupAddon, _React$Component);

	  function InputGroupAddon() {
	    _classCallCheck(this, InputGroupAddon);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroupAddon.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroupAddon;
	}(_react2["default"].Component);

	InputGroupAddon.defaultProps = defaultProps;
	exports["default"] = InputGroupAddon;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _InputGroupButton = __webpack_require__(75);

	var _InputGroupButton2 = _interopRequireDefault(_InputGroupButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _InputGroupButton2["default"];
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultProps = {
	  clsPrefix: 'u-input-group-btn'
	};

	var InputGroupButton = function (_React$Component) {
	  _inherits(InputGroupButton, _React$Component);

	  function InputGroupButton() {
	    _classCallCheck(this, InputGroupButton);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  InputGroupButton.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['className', 'clsPrefix']);

	    return _react2["default"].createElement('span', _extends({}, others, {
	      className: (0, _classnames2["default"])(className, clsPrefix)
	    }));
	  };

	  return InputGroupButton;
	}(_react2["default"].Component);

	InputGroupButton.defaultProps = defaultProps;
	exports["default"] = InputGroupButton;
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _RadioGroup = __webpack_require__(77);

	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _RadioGroup2["default"];
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Radio = __webpack_require__(78);

	var _Radio2 = _interopRequireDefault(_Radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  name: _react.PropTypes.string,
	  /**
	   * 选中的值
	   */
	  selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
	  /**
	  * 暴露给用户，且与子Radio通信的方法
	  */
	  onChange: _react.PropTypes.func,

	  children: _react.PropTypes.node.isRequired,

	  Component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.object])
	};

	var defaultProps = {
	  Component: 'div'
	};

	/**
	 * 与子Radio通信
	 */
	var childContextTypes = {
	  radioGroup: _react2["default"].PropTypes.object
	};

	var RadioGroup = function (_React$Component) {
	  _inherits(RadioGroup, _React$Component);

	  function RadioGroup(props, context) {
	    _classCallCheck(this, RadioGroup);

	    return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	  }

	  /**
	    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
	    */

	  RadioGroup.prototype.getChildContext = function getChildContext() {
	    var _props = this.props;
	    var name = _props.name;
	    var selectedValue = _props.selectedValue;
	    var onChange = _props.onChange;

	    return {
	      radioGroup: {
	        name: name, selectedValue: selectedValue, onChange: onChange
	      }
	    };
	  };

	  RadioGroup.prototype.render = function render() {
	    var _props2 = this.props;
	    var Component = _props2.Component;
	    var name = _props2.name;
	    var selectedValue = _props2.selectedValue;
	    var onChange = _props2.onChange;
	    var children = _props2.children;

	    var others = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

	    return _react2["default"].createElement(
	      Component,
	      others,
	      children
	    );
	  };

	  return RadioGroup;
	}(_react2["default"].Component);

	RadioGroup.childContextTypes = childContextTypes;
	RadioGroup.propTypes = propTypes;
	RadioGroup.defaultProps = defaultProps;
	RadioGroup.Radio = _Radio2["default"];
	exports["default"] = RadioGroup;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	    * radio 颜色 样式
	    */
	  colors: _react2["default"].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),
	  /**
	    * radio 是否可用
	    */
	  disabled: _react2["default"].PropTypes.bool
	};

	var defaultProps = {
	  active: false,
	  disabled: false,
	  clsPrefix: 'u-radio'
	};

	/**
	 * 建立与RadioGroup通信
	 */
	var contextTypes = {
	  radioGroup: _react2["default"].PropTypes.object
	};

	var Radio = function (_React$Component) {
	  _inherits(Radio, _React$Component);

	  function Radio(props, context) {
	    _classCallCheck(this, Radio);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClick = _this.handleClick.bind(_this);

	    return _this;
	  }

	  Radio.prototype.handleClick = function handleClick(event) {
	    var onChange = this.context.radioGroup.onChange;


	    if (this.props.disabled) {
	      return;
	    }

	    if (onChange) {
	      onChange(this.props.value);
	    }
	  };

	  Radio.prototype.render = function render() {
	    var _context$radioGroup = this.context.radioGroup;
	    var name = _context$radioGroup.name;
	    var selectedValue = _context$radioGroup.selectedValue;
	    /**
	     * 自身的属性
	     */

	    var _props = this.props;
	    var disabled = _props.disabled;
	    var colors = _props.colors;
	    var className = _props.className;
	    var children = _props.children;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'className', 'children', 'clsPrefix']);

	    var optional = {};
	    /**
	     * 若父级selectedValue与本身的value值相同，则改radio被选中
	     */
	    if (selectedValue !== undefined) {
	      optional.checked = this.props.value === selectedValue;
	    }

	    var classes = {
	      'is-checked': optional.checked,
	      disabled: disabled
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }
	    var classNames = (0, _classnames2["default"])(clsPrefix, classes);
	    var input = _react2["default"].createElement('input', _extends({}, others, {
	      type: 'radio',
	      name: name,
	      disabled: this.props.disabled
	    }));
	    return _react2["default"].createElement(
	      'label',
	      { onClick: this.handleClick, className: (0, _classnames2["default"])(className, classNames) },
	      input,
	      _react2["default"].createElement(
	        'label',
	        { className: clsPrefix + '-label' },
	        children
	      )
	    );
	  };

	  return Radio;
	}(_react2["default"].Component);

	Radio.contextTypes = contextTypes;
	Radio.propTypes = propTypes;
	Radio.defaultProps = defaultProps;

	exports["default"] = Radio;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Select = __webpack_require__(80);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Select2["default"];
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(81);

	var _index2 = _interopRequireDefault(_index);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// => It is needless to export the declaration of below two inner components.
	// export { Option, OptGroup };
	var defaultProps = {
	  prefixCls: 'u-select',
	  showSearch: false,
	  transitionName: 'slide-up',
	  choiceTransitionName: 'zoom'
	};

	var propTypes = {
	  prefixCls: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['default', 'lg', 'sm']),
	  combobox: _react.PropTypes.bool,
	  notFoundContent: _react.PropTypes.any,
	  showSearch: _react.PropTypes.bool,
	  optionLabelProp: _react.PropTypes.string,
	  transitionName: _react.PropTypes.string,
	  choiceTransitionName: _react.PropTypes.string
	};

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  //static Option = Option as React.ClassicComponentClass<OptionProps>;
	  //static OptGroup = OptGroup as React.ClassicComponentClass<OptGroupProps>;

	  function Select(props) {
	    _classCallCheck(this, Select);

	    return _possibleConstructorReturn(this, _React$Component.call(this, props));
	  }

	  Select.prototype.render = function render() {
	    var _classNames;

	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var _props$className = _props.className;
	    var className = _props$className === undefined ? '' : _props$className;
	    var size = _props.size;
	    var combobox = _props.combobox;
	    var showSearch = _props.showSearch;
	    var _props2 = this.props;
	    var _props2$notFoundConte = _props2.notFoundContent;
	    var notFoundContent = _props2$notFoundConte === undefined ? 'Not Found' : _props2$notFoundConte;
	    var optionLabelProp = _props2.optionLabelProp;


	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'lg'), _defineProperty(_classNames, prefixCls + '-sm', size === 'sm'), _defineProperty(_classNames, prefixCls + '-show-search', showSearch), _classNames), className);

	    var antLocale = this.context.antLocale;

	    if (antLocale && antLocale.Select) {
	      notFoundContent = 'notFoundContent' in this.props ? notFoundContent : antLocale.Select.notFoundContent;
	    }

	    if (combobox) {
	      notFoundContent = null;
	      // children 带 dom 结构时，无法填入输入框
	      optionLabelProp = optionLabelProp || 'value';
	    }

	    return _react2["default"].createElement(_index2["default"], _extends({}, this.props, {
	      className: cls,
	      optionLabelProp: optionLabelProp || 'children',
	      notFoundContent: notFoundContent
	    }));
	  };

	  return Select;
	}(_react2["default"].Component);

	Select.propTypes = propTypes;
	Select.defaultProps = defaultProps;
	Select.Option = _index.Option;
	Select.OptGroup = _index.OptGroup;

	exports["default"] = Select;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OptGroup = exports.Option = undefined;

	var _RcSelect = __webpack_require__(82);

	var _RcSelect2 = _interopRequireDefault(_RcSelect);

	var _Option = __webpack_require__(111);

	var _Option2 = _interopRequireDefault(_Option);

	var _OptGroup = __webpack_require__(97);

	var _OptGroup2 = _interopRequireDefault(_OptGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	_RcSelect2["default"].Option = _Option2["default"];
	_RcSelect2["default"].OptGroup = _OptGroup2["default"];
	exports.Option = _Option2["default"];
	exports.OptGroup = _OptGroup2["default"];
	exports["default"] = _RcSelect2["default"];

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeMenus = __webpack_require__(83);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _tinperBeeCore = __webpack_require__(25);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _OptGroup = __webpack_require__(97);

	var _OptGroup2 = _interopRequireDefault(_OptGroup);

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	var _componentClasses = __webpack_require__(45);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	var _util = __webpack_require__(98);

	var _SelectTrigger = __webpack_require__(99);

	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	//import FilterMixin from './FilterMixin';

	function noop() {}

	function filterFn(input, child) {
	  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}

	function saveRef(name, component) {
	  this[name] = component;
	}

	var valueObjectShape = void 0;

	if (_react.PropTypes) {
	  valueObjectShape = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
	    key: _react.PropTypes.string,
	    label: _react.PropTypes.node
	  })]);
	}

	var propTypes = {
	  defaultActiveFirstOption: _react.PropTypes.bool,
	  multiple: _react.PropTypes.bool,
	  filterOption: _react.PropTypes.any,
	  children: _react.PropTypes.any,
	  showSearch: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  allowClear: _react.PropTypes.bool,
	  showArrow: _react.PropTypes.bool,
	  tags: _react.PropTypes.bool,
	  prefixCls: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  transitionName: _react.PropTypes.string,
	  optionLabelProp: _react.PropTypes.string,
	  optionFilterProp: _react.PropTypes.string,
	  animation: _react.PropTypes.string,
	  choiceTransitionName: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  onSearch: _react.PropTypes.func,
	  placeholder: _react.PropTypes.any,
	  onDeselect: _react.PropTypes.func,
	  labelInValue: _react.PropTypes.bool,
	  value: _react.PropTypes.oneOfType([valueObjectShape, _react.PropTypes.arrayOf(valueObjectShape)]),
	  defaultValue: _react.PropTypes.oneOfType([valueObjectShape, _react.PropTypes.arrayOf(valueObjectShape)]),
	  dropdownStyle: _react.PropTypes.object,
	  maxTagTextLength: _react.PropTypes.number,
	  tokenSeparators: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};

	var defaultProps = {
	  prefixCls: 'rc-select',
	  filterOption: filterFn,
	  defaultOpen: false,
	  labelInValue: false,
	  defaultActiveFirstOption: true,
	  showSearch: true,
	  allowClear: false,
	  placeholder: '',
	  defaultValue: [],
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onSelect: noop,
	  onSearch: noop,
	  onDeselect: noop,
	  showArrow: true,
	  dropdownMatchSelectWidth: true,
	  dropdownStyle: {},
	  dropdownMenuStyle: {},
	  optionFilterProp: 'value',
	  optionLabelProp: 'value',
	  notFoundContent: 'Not Found'
	};

	var RcSelect = function (_Component) {
	  _inherits(RcSelect, _Component);

	  //mixins: [FilterMixin],

	  function RcSelect(props) {
	    _classCallCheck(this, RcSelect);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    value = _this.addLabelToValue(props, value);
	    value = _this.addTitleToValue(props, value);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value.length ? String(value[0].key) : '';
	    }
	    _this.saveInputRef = saveRef.bind(_this, 'inputInstance');
	    _this.saveInputMirrorRef = saveRef.bind(_this, 'inputMirrorInstance');
	    var open = props.open;
	    if (open === undefined) {
	      open = props.defaultOpen;
	    }
	    _this.state = {
	      value: value,
	      inputValue: inputValue,
	      open: open
	    };

	    _this.filterOption = _this.filterOption.bind(_this);
	    _this.renderFilterOptions = _this.renderFilterOptions.bind(_this);
	    _this.renderFilterOptionsFromChildren = _this.renderFilterOptionsFromChildren.bind(_this);
	    _this.onInputChange = _this.onInputChange.bind(_this);
	    _this.onDropdownVisibleChange = _this.onDropdownVisibleChange.bind(_this);

	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
	    _this.onMenuSelect = _this.onMenuSelect.bind(_this);
	    _this.onMenuDeselect = _this.onMenuDeselect.bind(_this);
	    _this.onArrowClick = _this.onArrowClick.bind(_this);

	    _this.onPlaceholderClick = _this.onPlaceholderClick.bind(_this);
	    _this.onOuterFocus = _this.onOuterFocus.bind(_this);
	    _this.onPopupFocus = _this.onPopupFocus.bind(_this);
	    _this.onOuterBlur = _this.onOuterBlur.bind(_this);
	    _this.onClearSelection = _this.onClearSelection.bind(_this);

	    _this.onChoiceAnimationLeave = _this.onChoiceAnimationLeave.bind(_this);
	    _this.getLabelBySingleValue = _this.getLabelBySingleValue.bind(_this);
	    _this.getValueByLabel = _this.getValueByLabel.bind(_this);
	    _this.getLabelFromOption = _this.getLabelFromOption.bind(_this);
	    _this.getLabelFromProps = _this.getLabelFromProps.bind(_this);

	    _this.getVLForOnChange = _this.getVLForOnChange.bind(_this);
	    _this.getLabelByValue = _this.getLabelByValue.bind(_this);
	    _this.getDropdownContainer = _this.getDropdownContainer.bind(_this);
	    _this.getPlaceholderElement = _this.getPlaceholderElement.bind(_this);
	    _this.getInputElement = _this.getInputElement.bind(_this);

	    _this.getInputDOMNode = _this.getInputDOMNode.bind(_this);
	    _this.getInputMirrorDOMNode = _this.getInputMirrorDOMNode.bind(_this);
	    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
	    _this.getPopupMenuComponent = _this.getPopupMenuComponent.bind(_this);
	    _this.setOpenState = _this.setOpenState.bind(_this);

	    _this.setInputValue = _this.setInputValue.bind(_this);
	    _this.clearBlurTime = _this.clearBlurTime.bind(_this);
	    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
	    _this.clearAdjustTimer = _this.clearAdjustTimer.bind(_this);
	    _this.updateFocusClassName = _this.updateFocusClassName.bind(_this);

	    _this.maybeFocus = _this.maybeFocus.bind(_this);
	    _this.addLabelToValue = _this.addLabelToValue.bind(_this);
	    _this.addTitleToValue = _this.addTitleToValue.bind(_this);
	    _this.removeSelected = _this.removeSelected.bind(_this);
	    _this.openIfHasChildren = _this.openIfHasChildren.bind(_this);

	    _this.fireChange = _this.fireChange.bind(_this);
	    _this.isChildDisabled = _this.isChildDisabled.bind(_this);
	    _this.tokenize = _this.tokenize.bind(_this);
	    _this.adjustOpenState = _this.adjustOpenState.bind(_this);
	    _this.renderTopControlNode = _this.renderTopControlNode.bind(_this);

	    return _this;
	  }

	  RcSelect.prototype.componentWillMount = function componentWillMount() {
	    this.adjustOpenState();
	  };

	  RcSelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      value = this.addLabelToValue(nextProps, value);
	      value = this.addTitleToValue(nextProps, value);
	      this.setState({
	        value: value
	      });
	      if (nextProps.combobox) {
	        this.setState({
	          inputValue: value.length ? this.getLabelFromProps(nextProps, value[0].key) : ''
	        });
	      }
	    }
	  };

	  RcSelect.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
	    this.props = nextProps;
	    this.state = nextState;
	    this.adjustOpenState();
	  };

	  RcSelect.prototype.componentDidUpdate = function componentDidUpdate() {
	    var state = this.state;
	    var props = this.props;

	    if (state.open && (0, _util.isMultipleOrTags)(props)) {
	      var inputNode = this.getInputDOMNode();
	      var mirrorNode = this.getInputMirrorDOMNode();
	      if (inputNode.value) {
	        inputNode.style.width = '';
	        inputNode.style.width = mirrorNode.clientWidth + 'px';
	      } else {
	        inputNode.style.width = '';
	      }
	    }
	  };

	  RcSelect.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearBlurTime();
	    this.clearAdjustTimer();
	    if (this.dropdownContainer) {
	      _reactDom2["default"].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	  };

	  RcSelect.prototype.filterOption = function filterOption(input, child) {
	    if (!input) {
	      return true;
	    }
	    var filterOption = this.props.filterOption;
	    if (!filterOption) {
	      return true;
	    }
	    if (child.props.disabled) {
	      return false;
	    }
	    return filterOption.call(this, input, child);
	  };

	  RcSelect.prototype.renderFilterOptions = function renderFilterOptions(inputValue) {
	    return this.renderFilterOptionsFromChildren(this.props.children, true, inputValue);
	  };

	  RcSelect.prototype.renderFilterOptionsFromChildren = function renderFilterOptionsFromChildren(children, showNotFound, iv) {
	    var _this2 = this;

	    var sel = [];
	    var props = this.props;
	    var inputValue = iv === undefined ? this.state.inputValue : iv;
	    var childrenKeys = [];
	    var tags = props.tags;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, false);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2["default"].createElement(
	            _beeMenus.MenuItemGroup,
	            { key: key, title: label },
	            innerItems
	          ));
	        }
	        return;
	      }

	      // warning(
	      //   child.type === Option,
	      //   'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' +
	      //     `instead of \`${child.type.name || child.type.displayName || child.type}\`.`
	      // );

	      var childValue = (0, _util.getValuePropValue)(child);
	      if (_this2.filterOption(inputValue, child)) {
	        sel.push(_react2["default"].createElement(_beeMenus.MenuItem, _extends({
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          value: childValue,
	          key: childValue
	        }, child.props)));
	      }
	      if (tags && !child.props.disabled) {
	        childrenKeys.push(childValue);
	      }
	    });
	    if (tags) {
	      // tags value must be string
	      var value = this.state.value || [];
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue.key) === -1 && (!inputValue || String(singleValue.key).indexOf(String(inputValue)) > -1);
	      });
	      sel = sel.concat(value.map(function (singleValue) {
	        var key = singleValue.key;
	        return _react2["default"].createElement(
	          _beeMenus.MenuItem,
	          {
	            style: _util.UNSELECTABLE_STYLE,
	            attribute: _util.UNSELECTABLE_ATTRIBUTE,
	            value: key,
	            key: key
	          },
	          key
	        );
	      }));
	      if (inputValue) {
	        var notFindInputItem = sel.every(function (option) {
	          return (0, _util.getValuePropValue)(option) !== inputValue;
	        });
	        if (notFindInputItem) {
	          sel.unshift(_react2["default"].createElement(
	            _beeMenus.MenuItem,
	            {
	              style: _util.UNSELECTABLE_STYLE,
	              attribute: _util.UNSELECTABLE_ATTRIBUTE,
	              value: inputValue,
	              key: inputValue
	            },
	            inputValue
	          ));
	        }
	      }
	    }
	    if (!sel.length && showNotFound && props.notFoundContent) {
	      sel = [_react2["default"].createElement(
	        _beeMenus.MenuItem,
	        {
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          disabled: true,
	          value: 'NOT_FOUND',
	          key: 'NOT_FOUND'
	        },
	        props.notFoundContent
	      )];
	    }
	    return sel;
	  };

	  RcSelect.prototype.onInputChange = function onInputChange(event) {
	    var tokenSeparators = this.props.tokenSeparators;

	    var val = event.target.value;
	    if ((0, _util.isMultipleOrTags)(this.props) && tokenSeparators && (0, _util.includesSeparators)(val, tokenSeparators)) {
	      var nextValue = this.tokenize(val);
	      this.fireChange(nextValue);
	      this.setOpenState(false, true);
	      this.setInputValue('', false);
	      return;
	    }
	    this.setInputValue(val);
	    this.setState({
	      open: true
	    });
	    if ((0, _util.isCombobox)(this.props)) {
	      this.fireChange([{
	        key: val
	      }]);
	    }
	  };

	  RcSelect.prototype.onDropdownVisibleChange = function onDropdownVisibleChange(open) {
	    this.setOpenState(open);
	  };

	  // combobox ignore


	  RcSelect.prototype.onKeyDown = function onKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (this.state.open && !this.getInputDOMNode()) {
	      this.onInputKeyDown(event);
	    } else if (keyCode === _tinperBeeCore.KeyCode.ENTER || keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      this.setOpenState(true);
	      event.preventDefault();
	    }
	  };

	  RcSelect.prototype.onInputKeyDown = function onInputKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var state = this.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _tinperBeeCore.KeyCode.BACKSPACE) {
	      event.preventDefault();
	      var value = state.value;

	      if (value.length) {
	        this.removeSelected(value[value.length - 1].key);
	      }
	      return;
	    }
	    if (keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      if (!state.open) {
	        this.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _tinperBeeCore.KeyCode.ESC) {
	      if (state.open) {
	        this.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return;
	    }

	    if (state.open) {
	      var menu = this.refs.trigger.getInnerMenu();
	      if (menu && menu.onKeyDown(event)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  };

	  RcSelect.prototype.onMenuSelect = function onMenuSelect(_ref) {
	    var _this3 = this;

	    var item = _ref.item;

	    var value = this.state.value;
	    var props = this.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = this.getLabelFromOption(item);
	    var event = selectedValue;
	    if (props.labelInValue) {
	      event = {
	        key: event,
	        label: selectedLabel
	      };
	    }
	    props.onSelect(event, item);
	    var selectedTitle = item.props.title;
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if ((0, _util.findIndexInValueByKey)(value, selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }]);
	    } else {
	      if ((0, _util.isCombobox)(props)) {
	        this.skipAdjustOpen = true;
	        this.clearAdjustTimer();
	        this.skipAdjustOpenTimer = setTimeout(function () {
	          _this3.skipAdjustOpen = false;
	        }, 0);
	      }
	      if (value.length && value[0].key === selectedValue) {
	        this.setOpenState(false, true);
	        return;
	      }
	      value = [{
	        key: selectedValue,
	        label: selectedLabel,
	        title: selectedTitle
	      }];
	      this.setOpenState(false, true);
	    }
	    this.fireChange(value);
	    var inputValue = void 0;
	    if ((0, _util.isCombobox)(props)) {
	      inputValue = (0, _util.getPropValue)(item, props.optionLabelProp);
	    } else {
	      inputValue = '';
	    }
	    this.setInputValue(inputValue, false);
	  };

	  RcSelect.prototype.onMenuDeselect = function onMenuDeselect(_ref2) {
	    var item = _ref2.item;
	    var domEvent = _ref2.domEvent;

	    if (domEvent.type === 'click') {
	      this.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    this.setInputValue('', false);
	  };

	  RcSelect.prototype.onArrowClick = function onArrowClick(e) {
	    e.stopPropagation();
	    if (!this.props.disabled) {
	      this.setOpenState(!this.state.open, true);
	    }
	  };

	  RcSelect.prototype.onPlaceholderClick = function onPlaceholderClick() {
	    if (this.getInputDOMNode()) {
	      this.getInputDOMNode().focus();
	    }
	  };

	  RcSelect.prototype.onOuterFocus = function onOuterFocus() {
	    this.clearBlurTime();
	    this._focused = true;
	    this.updateFocusClassName();
	    this.props.onFocus();
	  };

	  RcSelect.prototype.onPopupFocus = function onPopupFocus() {
	    // fix ie scrollbar, focus element again
	    this.maybeFocus(true, true);
	  };

	  RcSelect.prototype.onOuterBlur = function onOuterBlur() {
	    var _this4 = this;

	    this.blurTimer = setTimeout(function () {
	      _this4._focused = false;
	      _this4.updateFocusClassName();
	      var props = _this4.props;
	      var value = _this4.state.value;
	      var inputValue = _this4.state.inputValue;

	      if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
	        var options = _this4._options || [];
	        if (options.length) {
	          var firstOption = (0, _util.findFirstMenuItem)(options);
	          if (firstOption) {
	            value = [{
	              key: firstOption.key,
	              label: _this4.getLabelFromOption(firstOption)
	            }];
	            _this4.fireChange(value);
	          }
	        }
	      } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
	        // why not use setState?
	        _this4.state.inputValue = _this4.getInputDOMNode().value = '';
	      }
	      props.onBlur(_this4.getVLForOnChange(value));
	    }, 10);
	  };

	  RcSelect.prototype.onClearSelection = function onClearSelection(event) {
	    var props = this.props;
	    var state = this.state;
	    if (props.disabled) {
	      return;
	    }
	    var inputValue = state.inputValue;
	    var value = state.value;

	    event.stopPropagation();
	    if (inputValue || value.length) {
	      if (value.length) {
	        this.fireChange([]);
	      }
	      this.setOpenState(false, true);
	      if (inputValue) {
	        this.setInputValue('');
	      }
	    }
	  };

	  RcSelect.prototype.onChoiceAnimationLeave = function onChoiceAnimationLeave() {
	    this.refs.trigger.refs.trigger.forcePopupAlign();
	  };

	  RcSelect.prototype.getLabelBySingleValue = function getLabelBySingleValue(children, value) {
	    var _this5 = this;

	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var maybe = _this5.getLabelBySingleValue(child.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(child) === value) {
	        label = _this5.getLabelFromOption(child);
	      }
	    });
	    return label;
	  };

	  RcSelect.prototype.getValueByLabel = function getValueByLabel(children, label) {
	    var _this6 = this;

	    if (label === undefined) {
	      return null;
	    }
	    var value = null;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        var maybe = _this6.getValueByLabel(child.props.children, label);
	        if (maybe !== null) {
	          value = maybe;
	        }
	      } else if ((0, _util.toArray)(_this6.getLabelFromOption(child)).join('') === label) {
	        value = (0, _util.getValuePropValue)(child);
	      }
	    });
	    return value;
	  };

	  RcSelect.prototype.getLabelFromOption = function getLabelFromOption(child) {
	    return (0, _util.getPropValue)(child, this.props.optionLabelProp);
	  };

	  RcSelect.prototype.getLabelFromProps = function getLabelFromProps(props, value) {
	    return this.getLabelByValue(props.children, value);
	  };

	  RcSelect.prototype.getVLForOnChange = function getVLForOnChange(vls_) {
	    var vls = vls_;
	    if (vls !== undefined) {
	      if (!this.props.labelInValue) {
	        vls = vls.map(function (v) {
	          return v.key;
	        });
	      } else {
	        vls = vls.map(function (vl) {
	          return { key: vl.key, label: vl.label };
	        });
	      }
	      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
	    }
	    return vls;
	  };

	  RcSelect.prototype.getLabelByValue = function getLabelByValue(children, value) {
	    var label = this.getLabelBySingleValue(children, value);
	    if (label === null) {
	      return value;
	    }
	    return label;
	  };

	  RcSelect.prototype.getDropdownContainer = function getDropdownContainer() {
	    if (!this.dropdownContainer) {
	      this.dropdownContainer = document.createElement('div');
	      document.body.appendChild(this.dropdownContainer);
	    }
	    return this.dropdownContainer;
	  };

	  RcSelect.prototype.getPlaceholderElement = function getPlaceholderElement() {
	    var props = this.props;
	    var state = this.state;

	    var hidden = false;
	    if (state.inputValue) {
	      hidden = true;
	    }
	    if (state.value.length) {
	      hidden = true;
	    }
	    if ((0, _util.isCombobox)(props) && state.value.length === 1 && !state.value[0].key) {
	      hidden = false;
	    }
	    var placeholder = props.placeholder;
	    if (placeholder) {
	      return _react2["default"].createElement(
	        'div',
	        _extends({
	          onMouseDown: _util.preventDefaultEvent,
	          style: _extends({
	            display: hidden ? 'none' : 'block'
	          }, _util.UNSELECTABLE_STYLE)
	        }, _util.UNSELECTABLE_ATTRIBUTE, {
	          onClick: this.onPlaceholderClick,
	          className: props.prefixCls + '-selection__placeholder'
	        }),
	        placeholder
	      );
	    }
	    return null;
	  };

	  RcSelect.prototype.getInputElement = function getInputElement() {
	    var props = this.props;
	    return _react2["default"].createElement(
	      'div',
	      { className: props.prefixCls + '-search__field__wrap' },
	      _react2["default"].createElement('input', {
	        ref: this.saveInputRef,
	        onChange: this.onInputChange,
	        onKeyDown: this.onInputKeyDown,
	        value: this.state.inputValue,
	        disabled: props.disabled,
	        className: props.prefixCls + '-search__field'
	      }),
	      _react2["default"].createElement(
	        'span',
	        {
	          ref: this.saveInputMirrorRef,
	          className: props.prefixCls + '-search__field__mirror'
	        },
	        this.state.inputValue
	      )
	    );
	  };

	  RcSelect.prototype.getInputDOMNode = function getInputDOMNode() {
	    return this.inputInstance;
	  };

	  RcSelect.prototype.getInputMirrorDOMNode = function getInputMirrorDOMNode() {
	    return this.inputMirrorInstance;
	  };

	  RcSelect.prototype.getPopupDOMNode = function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDOMNode();
	  };

	  RcSelect.prototype.getPopupMenuComponent = function getPopupMenuComponent() {
	    return this.refs.trigger.getInnerMenu();
	  };

	  RcSelect.prototype.setOpenState = function setOpenState(open, needFocus) {
	    var _this7 = this;

	    var props = this.props;
	    var state = this.state;

	    if (state.open === open) {
	      this.maybeFocus(open, needFocus);
	      return;
	    }
	    var nextState = {
	      open: open
	    };
	    // clear search input value when open is false in singleMode.
	    if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
	      this.setInputValue('');
	    }
	    if (!open) {
	      this.maybeFocus(open, needFocus);
	    }
	    this.setState(nextState, function () {
	      if (open) {
	        _this7.maybeFocus(open, needFocus);
	      }
	    });
	  };

	  RcSelect.prototype.setInputValue = function setInputValue(inputValue) {
	    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    this.setState({
	      inputValue: inputValue
	    });
	    if (fireSearch) {
	      this.props.onSearch(inputValue);
	    }
	  };

	  RcSelect.prototype.clearBlurTime = function clearBlurTime() {
	    if (this.blurTimer) {
	      clearTimeout(this.blurTimer);
	      this.blurTimer = null;
	    }
	  };

	  RcSelect.prototype.clearAdjustTimer = function clearAdjustTimer() {
	    if (this.skipAdjustOpenTimer) {
	      clearTimeout(this.skipAdjustOpenTimer);
	      this.skipAdjustOpenTimer = null;
	    }
	  };

	  RcSelect.prototype.updateFocusClassName = function updateFocusClassName() {
	    var refs = this.refs;
	    var props = this.props;


	    if (this._focused) {
	      (0, _componentClasses2["default"])(refs.root).add(props.prefixCls + '-focused');
	    } else {
	      (0, _componentClasses2["default"])(refs.root).remove(props.prefixCls + '-focused');
	    }
	  };

	  RcSelect.prototype.maybeFocus = function maybeFocus(open, needFocus) {
	    if (needFocus || open) {
	      var input = this.getInputDOMNode();
	      var _document = document;
	      var activeElement = _document.activeElement;

	      if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(this.props))) {
	        if (activeElement !== input) {
	          input.focus();
	        }
	      } else {
	        var selection = this.refs.selection;
	        if (activeElement !== selection) {
	          selection.focus();
	        }
	      }
	    }
	  };

	  RcSelect.prototype.addLabelToValue = function addLabelToValue(props, value_) {
	    var _this8 = this;

	    var value = value_;
	    if (props.labelInValue) {
	      value.forEach(function (v) {
	        v.label = v.label || _this8.getLabelFromProps(props, v.key);
	      });
	    } else {
	      value = value.map(function (v) {
	        return {
	          key: v,
	          label: _this8.getLabelFromProps(props, v)
	        };
	      });
	    }
	    return value;
	  };

	  RcSelect.prototype.addTitleToValue = function addTitleToValue(props, values) {
	    var _this9 = this;

	    var nextValues = values;
	    var keys = values.map(function (v) {
	      return v.key;
	    });
	    _react2["default"].Children.forEach(props.children, function (child) {
	      if (child.type === _OptGroup2["default"]) {
	        nextValues = _this9.addTitleToValue(child.props, nextValues);
	      } else {
	        var value = (0, _util.getValuePropValue)(child);
	        var valueIndex = keys.indexOf(value);
	        if (valueIndex > -1) {
	          nextValues[valueIndex].title = child.props.title;
	        }
	      }
	    });
	    return nextValues;
	  };

	  RcSelect.prototype.removeSelected = function removeSelected(selectedKey) {
	    var props = this.props;
	    if (props.disabled || this.isChildDisabled(selectedKey)) {
	      return;
	    }
	    var label = void 0;
	    var value = this.state.value.filter(function (singleValue) {
	      if (singleValue.key === selectedKey) {
	        label = singleValue.label;
	      }
	      return singleValue.key !== selectedKey;
	    });
	    var canMultiple = (0, _util.isMultipleOrTags)(props);

	    if (canMultiple) {
	      var event = selectedKey;
	      if (props.labelInValue) {
	        event = {
	          key: selectedKey,
	          label: label
	        };
	      }
	      props.onDeselect(event);
	    }
	    this.fireChange(value);
	  };

	  RcSelect.prototype.openIfHasChildren = function openIfHasChildren() {
	    var props = this.props;
	    if (_react2["default"].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      this.setOpenState(true);
	    }
	  };

	  RcSelect.prototype.fireChange = function fireChange(value) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value
	      });
	    }
	    props.onChange(this.getVLForOnChange(value));
	  };

	  RcSelect.prototype.isChildDisabled = function isChildDisabled(key) {
	    return (0, _util.toArray)(this.props.children).some(function (child) {
	      var childValue = (0, _util.getValuePropValue)(child);
	      return childValue === key && child.props && child.props.disabled;
	    });
	  };

	  RcSelect.prototype.tokenize = function tokenize(string) {
	    var _this10 = this;

	    var _props = this.props;
	    var multiple = _props.multiple;
	    var tokenSeparators = _props.tokenSeparators;
	    var children = _props.children;

	    var nextValue = this.state.value;
	    (0, _util.splitBySeparators)(string, tokenSeparators).forEach(function (label) {
	      var selectedValue = { key: label, label: label };
	      if ((0, _util.findIndexInValueByLabel)(nextValue, label) === -1) {
	        if (multiple) {
	          var value = _this10.getValueByLabel(children, label);
	          if (value) {
	            selectedValue.key = value;
	            nextValue = nextValue.concat(selectedValue);
	          }
	        } else {
	          nextValue = nextValue.concat(selectedValue);
	        }
	      }
	    });
	    return nextValue;
	  };

	  RcSelect.prototype.adjustOpenState = function adjustOpenState() {
	    if (this.skipAdjustOpen) {
	      return;
	    }
	    var open = this.state.open;

	    if (typeof document !== 'undefined' && this.getInputDOMNode() && document.activeElement === this.getInputDOMNode()) {
	      open = true;
	    }
	    var options = [];
	    if (open) {
	      options = this.renderFilterOptions();
	    }
	    this._options = options;
	    if (open && ((0, _util.isMultipleOrTagsOrCombobox)(this.props) || !this.props.showSearch) && !options.length) {
	      open = false;
	    }
	    this.state.open = open;
	  };

	  RcSelect.prototype.renderTopControlNode = function renderTopControlNode() {
	    var _this11 = this;

	    var _state = this.state;
	    var value = _state.value;
	    var open = _state.open;
	    var inputValue = _state.inputValue;

	    var props = this.props;
	    var choiceTransitionName = props.choiceTransitionName;
	    var prefixCls = props.prefixCls;
	    var maxTagTextLength = props.maxTagTextLength;
	    var showSearch = props.showSearch;

	    var className = prefixCls + '-selection__rendered';
	    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
	    var innerNode = null;
	    if ((0, _util.isSingleMode)(props)) {
	      var selectedValue = null;
	      if (value.length) {
	        var showSelectedValue = false;
	        var opacity = 1;
	        if (!showSearch) {
	          showSelectedValue = true;
	        } else {
	          if (open) {
	            showSelectedValue = !inputValue;
	            if (showSelectedValue) {
	              opacity = 0.4;
	            }
	          } else {
	            showSelectedValue = true;
	          }
	        }
	        var singleValue = value[0];
	        selectedValue = _react2["default"].createElement(
	          'div',
	          {
	            key: 'value',
	            className: prefixCls + '-selection-selected-value',
	            title: singleValue.title || singleValue.label,
	            style: {
	              display: showSelectedValue ? 'block' : 'none',
	              opacity: opacity
	            }
	          },
	          value[0].label
	        );
	      }
	      if (!showSearch) {
	        innerNode = [selectedValue];
	      } else {
	        innerNode = [selectedValue, _react2["default"].createElement(
	          'div',
	          {
	            className: prefixCls + '-search ' + prefixCls + '-search--inline',
	            key: 'input',
	            style: {
	              display: open ? 'block' : 'none'
	            }
	          },
	          this.getInputElement()
	        )];
	      }
	    } else {
	      var selectedValueNodes = [];
	      if ((0, _util.isMultipleOrTags)(props)) {
	        selectedValueNodes = value.map(function (singleValue) {
	          var content = singleValue.label;
	          var title = singleValue.title || content;
	          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	            content = content.slice(0, maxTagTextLength) + '...';
	          }
	          var disabled = _this11.isChildDisabled(singleValue.key);
	          var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
	          return _react2["default"].createElement(
	            'li',
	            _extends({
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              className: choiceClassName,
	              key: singleValue.key,
	              title: title
	            }),
	            _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-selection__choice__content' },
	              content
	            ),
	            disabled ? null : _react2["default"].createElement('span', {
	              className: prefixCls + '-selection__choice__remove',
	              onClick: _this11.removeSelected.bind(_this11, singleValue.key)
	            })
	          );
	        });
	      }
	      selectedValueNodes.push(_react2["default"].createElement(
	        'li',
	        {
	          className: prefixCls + '-search ' + prefixCls + '-search--inline',
	          key: '__input'
	        },
	        this.getInputElement()
	      ));

	      innerNode = _react2["default"].createElement(
	        'ul',
	        null,
	        selectedValueNodes
	      );
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: className },
	      this.getPlaceholderElement(),
	      innerNode
	    );
	  };

	  RcSelect.prototype.render = function render() {
	    var _rootCls;

	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var className = props.className;
	    var disabled = props.disabled;
	    var allowClear = props.allowClear;
	    var prefixCls = props.prefixCls;

	    var ctrlNode = this.renderTopControlNode();
	    var extraSelectionProps = {};
	    var open = this.state.open;

	    var options = this._options;
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
	      extraSelectionProps = {
	        onKeyDown: this.onKeyDown,
	        tabIndex: 0
	      };
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, prefixCls + '-open', open), _defineProperty(_rootCls, prefixCls + '-focused', open || !!this._focused), _defineProperty(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, prefixCls + '-disabled', disabled), _defineProperty(_rootCls, prefixCls + '-enabled', !disabled), _defineProperty(_rootCls, prefixCls + '-allow-clear', !!props.allowClear), _rootCls);
	    var clearStyle = _extends({}, _util.UNSELECTABLE_STYLE, {
	      display: 'none'
	    });
	    if (state.inputValue || state.value.length) {
	      clearStyle.display = 'block';
	    }
	    var clear = _react2["default"].createElement('span', _extends({
	      key: 'clear',
	      onMouseDown: _util.preventDefaultEvent,
	      style: clearStyle
	    }, _util.UNSELECTABLE_ATTRIBUTE, {
	      className: prefixCls + '-selection__clear',
	      onClick: this.onClearSelection
	    }));
	    return _react2["default"].createElement(
	      _SelectTrigger2["default"],
	      {
	        onPopupFocus: this.onPopupFocus,
	        dropdownAlign: props.dropdownAlign,
	        dropdownClassName: props.dropdownClassName,
	        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
	        defaultActiveFirstOption: props.defaultActiveFirstOption,
	        dropdownMenuStyle: props.dropdownMenuStyle,
	        transitionName: props.transitionName,
	        animation: props.animation,
	        prefixCls: props.prefixCls,
	        dropdownStyle: props.dropdownStyle,
	        combobox: props.combobox,
	        showSearch: props.showSearch,
	        options: options,
	        multiple: multiple,
	        disabled: disabled,
	        visible: open,
	        inputValue: state.inputValue,
	        value: state.value,
	        onDropdownVisibleChange: this.onDropdownVisibleChange,
	        getPopupContainer: props.getPopupContainer,
	        onMenuSelect: this.onMenuSelect,
	        onMenuDeselect: this.onMenuDeselect,
	        ref: 'trigger'
	      },
	      _react2["default"].createElement(
	        'div',
	        {
	          style: props.style,
	          ref: 'root',
	          onBlur: this.onOuterBlur,
	          onFocus: this.onOuterFocus,
	          className: (0, _classnames2["default"])(rootCls)
	        },
	        _react2["default"].createElement(
	          'div',
	          _extends({
	            ref: 'selection',
	            key: 'selection',
	            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	            role: 'combobox',
	            'aria-autocomplete': 'list',
	            'aria-haspopup': 'true',
	            'aria-expanded': open
	          }, extraSelectionProps),
	          ctrlNode,
	          allowClear && !multiple ? clear : null,
	          multiple || !props.showArrow ? null : _react2["default"].createElement(
	            'span',
	            _extends({
	              key: 'arrow',
	              className: prefixCls + '-arrow',
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              onClick: this.onArrowClick
	            }),
	            _react2["default"].createElement('b', null)
	          )
	        )
	      )
	    );
	  };

	  return RcSelect;
	}(_react.Component);

	;

	RcSelect.defaultProps = defaultProps;
	RcSelect.propTypes = propTypes;

	exports["default"] = RcSelect;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;

	var _Menu = __webpack_require__(84);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _SubMenu = __webpack_require__(87);

	var _SubMenu2 = _interopRequireDefault(_SubMenu);

	var _MenuItem = __webpack_require__(94);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _MenuItemGroup = __webpack_require__(95);

	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

	var _Divider = __webpack_require__(96);

	var _Divider2 = _interopRequireDefault(_Divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.SubMenu = _SubMenu2["default"];
	exports.Item = _MenuItem2["default"];
	exports.MenuItem = _MenuItem2["default"];
	exports.MenuItemGroup = _MenuItemGroup2["default"];
	exports.ItemGroup = _MenuItemGroup2["default"];
	exports.Divider = _Divider2["default"];
	exports["default"] = _Menu2["default"];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(85);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DOMWrap = __webpack_require__(86);

	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}

	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children;
	  var eventKey = props.eventKey;

	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}

	var propTypes = {

	  openSubMenuOnMouseEnter: _react.PropTypes.bool,
	  closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	  selectedKeys: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.number)]),
	  defaultSelectedKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  defaultOpenKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  mode: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  onDeselect: _react.PropTypes.func,
	  onDestroy: _react.PropTypes.func,
	  openTransitionName: _react.PropTypes.string,
	  openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	  level: _react.PropTypes.number,
	  eventKey: _react.PropTypes.string,
	  selectable: _react.PropTypes.bool,
	  children: _react.PropTypes.any,

	  focusable: _react.PropTypes.bool,
	  multiple: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  defaultActiveFirst: _react.PropTypes.bool,
	  visible: _react.PropTypes.bool,
	  activeKey: _react.PropTypes.string

	};
	var defaultProps = {
	  openSubMenuOnMouseEnter: true,
	  closeSubMenuOnMouseLeave: true,
	  selectable: true,
	  onClick: _util.noop,
	  onSelect: _util.noop,
	  onOpenChange: _util.noop,
	  onDeselect: _util.noop,
	  defaultSelectedKeys: [],
	  defaultOpenKeys: [],

	  prefixCls: 'u-menu',
	  className: '',
	  mode: 'vertical',
	  level: 1,
	  inlineIndent: 24,
	  visible: true,
	  focusable: true,
	  style: {}
	};

	var Menu = function (_Component) {
	  _inherits(Menu, _Component);

	  function Menu(props) {
	    _classCallCheck(this, Menu);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    var selectedKeys = _this.props.defaultSelectedKeys;
	    var openKeys = _this.props.defaultOpenKeys;
	    if ('selectedKeys' in _this.props) {
	      selectedKeys = _this.props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = _this.props.openKeys || [];
	    }

	    _this.state = {
	      selectedKeys: selectedKeys,
	      openKeys: openKeys,
	      activeKey: getActiveKey(_this.props, _this.props.activeKey)
	      //activeKey: getActiveKey(this.props, this.props.activeKey),
	    };
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);
	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onItemHover = _this.onItemHover.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);
	    _this.getOpenTransitionName = _this.getOpenTransitionName.bind(_this);
	    _this.isInlineMode = _this.isInlineMode.bind(_this);
	    _this.lastOpenSubMenu = _this.lastOpenSubMenu.bind(_this);
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);

	    _this.renderCommonMenuItem = _this.renderCommonMenuItem.bind(_this);
	    _this.renderRoot = _this.renderRoot.bind(_this);
	    _this.getOpenChangesOnItemHover = _this.getOpenChangesOnItemHover.bind(_this);
	    _this.getFlatInstanceArray = _this.getFlatInstanceArray.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.step = _this.step.bind(_this);

	    return _this;
	  }

	  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }

	    if ('activeKey' in nextProps) {
	      props.activeKey = getActiveKey(nextProps, nextProps.activeKey);
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props.activeKey = activeKey;
	      }
	    }

	    this.setState(props);
	  };

	  Menu.prototype.componentWillMount = function componentWillMount() {
	    this.instanceArray = [];
	  };

	  Menu.prototype.onDestroy = function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  };

	  Menu.prototype.onItemHover = function onItemHover(e) {
	    var _this2 = this;

	    var item = e.item;
	    var _props = this.props;
	    var mode = _props.mode;
	    var closeSubMenuOnMouseLeave = _props.closeSubMenuOnMouseLeave;
	    var _e$openChanges = e.openChanges;
	    var openChanges = _e$openChanges === undefined ? [] : _e$openChanges;
	    // special for top sub menu

	    if (mode !== 'inline' && !closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this2.state.activeKey;
	        var activeItem = _this2.getFlatInstanceArray().filter(function (c) {
	          return c && c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          openChanges = openChanges.concat({
	            key: item.props.eventKey,
	            item: item,
	            originalEvent: e,
	            open: true
	          });
	        }
	      })();
	    }
	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  };

	  Menu.prototype.onSelect = function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect(_extends({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };

	  Menu.prototype.onClick = function onClick(e) {
	    this.props.onClick(e);
	  };

	  Menu.prototype.onOpenChange = function onOpenChange(e_) {
	    var props = this.props;
	    var openKeys = this.state.openKeys.concat();
	    var changed = false;
	    var processSingle = function processSingle(e) {
	      var oneChanged = false;
	      if (e.open) {
	        oneChanged = openKeys.indexOf(e.key) === -1;
	        if (oneChanged) {
	          openKeys.push(e.key);
	        }
	      } else {
	        var index = openKeys.indexOf(e.key);
	        oneChanged = index !== -1;
	        if (oneChanged) {
	          openKeys.splice(index, 1);
	        }
	      }
	      changed = changed || oneChanged;
	    };
	    if (Array.isArray(e_)) {
	      // batch change call
	      e_.forEach(processSingle);
	    } else {
	      processSingle(e_);
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        this.setState({ openKeys: openKeys });
	      }
	      props.onOpenChange(openKeys);
	    }
	  };

	  Menu.prototype.onDeselect = function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect(_extends({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };

	  Menu.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  };

	  Menu.prototype.isInlineMode = function isInlineMode() {
	    return this.props.mode === 'inline';
	  };

	  Menu.prototype.lastOpenSubMenu = function lastOpenSubMenu() {
	    var lastOpen = [];
	    var openKeys = this.state.openKeys;

	    if (openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  };

	  Menu.prototype.renderMenuItem = function renderMenuItem(c, i, subIndex) {
	    if (!c) {
	      return null;
	    }
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  };

	  Menu.prototype.renderCommonMenuItem = function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = _extends({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _tinperBeeCore.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  };

	  Menu.prototype.getOpenChangesOnItemHover = function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;

	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty

	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  };

	  Menu.prototype.getFlatInstanceArray = function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  };

	  Menu.prototype.step = function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  };

	  Menu.prototype.onKeyDown = function onKeyDown(e) {
	    var _this3 = this;

	    var keyCode = e.keyCode;
	    var handled = void 0;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      activeItem = this.step(keyCode === _tinperBeeCore.KeyCode.UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        scrollIntoView(ReactDOM.findDOMNode(activeItem), ReactDOM.findDOMNode(_this3), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  };

	  Menu.prototype.renderRoot = function renderRoot(props) {
	    var _classes;

	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem.bind(this))
	      )
	      /*eslint-enable */

	    );
	  };

	  Menu.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  };

	  return Menu;
	}(_react.Component);

	;

	Menu.propTypes = propTypes;
	Menu.defaultProps = defaultProps;

	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecusively = loopMenuItemRecusively;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function noop() {}

	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + index;
	}

	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2["default"].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2["default"].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}

	function loopMenuItemRecusively(children, keys, ret) {
	  if (!children || ret.find) {
	    return;
	  }
	  _react2["default"].Children.forEach(children, function (c) {
	    if (ret.find) {
	      return;
	    }
	    if (c) {
	      var construt = c.type;
	      if (!construt || !(construt.isSubMenu || construt.isMenuItem || construt.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecusively(c.props.children, keys, ret);
	      }
	    }
	  });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  tag: _react.PropTypes.string,
	  hiddenClassName: _react.PropTypes.string,
	  visible: _react.PropTypes.bool
	};
	var defaultProps = {
	  tag: 'div'
	};

	var DOMWrap = function (_Component) {
	  _inherits(DOMWrap, _Component);

	  function DOMWrap() {
	    _classCallCheck(this, DOMWrap);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  DOMWrap.prototype.render = function render() {
	    var props = _extends({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    delete props.tag;
	    delete props.hiddenClassName;
	    delete props.visible;
	    return _react2["default"].createElement(Tag, props);
	  };

	  return DOMWrap;
	}(_react.Component);

	;

	DOMWrap.propTypes = propTypes;
	DOMWrap.defaultProps = defaultProps;

	exports["default"] = DOMWrap;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _SubPopupMenu = __webpack_require__(88);

	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	//import KeyCode from 'rc-util/lib/KeyCode';


	//import SubMenuStateMixin from './SubMenuStateMixin';

	var guid = 0;

	var propTypes = {
	  parentMenu: _react.PropTypes.object,
	  title: _react.PropTypes.node,
	  children: _react.PropTypes.any,
	  selectedKeys: _react.PropTypes.array,
	  openKeys: _react.PropTypes.array,
	  onClick: _react.PropTypes.func,
	  onOpenChange: _react.PropTypes.func,
	  rootPrefixCls: _react.PropTypes.string,
	  eventKey: _react.PropTypes.string,
	  multiple: _react.PropTypes.bool,
	  active: _react.PropTypes.bool,
	  onSelect: _react.PropTypes.func,
	  closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	  openSubMenuOnMouseEnter: _react.PropTypes.bool,
	  onDeselect: _react.PropTypes.func,
	  onDestroy: _react.PropTypes.func,
	  onItemHover: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onTitleMouseEnter: _react.PropTypes.func,
	  onTitleMouseLeave: _react.PropTypes.func,
	  onTitleClick: _react.PropTypes.func
	};
	var defaultProps = {
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop,
	  onTitleMouseEnter: _util.noop,
	  onTitleMouseLeave: _util.noop,
	  onTitleClick: _util.noop,
	  title: ''
	};

	var SubMenu = function (_Component) {
	  _inherits(SubMenu, _Component);

	  function SubMenu(props) {
	    _classCallCheck(this, SubMenu);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.isSubMenu = 1;
	    _this.state = {
	      defaultActiveFirst: false
	    };

	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onTitleMouseEnter = _this.onTitleMouseEnter.bind(_this);

	    _this.onTitleMouseLeave = _this.onTitleMouseLeave.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onTitleClick = _this.onTitleClick.bind(_this);
	    _this.onSubMenuClick = _this.onSubMenuClick.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);

	    _this.getPrefixCls = _this.getPrefixCls.bind(_this);
	    _this.getActiveClassName = _this.getActiveClassName.bind(_this);
	    _this.getSelectedClassName = _this.getSelectedClassName.bind(_this);

	    _this.getDisabledClassName = _this.getDisabledClassName.bind(_this);
	    _this.getOpenClassName = _this.getOpenClassName.bind(_this);
	    _this.saveMenuInstance = _this.saveMenuInstance.bind(_this);
	    _this.addKeyPath = _this.addKeyPath.bind(_this);
	    _this.triggerOpenChange = _this.triggerOpenChange.bind(_this);
	    _this.clearSubMenuTimers = _this.clearSubMenuTimers.bind(_this);

	    _this.clearSubMenuLeaveTimer = _this.clearSubMenuLeaveTimer.bind(_this);
	    _this.clearSubMenuTitleLeaveTimer = _this.clearSubMenuTitleLeaveTimer.bind(_this);
	    _this.isChildrenSelected = _this.isChildrenSelected.bind(_this);
	    _this.isOpen = _this.isOpen.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	    return _this;
	  }

	  SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _props = this.props;
	    var onDestroy = _props.onDestroy;
	    var eventKey = _props.eventKey;
	    var parentMenu = _props.parentMenu;

	    this.mounted = true;
	    if (onDestroy) {
	      onDestroy(eventKey);
	    }
	    if (parentMenu.subMenuInstance === this) {
	      this.clearSubMenuTimers();
	    }
	  };

	  SubMenu.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	  };

	  SubMenu.prototype.onDestroy = function onDestroy(key) {
	    this.props.onDestroy(key);
	  };

	  SubMenu.prototype.onKeyDown = function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	    var isOpen = this.isOpen();

	    if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
	      this.onTitleClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }

	    if (keyCode === _tinperBeeCore.KeyCode.RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _tinperBeeCore.KeyCode.LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }

	    if (isOpen && (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  };

	  SubMenu.prototype.onOpenChange = function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  };

	  SubMenu.prototype.onMouseEnter = function onMouseEnter(e) {
	    var props = this.props;
	    this.clearSubMenuLeaveTimer(props.parentMenu.subMenuInstance !== this);
	    props.onMouseEnter({
	      key: props.eventKey,
	      domEvent: e
	    });
	  };

	  SubMenu.prototype.onTitleMouseEnter = function onTitleMouseEnter(domEvent) {
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    var key = props.eventKey;

	    var item = this;
	    this.clearSubMenuTitleLeaveTimer(parentMenu.subMenuInstance !== item);
	    if (parentMenu.menuItemInstance) {
	      parentMenu.menuItemInstance.clearMenuItemMouseLeaveTimer(true);
	    }
	    var openChanges = [];
	    if (props.openSubMenuOnMouseEnter) {
	      openChanges.push({
	        key: key,
	        item: item,
	        trigger: 'mouseenter',
	        open: true
	      });
	    }
	    props.onItemHover({
	      key: key,
	      item: item,
	      hover: true,
	      trigger: 'mouseenter',
	      openChanges: openChanges
	    });
	    this.setState({
	      defaultActiveFirst: false
	    });
	    props.onTitleMouseEnter({
	      key: key,
	      domEvent: domEvent
	    });
	  };

	  SubMenu.prototype.onTitleMouseLeave = function onTitleMouseLeave(e) {
	    var _this2 = this;

	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    var eventKey = props.eventKey;

	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuTitleLeaveFn = function () {
	      if (_this2.mounted) {
	        // leave whole sub tree
	        // still active
	        if (props.mode === 'inline' && props.active) {
	          props.onItemHover({
	            key: eventKey,
	            item: _this2,
	            hover: false,
	            trigger: 'mouseleave'
	          });
	        }
	        props.onTitleMouseLeave({
	          key: props.eventKey,
	          domEvent: e
	        });
	      }
	    };
	    parentMenu.subMenuTitleLeaveTimer = setTimeout(parentMenu.subMenuTitleLeaveFn, 100);
	  };

	  SubMenu.prototype.onMouseLeave = function onMouseLeave(e) {
	    var _this3 = this;

	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    var eventKey = props.eventKey;

	    parentMenu.subMenuInstance = this;
	    parentMenu.subMenuLeaveFn = function () {
	      if (_this3.mounted) {
	        // leave whole sub tree
	        // still active
	        if (props.mode !== 'inline') {
	          var isOpen = _this3.isOpen();
	          if (isOpen && props.closeSubMenuOnMouseLeave && props.active) {
	            props.onItemHover({
	              key: eventKey,
	              item: _this3,
	              hover: false,
	              trigger: 'mouseleave',
	              openChanges: [{
	                key: eventKey,
	                item: _this3,
	                trigger: 'mouseleave',
	                open: false
	              }]
	            });
	          } else {
	            if (props.active) {
	              props.onItemHover({
	                key: eventKey,
	                item: _this3,
	                hover: false,
	                trigger: 'mouseleave'
	              });
	            }
	            if (isOpen && props.closeSubMenuOnMouseLeave) {
	              _this3.triggerOpenChange(false);
	            }
	          }
	        }
	        // trigger mouseleave
	        props.onMouseLeave({
	          key: eventKey,
	          domEvent: e
	        });
	      }
	    };
	    // prevent popup menu and submenu gap
	    parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100);
	  };

	  SubMenu.prototype.onTitleClick = function onTitleClick(e) {
	    var props = this.props;

	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.isOpen(), 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  };

	  SubMenu.prototype.onSubMenuClick = function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  };

	  SubMenu.prototype.onSelect = function onSelect(info) {
	    this.props.onSelect(info);
	  };

	  SubMenu.prototype.onDeselect = function onDeselect(info) {
	    this.props.onDeselect(info);
	  };

	  SubMenu.prototype.getPrefixCls = function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  };

	  SubMenu.prototype.getActiveClassName = function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  };

	  SubMenu.prototype.getDisabledClassName = function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  };

	  SubMenu.prototype.getSelectedClassName = function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  };

	  SubMenu.prototype.getOpenClassName = function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  };

	  SubMenu.prototype.saveMenuInstance = function saveMenuInstance(c) {
	    this.menuInstance = c;
	  };

	  SubMenu.prototype.addKeyPath = function addKeyPath(info) {
	    return _extends({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  };

	  SubMenu.prototype.triggerOpenChange = function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  };

	  SubMenu.prototype.clearSubMenuTimers = function clearSubMenuTimers() {
	    var callFn = void 0;
	    this.clearSubMenuLeaveTimer(callFn);
	    this.clearSubMenuTitleLeaveTimer(callFn);
	  };

	  SubMenu.prototype.clearSubMenuTitleLeaveTimer = function clearSubMenuTitleLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuTitleLeaveTimer) {
	      clearTimeout(parentMenu.subMenuTitleLeaveTimer);
	      parentMenu.subMenuTitleLeaveTimer = null;
	      if (callFn && parentMenu.subMenuTitleLeaveFn) {
	        parentMenu.subMenuTitleLeaveFn();
	      }
	      parentMenu.subMenuTitleLeaveFn = null;
	    }
	  };

	  SubMenu.prototype.clearSubMenuLeaveTimer = function clearSubMenuLeaveTimer() {
	    var callFn = void 0;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.subMenuLeaveTimer) {
	      clearTimeout(parentMenu.subMenuLeaveTimer);
	      parentMenu.subMenuLeaveTimer = null;
	      if (callFn && parentMenu.subMenuLeaveFn) {
	        parentMenu.subMenuLeaveFn();
	      }
	      parentMenu.subMenuLeaveFn = null;
	    }
	  };

	  SubMenu.prototype.isChildrenSelected = function isChildrenSelected() {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecusively)(this.props.children, this.props.selectedKeys, ret);
	    return ret.find;
	  };

	  SubMenu.prototype.isOpen = function isOpen() {
	    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
	  };

	  SubMenu.prototype.renderChildren = function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.isOpen(),
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2["default"].createElement(
	      _SubPopupMenu2["default"],
	      baseProps,
	      children
	    );
	  };

	  SubMenu.prototype.render = function render() {
	    var _classes;

	    var isOpen = this.isOpen();
	    this.haveOpen = this.haveOpen || isOpen;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);

	    classes[this.getOpenClassName()] = isOpen;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getSelectedClassName()] = this.isChildrenSelected();

	    if (!this._menuId) {
	      if (props.eventKey) {
	        this._menuId = props.eventKey + '$Menu';
	      } else {
	        this._menuId = '$__$' + ++guid + '$Menu';
	      }
	    }

	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var titleClickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({ className: (0, _classnames2["default"])(classes) }, mouseEvents),
	      _react2["default"].createElement(
	        'div',
	        _extends({
	          style: style,
	          className: prefixCls + '-title'
	        }, titleMouseEvents, titleClickEvents, {
	          'aria-expanded': isOpen,
	          'aria-owns': this._menuId,
	          'aria-haspopup': 'true'
	        }),
	        props.title
	      ),
	      this.renderChildren(props.children)
	    );
	  };

	  return SubMenu;
	}(_react.Component);

	;

	SubMenu.propTypes = propTypes;
	SubMenu.defaultProps = defaultProps;
	SubMenu.isSubMenu = 1;

	exports["default"] = SubMenu;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeAnimate = __webpack_require__(89);

	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _tinperBeeCore = __webpack_require__(25);

	var _util = __webpack_require__(85);

	var _DOMWrap = __webpack_require__(86);

	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}

	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children;
	  var eventKey = props.eventKey;

	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}

	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}

	//import Animate from 'bee-transition';
	var propTypes = {
	  onSelect: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onDeselect: _react.PropTypes.func,
	  onOpenChange: _react.PropTypes.func,
	  onDestroy: _react.PropTypes.func,
	  openTransitionName: _react.PropTypes.string,
	  openAnimation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	  openKeys: _react.PropTypes.arrayOf(_react.PropTypes.string),
	  closeSubMenuOnMouseLeave: _react.PropTypes.bool,
	  visible: _react.PropTypes.bool,
	  children: _react.PropTypes.any
	};

	var SubPopupMenu = function (_Component) {
	  _inherits(SubPopupMenu, _Component);

	  function SubPopupMenu(props) {
	    _classCallCheck(this, SubPopupMenu);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.state = {
	      activeKey: getActiveKey(_this.props, _this.props.activeKey)
	    };
	    _this.getOpenChangesOnItemHover = _this.getOpenChangesOnItemHover.bind(_this);
	    _this.onDeselect = _this.onDeselect.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onOpenChange = _this.onOpenChange.bind(_this);
	    _this.onDestroy = _this.onDestroy.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);

	    _this.onItemHover = _this.onItemHover.bind(_this);
	    _this.getOpenTransitionName = _this.getOpenTransitionName.bind(_this);
	    _this.renderMenuItem = _this.renderMenuItem.bind(_this);

	    _this.getFlatInstanceArray = _this.getFlatInstanceArray.bind(_this);
	    _this.renderCommonMenuItem = _this.renderCommonMenuItem.bind(_this);
	    _this.renderRoot = _this.renderRoot.bind(_this);

	    return _this;
	  }

	  SubPopupMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var props = void 0;
	    if ('activeKey' in nextProps) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  };

	  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  };

	  SubPopupMenu.prototype.onDeselect = function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  };

	  SubPopupMenu.prototype.onSelect = function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  };

	  SubPopupMenu.prototype.onClick = function onClick(e) {
	    this.props.onClick(e);
	  };

	  SubPopupMenu.prototype.onOpenChange = function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  };

	  SubPopupMenu.prototype.onDestroy = function onDestroy(key) {
	    this.props.onDestroy(key);
	  };

	  SubPopupMenu.prototype.onItemHover = function onItemHover(e) {
	    var _e$openChanges = e.openChanges;
	    var openChanges = _e$openChanges === undefined ? [] : _e$openChanges;

	    openChanges = openChanges.concat(this.getOpenChangesOnItemHover(e));
	    if (openChanges.length) {
	      this.onOpenChange(openChanges);
	    }
	  };

	  SubPopupMenu.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  };

	  SubPopupMenu.prototype.renderMenuItem = function renderMenuItem(c, i, subIndex) {
	    var props = this.props;
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  };

	  SubPopupMenu.prototype.getOpenChangesOnItemHover = function getOpenChangesOnItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;

	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty

	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        return {
	          item: activeItem,
	          originalEvent: e,
	          key: activeItem.props.eventKey,
	          open: false
	        };
	      }
	    }
	    return [];
	  };

	  SubPopupMenu.prototype.renderCommonMenuItem = function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = _extends({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _tinperBeeCore.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
	  };

	  SubPopupMenu.prototype.getFlatInstanceArray = function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  };

	  SubPopupMenu.prototype.renderRoot = function renderRoot(props) {
	    var _classes;

	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2["default"])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({
	          style: props.style,
	          tag: 'ul',
	          hiddenClassName: props.prefixCls + '-hidden',
	          visible: props.visible
	        }, domProps),
	        _react2["default"].Children.map(props.children, this.renderMenuItem.bind(this))
	      )
	      /*eslint-enable */

	    );
	  };

	  SubPopupMenu.prototype.render = function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = _extends({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (_typeof(props.openAnimation) === 'object') {
	      animProps.animation = _extends({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      _extends({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      this.renderRoot(props)
	    );
	  };

	  return SubPopupMenu;
	}(_react.Component);

	;
	SubPopupMenu.propTypes = propTypes;
	exports["default"] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Animate = __webpack_require__(90);

	var _Animate2 = _interopRequireDefault(_Animate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _ChildrenUtils = __webpack_require__(91);

	var _AnimateChild = __webpack_require__(92);

	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);

	var _util = __webpack_require__(93);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var defaultKey = 'u_animate_' + Date.now();


	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}

	function noop() {}

	var propTypes = {
	  component: _react.PropTypes.any,
	  animation: _react.PropTypes.object,
	  transitionName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	  transitionEnter: _react.PropTypes.bool,
	  transitionAppear: _react.PropTypes.bool,
	  exclusive: _react.PropTypes.bool,
	  transitionLeave: _react.PropTypes.bool,
	  onEnd: _react.PropTypes.func,
	  onEnter: _react.PropTypes.func,
	  onLeave: _react.PropTypes.func,
	  onAppear: _react.PropTypes.func,
	  showProp: _react.PropTypes.string
	};

	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};

	var Animate = function (_Component) {
	  _inherits(Animate, _Component);

	  function Animate(props) {
	    _classCallCheck(this, Animate);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };

	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);

	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }

	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };

	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };

	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;

	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }

	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });

	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });

	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };

	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };

	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };

	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };

	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };

	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };

	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };

	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };

	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };

	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };

	  return Animate;
	}(_react.Component);

	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;

	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}

	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}

	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}

	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}

	function mergeChildren(prev, next) {
	  var ret = [];

	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });

	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });

	  ret = ret.concat(pendingChildren);

	  return ret;
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _tinperBeeCore = __webpack_require__(25);

	var _util = __webpack_require__(93);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};

	var propTypes = {
	  children: _react.PropTypes.any
	};

	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);

	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }

	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };

	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };

	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };

	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };

	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;

	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };

	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };

	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };

	  return AnimateChild;
	}(_react.Component);

	;

	AnimateChild.propTypes = propTypes;

	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _util = __webpack_require__(85);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	/* eslint react/no-is-mounted:0 */
	var propTypes = {
	  rootPrefixCls: _react.PropTypes.string,
	  eventKey: _react.PropTypes.string,
	  active: _react.PropTypes.bool,
	  children: _react.PropTypes.any,
	  selectedKeys: _react.PropTypes.array,
	  disabled: _react.PropTypes.bool,
	  title: _react.PropTypes.string,
	  onSelect: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onDeselect: _react.PropTypes.func,
	  parentMenu: _react.PropTypes.object,
	  onItemHover: _react.PropTypes.func,
	  onDestroy: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func
	};

	var defaultProps = {
	  onSelect: _util.noop,
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop
	};

	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);

	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.getPrefixCls = _this.getPrefixCls.bind(_this);
	    _this.getActiveClassName = _this.getActiveClassName.bind(_this);
	    _this.getDisabledClassName = _this.getDisabledClassName.bind(_this);
	    _this.getSelectedClassName = _this.getSelectedClassName.bind(_this);
	    _this.clearMenuItemMouseLeaveTimer = _this.clearMenuItemMouseLeaveTimer.bind(_this);
	    _this.isSelected = _this.isSelected.bind(_this);
	    return _this;
	  }

	  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
	    var props = this.props;
	    this.mounted = false;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	    if (props.parentMenu.menuItemInstance === this) {
	      this.clearMenuItemMouseLeaveTimer();
	    }
	  };

	  MenuItem.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	  };

	  MenuItem.prototype.onKeyDown = function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  };

	  MenuItem.prototype.onMouseLeave = function onMouseLeave(e) {
	    var _this2 = this;

	    var props = this.props;
	    var eventKey = props.eventKey;
	    var parentMenu = props.parentMenu;

	    parentMenu.menuItemInstance = this;
	    parentMenu.menuItemMouseLeaveFn = function () {
	      if (_this2.mounted && props.active) {
	        props.onItemHover({
	          key: eventKey,
	          item: _this2,
	          hover: false,
	          domEvent: e,
	          trigger: 'mouseleave'
	        });
	      }
	    };
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(parentMenu.menuItemMouseLeaveFn, 30);
	    props.onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  };

	  MenuItem.prototype.onMouseEnter = function onMouseEnter(e) {
	    var props = this.props;
	    var eventKey = props.eventKey;
	    var parentMenu = props.parentMenu;

	    this.clearMenuItemMouseLeaveTimer(parentMenu.menuItemInstance !== this);
	    if (parentMenu.subMenuInstance) {
	      parentMenu.subMenuInstance.clearSubMenuTimers();
	    }
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      domEvent: e,
	      trigger: 'mouseenter'
	    });
	    props.onMouseEnter({
	      key: eventKey,
	      domEvent: e
	    });
	  };

	  MenuItem.prototype.onClick = function onClick(e) {
	    var props = this.props;
	    var selected = this.isSelected();
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!selected) {
	      props.onSelect(info);
	    }
	  };

	  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  };

	  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  };

	  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  };

	  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  };

	  MenuItem.prototype.clearMenuItemMouseLeaveTimer = function clearMenuItemMouseLeaveTimer() {
	    var props = this.props;
	    var callFn = void 0;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	      if (callFn && parentMenu.menuItemMouseLeaveFn) {
	        parentMenu.menuItemMouseLeaveFn();
	      }
	      parentMenu.menuItemMouseLeaveFn = null;
	    }
	  };

	  MenuItem.prototype.isSelected = function isSelected() {
	    return this.props.selectedKeys.indexOf(this.props.eventKey) !== -1;
	  };

	  MenuItem.prototype.render = function render() {
	    var props = this.props;
	    var selected = this.isSelected();
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = _extends({}, props.attribute, {
	      title: props.title,
	      className: (0, _classnames2["default"])(classes),
	      role: 'menuitem',
	      'aria-selected': selected,
	      'aria-disabled': props.disabled
	    });
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = _extends({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({
	        style: style
	      }, attrs, mouseEvent),
	      props.children
	    );
	  };

	  return MenuItem;
	}(_react.Component);

	;

	MenuItem.isMenuItem = 1;

	MenuItem.defaultProps = defaultProps;
	MenuItem.propTypes = propTypes;

	exports["default"] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  renderMenuItem: _react.PropTypes.func,
	  index: _react.PropTypes.number,
	  className: _react.PropTypes.string,
	  rootPrefixCls: _react.PropTypes.string
	};

	var defaultProps = {
	  disabled: true
	};

	var MenuItemGroup = function (_Component) {
	  _inherits(MenuItemGroup, _Component);

	  function MenuItemGroup() {
	    _classCallCheck(this, MenuItemGroup);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  MenuItemGroup.prototype.renderInnerMenuItem = function renderInnerMenuItem(item, subIndex) {
	    var _props = this.props;
	    var renderMenuItem = _props.renderMenuItem;
	    var index = _props.index;

	    return renderMenuItem(item, index, subIndex);
	  };

	  MenuItemGroup.prototype.render = function render() {
	    var _props2 = this.props;
	    var _props2$className = _props2.className;
	    var className = _props2$className === undefined ? '' : _props2$className;
	    var title = _props2.title;
	    var children = _props2.children;
	    var rootPrefixCls = _props2.rootPrefixCls;

	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';

	    return _react2["default"].createElement(
	      'li',
	      { className: className + ' ' + rootPrefixCls + '-item-group' },
	      _react2["default"].createElement(
	        'div',
	        { className: titleClassName },
	        title
	      ),
	      _react2["default"].createElement(
	        'ul',
	        { className: listClassName },
	        _react2["default"].Children.map(children, this.renderInnerMenuItem.bind(this))
	      )
	    );
	  };

	  return MenuItemGroup;
	}(_react.Component);

	;

	MenuItemGroup.isMenuItemGroup = true;
	MenuItemGroup.propTypes = propTypes;
	MenuItemGroup.defaultProps = defaultProps;

	exports["default"] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  className: _react.PropTypes.string,
	  rootPrefixCls: _react.PropTypes.string
	};

	var Divider = function (_Component) {
	  _inherits(Divider, _Component);

	  function Divider() {
	    _classCallCheck(this, Divider);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Divider.prototype.render = function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var rootPrefixCls = _props.rootPrefixCls;

	    return _react2["default"].createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
	  };

	  return Divider;
	}(_react.Component);

	;

	Divider.propTypes = propTypes;

	exports["default"] = Divider;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var OptGroup = function (_React$Component) {
	  _inherits(OptGroup, _React$Component);

	  function OptGroup() {
	    _classCallCheck(this, OptGroup);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  return OptGroup;
	}(_react2["default"].Component);

	exports["default"] = OptGroup;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.preventDefaultEvent = preventDefaultEvent;
	exports.findIndexInValueByKey = findIndexInValueByKey;
	exports.findIndexInValueByLabel = findIndexInValueByLabel;
	exports.getSelectKeys = getSelectKeys;
	exports.findFirstMenuItem = findFirstMenuItem;
	exports.includesSeparators = includesSeparators;
	exports.splitBySeparators = splitBySeparators;

	var _beeMenus = __webpack_require__(83);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getValuePropValue(child) {
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  throw new Error('no key or value for ' + child);
	}

	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}

	function isCombobox(props) {
	  return props.combobox;
	}

	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}

	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}

	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}

	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}

	function preventDefaultEvent(e) {
	  e.preventDefault();
	}

	function findIndexInValueByKey(value, key) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (value[i].key === key) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}

	function findIndexInValueByLabel(value, label) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (toArray(value[i].label).join('') === label) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}

	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2["default"].Children.forEach(menuItems, function (item) {
	    if (item.type === _beeMenus.ItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (findIndexInValueByKey(value, itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}

	var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};

	var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'unselectable'
	};

	function findFirstMenuItem(children) {
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (child.type === _beeMenus.ItemGroup) {
	      var found = findFirstMenuItem(child.props.children);
	      if (found) {
	        return found;
	      }
	    } else if (!child.props.disabled) {
	      return child;
	    }
	  }
	  return null;
	}

	function includesSeparators(string, separators) {
	  for (var i = 0; i < separators.length; ++i) {
	    if (string.lastIndexOf(separators[i]) > 0) {
	      return true;
	    }
	  }
	  return false;
	}

	function splitBySeparators(string, separators) {
	  var reg = new RegExp('[' + separators.join() + ']');
	  var array = string.split(reg);
	  if (array[0] === '') {
	    array.shift();
	  }
	  if (array[array.length - 1] === '') {
	    array.pop();
	  }
	  return array;
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _index = __webpack_require__(100);

	var _index2 = _interopRequireDefault(_index);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _DropdownMenu = __webpack_require__(107);

	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _util = __webpack_require__(98);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};

	var propTypes = {
	  onPopupFocus: _react.PropTypes.func,
	  dropdownMatchSelectWidth: _react.PropTypes.bool,
	  dropdownAlign: _react.PropTypes.object,
	  visible: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  showSearch: _react.PropTypes.bool,
	  dropdownClassName: _react.PropTypes.string,
	  multiple: _react.PropTypes.bool,
	  inputValue: _react.PropTypes.string,
	  filterOption: _react.PropTypes.any,
	  options: _react.PropTypes.any,
	  prefixCls: _react.PropTypes.string,
	  popupClassName: _react.PropTypes.string,
	  children: _react.PropTypes.any
	};

	var SelectTrigger = function (_Component) {
	  _inherits(SelectTrigger, _Component);

	  function SelectTrigger(props) {
	    _classCallCheck(this, SelectTrigger);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.getInnerMenu = _this.getInnerMenu.bind(_this);
	    _this.getPopupDOMNode = _this.getPopupDOMNode.bind(_this);
	    _this.getDropdownTransitionName = _this.getDropdownTransitionName.bind(_this);
	    _this.getDropdownElement = _this.getDropdownElement.bind(_this);
	    _this.getDropdownPrefixCls = _this.getDropdownPrefixCls.bind(_this);
	    _this.saveMenu = _this.saveMenu.bind(_this);

	    return _this;
	  }

	  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
	    debugger;
	    var _props = this.props;
	    var visible = _props.visible;
	    var dropdownMatchSelectWidth = _props.dropdownMatchSelectWidth;

	    if (visible) {
	      var dropdownDOMNode = this.getPopupDOMNode();
	      if (dropdownDOMNode) {
	        var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
	        dropdownDOMNode.style[widthProp] = _reactDom2["default"].findDOMNode(this).offsetWidth + 'px';
	      }
	    }
	  };

	  SelectTrigger.prototype.getInnerMenu = function getInnerMenu() {
	    return this.popupMenu && this.popupMenu.refs.menu;
	  };

	  SelectTrigger.prototype.getPopupDOMNode = function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDomNode();
	  };

	  SelectTrigger.prototype.getDropdownElement = function getDropdownElement(newProps) {
	    var props = this.props;
	    return _react2["default"].createElement(_DropdownMenu2["default"], _extends({
	      ref: this.saveMenu
	    }, newProps, {
	      prefixCls: this.getDropdownPrefixCls(),
	      onMenuSelect: props.onMenuSelect,
	      onMenuDeselect: props.onMenuDeselect,
	      value: props.value,
	      defaultActiveFirstOption: props.defaultActiveFirstOption,
	      dropdownMenuStyle: props.dropdownMenuStyle
	    }));
	  };

	  SelectTrigger.prototype.getDropdownTransitionName = function getDropdownTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
	    }
	    return transitionName;
	  };

	  SelectTrigger.prototype.getDropdownPrefixCls = function getDropdownPrefixCls() {
	    return this.props.prefixCls + '-dropdown';
	  };

	  SelectTrigger.prototype.saveMenu = function saveMenu(menu) {
	    this.popupMenu = menu;
	  };

	  SelectTrigger.prototype.render = function render() {
	    var _popupClassName;

	    var _props2 = this.props;
	    var onPopupFocus = _props2.onPopupFocus;

	    var props = _objectWithoutProperties(_props2, ['onPopupFocus']);

	    var multiple = props.multiple;
	    var visible = props.visible;
	    var inputValue = props.inputValue;
	    var dropdownAlign = props.dropdownAlign;
	    var disabled = props.disabled;
	    var showSearch = props.showSearch;
	    var dropdownClassName = props.dropdownClassName;

	    var dropdownPrefixCls = this.getDropdownPrefixCls();
	    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	    var popupElement = this.getDropdownElement({
	      menuItems: props.options,
	      onPopupFocus: onPopupFocus,
	      multiple: multiple,
	      inputValue: inputValue,
	      visible: visible
	    });
	    var hideAction = void 0;
	    if (disabled) {
	      hideAction = [];
	    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
	      hideAction = ['click'];
	    } else {
	      hideAction = ['blur'];
	    }
	    return _react2["default"].createElement(
	      _index2["default"],
	      _extends({}, props, {
	        showAction: disabled ? [] : ['click'],
	        hideAction: hideAction,
	        ref: 'trigger',
	        popupPlacement: 'bottomLeft',
	        builtinPlacements: BUILT_IN_PLACEMENTS,
	        prefixCls: dropdownPrefixCls,
	        popupTransitionName: this.getDropdownTransitionName(),
	        onPopupVisibleChange: props.onDropdownVisibleChange,
	        popup: popupElement,
	        popupAlign: dropdownAlign,
	        popupVisible: visible,
	        getPopupContainer: props.getPopupContainer,
	        popupClassName: (0, _classnames2["default"])(popupClassName),
	        popupStyle: props.dropdownStyle
	      }),
	      props.children
	    );
	  };

	  return SelectTrigger;
	}(_react.Component);

	;

	SelectTrigger.propTypes = propTypes;

	exports["default"] = SelectTrigger;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(101);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _contains = __webpack_require__(102);

	var _contains2 = _interopRequireDefault(_contains);

	var _tinperBeeCore = __webpack_require__(25);

	var _Popup = __webpack_require__(103);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _utils = __webpack_require__(106);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	//import getContainerRenderMixin from './getContainerRenderMixin';

	function noop() {}

	function returnEmptyString() {
	  return '';
	}

	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

	var propTypes = {
	  children: _react.PropTypes.any,
	  action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
	  showAction: _react.PropTypes.any,
	  hideAction: _react.PropTypes.any,
	  getPopupClassNameFromAlign: _react.PropTypes.any,
	  onPopupVisibleChange: _react.PropTypes.func,
	  afterPopupVisibleChange: _react.PropTypes.func,
	  popup: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]).isRequired,
	  popupStyle: _react.PropTypes.object,
	  prefixCls: _react.PropTypes.string,
	  popupClassName: _react.PropTypes.string,
	  popupPlacement: _react.PropTypes.string,
	  builtinPlacements: _react.PropTypes.object,
	  popupTransitionName: _react.PropTypes.string,
	  popupAnimation: _react.PropTypes.any,
	  mouseEnterDelay: _react.PropTypes.number,
	  mouseLeaveDelay: _react.PropTypes.number,
	  zIndex: _react.PropTypes.number,
	  focusDelay: _react.PropTypes.number,
	  blurDelay: _react.PropTypes.number,
	  getPopupContainer: _react.PropTypes.func,
	  destroyPopupOnHide: _react.PropTypes.bool,
	  mask: _react.PropTypes.bool,
	  maskClosable: _react.PropTypes.bool,
	  onPopupAlign: _react.PropTypes.func,
	  popupAlign: _react.PropTypes.object,
	  popupVisible: _react.PropTypes.bool,
	  maskTransitionName: _react.PropTypes.string,
	  maskAnimation: _react.PropTypes.string
	};

	var defaultProps = {
	  prefixCls: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: []
	};

	var Trigger = function (_Component) {
	  _inherits(Trigger, _Component);

	  function Trigger(props) {
	    _classCallCheck(this, Trigger);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.state = {
	      popupVisible: !!_this.props.popupVisible || _this.props.defaultPopupVisible
	    };
	    //this.removeContainer = this.removeContainer.bind(this);
	    _this.getContainer = _this.getContainer.bind(_this);
	    _this.renderComponent = _this.renderComponent.bind(_this);
	    _this.isVisible = _this.isVisible.bind(_this);

	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onPopupMouseEnter = _this.onPopupMouseEnter.bind(_this);
	    _this.onPopupMouseLeave = _this.onPopupMouseLeave.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);

	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onTouchStart = _this.onTouchStart.bind(_this);
	    _this.onBlur = _this.onBlur.bind(_this);
	    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);

	    _this.getRootDomNode = _this.getRootDomNode.bind(_this);
	    _this.getPopupClassNameFromAlign = _this.getPopupClassNameFromAlign.bind(_this);
	    _this.getPopupAlign = _this.getPopupAlign.bind(_this);
	    _this.getComponent = _this.getComponent.bind(_this);
	    _this.setPopupVisible = _this.setPopupVisible.bind(_this);

	    _this.delaySetPopupVisible = _this.delaySetPopupVisible.bind(_this);
	    _this.clearDelayTimer = _this.clearDelayTimer.bind(_this);
	    _this.createTwoChains = _this.createTwoChains.bind(_this);
	    _this.isClickToShow = _this.isClickToShow.bind(_this);
	    _this.isClickToHide = _this.isClickToHide.bind(_this);

	    _this.isMouseEnterToShow = _this.isMouseEnterToShow.bind(_this);
	    _this.isMouseLeaveToHide = _this.isMouseLeaveToHide.bind(_this);
	    _this.isFocusToShow = _this.isFocusToShow.bind(_this);
	    _this.isBlurToHide = _this.isBlurToHide.bind(_this);
	    _this.forcePopupAlign = _this.forcePopupAlign.bind(_this);

	    _this.fireEvents = _this.fireEvents.bind(_this);
	    _this.close = _this.close.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }

	  Trigger.prototype.isVisible = function isVisible(instance) {
	    return instance.state.popupVisible;
	  };

	  Trigger.prototype.getContainer = function getContainer(instance) {
	    var popupContainer = document.createElement('div');
	    var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };

	  Trigger.prototype.renderComponent = function renderComponent(instance, componentArg, ready) {
	    if (instance._component || this.isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = this.getContainer(instance);
	      }
	      var component = instance.getComponent(componentArg);
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  };

	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;

	    this.mounted = false;
	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };

	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };

	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;

	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };

	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(this, null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	    if (this.isClickToHide()) {
	      if (state.popupVisible) {
	        if (!this.clickOutsideHandler) {
	          this.clickOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'mousedown', this.onDocumentClick);
	          this.touchOutsideHandler = (0, _tinperBeeCore.addEventListener)(document, 'touchstart', this.onDocumentClick);
	        }
	        return;
	      }
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  };

	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	    //this.removeContainer();
	  };

	  Trigger.prototype.onMouseEnter = function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  };

	  Trigger.prototype.onMouseLeave = function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };

	  Trigger.prototype.onPopupMouseEnter = function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  };

	  Trigger.prototype.onPopupMouseLeave = function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };

	  Trigger.prototype.onFocus = function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  };

	  Trigger.prototype.onMouseDown = function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  };

	  Trigger.prototype.onTouchStart = function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  };

	  Trigger.prototype.onBlur = function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  };

	  Trigger.prototype.onClick = function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  };

	  Trigger.prototype.onDocumentClick = function onDocumentClick(event) {
	    if (this.props.mask && !this.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
	      this.close();
	    }
	  };

	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component) {
	      return this.mounted ? this._component.getPopupDomNode() : null;
	    }
	    return null;
	  };

	  Trigger.prototype.getRootDomNode = function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  };

	  Trigger.prototype.getPopupClassNameFromAlign = function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;

	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };

	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };

	  Trigger.prototype.getComponent = function getComponent() {
	    var props = this.props;
	    var state = this.state;

	    var mouseProps = {};
	    if (this.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = this.onPopupMouseEnter;
	    }
	    if (this.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = this.onPopupMouseLeave;
	    }
	    return _react2["default"].createElement(
	      _Popup2["default"],
	      _extends({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: this.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }),
	      typeof props.popup === 'function' ? props.popup() : props.popup
	    );
	  };

	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  };

	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
	    var _this3 = this;

	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  };

	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };

	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };

	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    var _props = this.props;
	    var action = _props.action;
	    var showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    var _props2 = this.props;
	    var action = _props2.action;
	    var hideAction = _props2.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };

	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    var _props3 = this.props;
	    var action = _props3.action;
	    var showAction = _props3.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };

	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    var _props4 = this.props;
	    var action = _props4.action;
	    var hideAction = _props4.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };

	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    var _props5 = this.props;
	    var action = _props5.action;
	    var showAction = _props5.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };

	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    var _props6 = this.props;
	    var action = _props6.action;
	    var hideAction = _props6.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };

	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
	      this.popupInstance.alignInstance.forceAlign();
	    }
	  };

	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };

	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };

	  Trigger.prototype.render = function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var newChildProps = {};

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }

	    return _react2["default"].cloneElement(child, newChildProps);
	  };

	  return Trigger;
	}(_react.Component);

	;

	Trigger.propTypes = propTypes;
	Trigger.defaultProps = defaultProps;
	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM2.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();

	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);

	  return false;
	}
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _tinperBeeCore = __webpack_require__(25);

	var _beeAnimate = __webpack_require__(89);

	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

	var _PopupInner = __webpack_require__(104);

	var _PopupInner2 = _interopRequireDefault(_PopupInner);

	var _LazyRenderBox = __webpack_require__(105);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  visible: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  getClassNameFromAlign: _react.PropTypes.func,
	  onAlign: _react.PropTypes.func,
	  getRootDomNode: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  align: _react.PropTypes.any,
	  destroyPopupOnHide: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  prefixCls: _react.PropTypes.string,
	  onMouseLeave: _react.PropTypes.func
	};

	var Popup = function (_Component) {
	  _inherits(Popup, _Component);

	  function Popup() {
	    _classCallCheck(this, Popup);

	    var _this = _possibleConstructorReturn(this, _Component.call(this));

	    _this.onAlign = _this.onAlign.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	    _this.getTarget = _this.getTarget.bind(_this);
	    _this.getMaskTransitionName = _this.getMaskTransitionName.bind(_this);
	    _this.getTransitionName = _this.getTransitionName.bind(_this);
	    _this.getClassName = _this.getClassName.bind(_this);
	    _this.getPopupElement = _this.getPopupElement.bind(_this);
	    _this.getZIndexStyle = _this.getZIndexStyle.bind(_this);
	    _this.getMaskElement = _this.getMaskElement.bind(_this);
	    _this.saveAlign = _this.saveAlign.bind(_this);
	    return _this;
	  }

	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  };

	  Popup.prototype.onAlign = function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };

	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  };

	  Popup.prototype.getTarget = function getTarget() {
	    return this.props.getRootDomNode();
	  };

	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  };

	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };

	  Popup.prototype.getPopupElement = function getPopupElement() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;

	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = _extends({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(
	        _beeAnimate2["default"],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2["default"].createElement(
	          _tinperBeeCore.Align,
	          {
	            target: this.getTarget,
	            key: 'popup',
	            ref: this.saveAlign,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2["default"].createElement(
	            _PopupInner2["default"],
	            _extends({
	              visible: true
	            }, popupInnerProps),
	            props.children
	          )
	        ) : null
	      );
	    }
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2["default"].createElement(
	        _tinperBeeCore.Align,
	        {
	          target: this.getTarget,
	          key: 'popup',
	          ref: this.saveAlign,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2["default"].createElement(
	          _PopupInner2["default"],
	          _extends({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          props.children
	        )
	      )
	    );
	  };

	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };

	  Popup.prototype.getMaskElement = function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _beeAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };

	  Popup.prototype.saveAlign = function saveAlign(align) {
	    this.alignInstance = align;
	  };

	  Popup.prototype.render = function render() {
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };

	  return Popup;
	}(_react.Component);

	;

	Popup.propTypes = propTypes;
	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _LazyRenderBox = __webpack_require__(105);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  hiddenClassName: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  prefixCls: _react.PropTypes.string,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  children: _react.PropTypes.any
	};

	var PopupInner = function (_Component) {
	  _inherits(PopupInner, _Component);

	  function PopupInner() {
	    _classCallCheck(this, PopupInner);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  PopupInner.prototype.render = function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      _react2["default"].createElement(
	        _LazyRenderBox2["default"],
	        { className: props.prefixCls + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };

	  return PopupInner;
	}(_react.Component);

	;

	PopupInner.propTypes = propTypes;
	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  children: _react.PropTypes.any,
	  className: _react.PropTypes.string,
	  visible: _react.PropTypes.bool,
	  hiddenClassName: _react.PropTypes.string
	};

	var LazyRenderBox = function (_Component) {
	  _inherits(LazyRenderBox, _Component);

	  function LazyRenderBox() {
	    _classCallCheck(this, LazyRenderBox);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };

	  LazyRenderBox.prototype.render = function render() {
	    var _props = this.props;
	    var hiddenClassName = _props.hiddenClassName;
	    var visible = _props.visible;

	    var props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

	    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2["default"].createElement('div', props);
	    }

	    return _react2["default"].Children.only(props.children);
	  };

	  return LazyRenderBox;
	}(_react.Component);

	;
	LazyRenderBox.propTypes = propTypes;

	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}

	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}

	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _tinperBeeCore = __webpack_require__(25);

	var _beeMenus = __webpack_require__(83);

	var _beeMenus2 = _interopRequireDefault(_beeMenus);

	var _domScrollIntoView = __webpack_require__(108);

	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

	var _util = __webpack_require__(98);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  defaultActiveFirstOption: _react.PropTypes.bool,
	  value: _react.PropTypes.any,
	  dropdownMenuStyle: _react.PropTypes.object,
	  multiple: _react.PropTypes.bool,
	  onPopupFocus: _react.PropTypes.func,
	  onMenuDeSelect: _react.PropTypes.func,
	  onMenuSelect: _react.PropTypes.func,
	  prefixCls: _react.PropTypes.string,
	  menuItems: _react.PropTypes.any,
	  inputValue: _react.PropTypes.string,
	  visible: _react.PropTypes.bool
	};

	var DropdownMenu = function (_Component) {
	  _inherits(DropdownMenu, _Component);

	  function DropdownMenu() {
	    _classCallCheck(this, DropdownMenu);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  DropdownMenu.prototype.componentWillMount = function componentWillMount() {
	    this.lastInputValue = this.props.inputValue;
	  };

	  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
	    this.scrollActiveItemToView();
	    this.lastVisible = this.props.visible;
	  };

	  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    if (!nextProps.visible) {
	      this.lastVisible = false;
	    }
	    // freeze when hide
	    return nextProps.visible;
	  };

	  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (!prevProps.visible && props.visible) {
	      this.scrollActiveItemToView();
	    }
	    this.lastVisible = props.visible;
	    this.lastInputValue = props.inputValue;
	  };

	  DropdownMenu.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
	    // scroll into view
	    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
	    if (itemComponent) {
	      (0, _domScrollIntoView2["default"])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
	        onlyScrollIfNeeded: true
	      });
	    }
	  };

	  DropdownMenu.prototype.renderMenu = function renderMenu() {
	    var _this2 = this;

	    var props = this.props;
	    var menuItems = props.menuItems;
	    var defaultActiveFirstOption = props.defaultActiveFirstOption;
	    var value = props.value;
	    var prefixCls = props.prefixCls;
	    var multiple = props.multiple;
	    var onMenuSelect = props.onMenuSelect;
	    var inputValue = props.inputValue;

	    if (menuItems && menuItems.length) {
	      var _ret = function () {
	        var menuProps = {};
	        if (multiple) {
	          menuProps.onDeselect = props.onMenuDeselect;
	          menuProps.onSelect = onMenuSelect;
	        } else {
	          menuProps.onClick = onMenuSelect;
	        }

	        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	        var activeKeyProps = {};

	        var clonedMenuItems = menuItems;
	        if (selectedKeys.length) {
	          (function () {
	            if (props.visible && !_this2.lastVisible) {
	              activeKeyProps.activeKey = selectedKeys[0];
	            }
	            var foundFirst = false;
	            // set firstActiveItem via cloning menus
	            // for scroll into view
	            var clone = function clone(item) {
	              if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
	                foundFirst = true;
	                return (0, _react.cloneElement)(item, {
	                  ref: function ref(_ref) {
	                    _this2.firstActiveItem = _ref;
	                  }
	                });
	              }
	              return item;
	            };

	            clonedMenuItems = menuItems.map(function (item) {
	              if (item.type === _beeMenus.ItemGroup) {
	                var children = (0, _tinperBeeCore.toArray)(item.props.children).map(clone);
	                return (0, _react.cloneElement)(item, {}, children);
	              }
	              return clone(item);
	            });
	          })();
	        }

	        // clear activeKey when inputValue change
	        if (inputValue !== _this2.lastInputValue) {
	          activeKeyProps.activeKey = '';
	        }

	        return {
	          v: _react2["default"].createElement(
	            _beeMenus2["default"],
	            _extends({
	              ref: 'menu',
	              style: _this2.props.dropdownMenuStyle,
	              defaultActiveFirst: defaultActiveFirstOption
	            }, activeKeyProps, {
	              multiple: multiple,
	              focusable: false
	            }, menuProps, {
	              selectedKeys: selectedKeys,
	              prefixCls: prefixCls + '-menu'
	            }),
	            clonedMenuItems
	          )
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	    return null;
	  };

	  DropdownMenu.prototype.render = function render() {
	    var renderMenu = this.renderMenu();
	    return renderMenu ? _react2["default"].createElement(
	      'div',
	      {
	        style: { overflow: 'auto' },
	        onFocus: this.props.onPopupFocus,
	        onMouseDown: _util.preventDefaultEvent
	      },
	      renderMenu
	    ) : null;
	  };

	  return DropdownMenu;
	}(_react.Component);

	;

	exports["default"] = DropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(109);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(110);

	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }

	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;

	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;

	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;

	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }

	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }

	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}

	module.exports = scrollIntoView;

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }

	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;

	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}

	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Option = function (_React$Component) {
	  _inherits(Option, _React$Component);

	  function Option() {
	    _classCallCheck(this, Option);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  return Option;
	}(_react2["default"].Component);

	Option.propTypes = {
	  value: _react2["default"].PropTypes.string
	};
	exports["default"] = Option;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Checkbox = __webpack_require__(113);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Checkbox2["default"];
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	//import warning from 'warning';


	var propTypes = {

	  colors: _react.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

	  disabled: _react.PropTypes.bool

	};

	var defaultProps = {
	  disabled: false,
	  colors: 'primary',
	  clsPrefix: 'u-checkbox'
	};
	var clsPrefix = 'u-checkbox';

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox(props) {
	    _classCallCheck(this, Checkbox);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.state = {
	      checked: _this.props.checked
	    };
	    return _this;
	  }

	  Checkbox.prototype.changeState = function changeState() {
	    if (this.props.disabled == false) {
	      this.setState({ checked: !this.state.checked });
	    }
	  };

	  Checkbox.prototype.render = function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var colors = _props.colors;
	    var size = _props.size;
	    var className = _props.className;
	    var children = _props.children;
	    var clsPrefix = _props.clsPrefix;

	    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'size', 'className', 'children', 'clsPrefix']);

	    var input = _react2["default"].createElement('input', _extends({}, others, {
	      type: 'checkbox',
	      disabled: this.props.disabled
	    }));

	    var classes = {
	      'is-checked': this.state.checked,
	      disabled: disabled
	    };

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (colors) {
	      classes[clsPrefix + '-' + colors] = true;
	    }

	    if (size) {
	      classes[clsPrefix + '-' + size] = true;
	    }

	    var classNames = (0, _classnames2["default"])(clsPrefix, classes);

	    return _react2["default"].createElement(
	      'label',
	      _extends({}, others, { className: classNames, onClick: this.changeState.bind(this) }),
	      input,
	      _react2["default"].createElement(
	        'label',
	        { className: 'u-checkbox-label' },
	        children
	      )
	    );
	  };

	  return Checkbox;
	}(_react2["default"].Component);

	Checkbox.propTypes = propTypes;
	Checkbox.defaultProps = defaultProps;

	exports["default"] = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(115);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		type: _react.PropTypes.string

	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};

	var Icon = function (_Component) {
		_inherits(Icon, _Component);

		function Icon(props) {
			_classCallCheck(this, Icon);

			return _possibleConstructorReturn(this, _Component.call(this, props));
		}

		Icon.prototype.render = function render() {
			var _props = this.props;
			var type = _props.type;
			var className = _props.className;
			var clsPrefix = _props.clsPrefix;

			var others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);

			var clsObj = {};

			if (type) {
				type = type.replace(/-/g, "");
				clsObj[clsPrefix + '-' + type] = true;
			}
			var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);

			return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
		};

		return Icon;
	}(_react.Component);

	Icon.defaultProps = defaultProps;
	Icon.PropTypes = _react.PropTypes;

	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UploadProps = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.Dragger = Dragger;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(117);

	var _index2 = _interopRequireDefault(_index);

	var _uploadList = __webpack_require__(123);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _getFileItem = __webpack_require__(127);

	var _getFileItem2 = _interopRequireDefault(_getFileItem);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _objectAssign = __webpack_require__(42);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _interface = __webpack_require__(126);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function T() {
	  return true;
	}

	// Fix IE file.status problem
	// via coping a new Object
	function fileToObject(file) {
	  return {
	    lastModified: file.lastModified,
	    lastModifiedDate: file.lastModifiedDate,
	    name: file.filename || file.name,
	    size: file.size,
	    type: file.type,
	    uid: file.uid,
	    response: file.response,
	    error: file.error,
	    percent: 0,
	    originFileObj: file,
	    status: null
	  };
	}

	/**
	 * 生成Progress percent: 0.1 -> 0.98
	 *   - for ie
	 */
	function genPercentAdd() {
	  var k = 0.1;
	  var i = 0.01;
	  var end = 0.98;
	  return function (s) {
	    var start = s;
	    if (start >= end) {
	      return start;
	    }

	    start += k;
	    k = k - i;
	    if (k < 0.001) {
	      k = 0.001;
	    }
	    return start * 100;
	  };
	}

	exports.UploadProps = _interface.UploadProps;
	function Dragger(props) {
	  return _react2["default"].createElement(Upload, _extends({}, props, { type: 'drag', style: { height: props.height } }));
	}

	var Upload = function (_React$Component) {
	  _inherits(Upload, _React$Component);

	  function Upload(props) {
	    _classCallCheck(this, Upload);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.onStart = function (file) {
	      var targetItem = void 0;
	      var nextFileList = _this.state.fileList.concat();
	      if (file.length > 0) {
	        targetItem = file.map(function (f) {
	          var fileObject = fileToObject(f);
	          fileObject.status = 'uploading';
	          return fileObject;
	        });
	        nextFileList = nextFileList.concat(targetItem);
	      } else {
	        targetItem = fileToObject(file);
	        targetItem.status = 'uploading';
	        nextFileList.push(targetItem);
	      }
	      _this.onChange({
	        file: targetItem,
	        fileList: nextFileList
	      });
	      // fix ie progress
	      //if (!(window as any).FormData) {
	      if (!window.FormData) {
	        _this.autoUpdateProgress(0, targetItem);
	      }
	    };

	    _this.onSuccess = function (response, file) {
	      _this.clearProgressTimer();
	      try {
	        if (typeof response === 'string') {
	          response = JSON.parse(response);
	        }
	      } catch (e) {/* do nothing */
	      }
	      var fileList = _this.state.fileList;
	      var targetItem = (0, _getFileItem2["default"])(file, fileList);
	      // removed
	      if (!targetItem) {
	        return;
	      }
	      targetItem.status = 'done';
	      targetItem.response = response;
	      _this.onChange({
	        file: targetItem,
	        fileList: fileList
	      });
	    };

	    _this.onProgress = function (e, file) {
	      var fileList = _this.state.fileList;
	      var targetItem = (0, _getFileItem2["default"])(file, fileList);
	      // removed
	      if (!targetItem) {
	        return;
	      }
	      targetItem.percent = e.percent;
	      _this.onChange({
	        event: e,
	        file: targetItem,
	        fileList: _this.state.fileList
	      });
	    };

	    _this.onError = function (error, response, file) {
	      _this.clearProgressTimer();
	      var fileList = _this.state.fileList;
	      var targetItem = (0, _getFileItem2["default"])(file, fileList);
	      // removed
	      if (!targetItem) {
	        return;
	      }
	      targetItem.error = error;
	      targetItem.response = response;
	      targetItem.status = 'error';
	      _this.handleRemove(targetItem);
	    };

	    _this.handleManualRemove = function (file) {
	      _this.refs.upload.abort(file);
	      file.status = 'removed'; // eslint-disable-line
	      _this.handleRemove(file);
	    };

	    _this.onChange = function (info) {
	      if (!('fileList' in _this.props)) {
	        _this.setState({ fileList: info.fileList });
	      }

	      var onChange = _this.props.onChange;
	      if (onChange) {
	        onChange(info);
	      }
	    };

	    _this.onFileDrop = function (e) {
	      _this.setState({
	        dragState: e.type
	      });
	    };

	    _this.state = {
	      fileList: _this.props.fileList || _this.props.defaultFileList || [],
	      dragState: 'drop'
	    };
	    return _this;
	  }

	  Upload.prototype.autoUpdateProgress = function autoUpdateProgress(_, file) {
	    var _this2 = this;

	    var getPercent = genPercentAdd();
	    var curPercent = 0;
	    this.progressTimer = setInterval(function () {
	      curPercent = getPercent(curPercent);
	      _this2.onProgress({
	        percent: curPercent
	      }, file);
	    }, 200);
	  };

	  Upload.prototype.removeFile = function removeFile(file) {
	    var fileList = this.state.fileList;
	    var targetItem = (0, _getFileItem2["default"])(file, fileList);
	    var index = fileList.indexOf(targetItem);
	    if (index !== -1) {
	      fileList.splice(index, 1);
	      return fileList;
	    }
	    return null;
	  };

	  Upload.prototype.handleRemove = function handleRemove(file) {
	    var onRemove = this.props.onRemove;
	    if (onRemove) {
	      onRemove(file);
	    }
	    var fileList = this.removeFile(file);
	    if (fileList) {
	      this.onChange({
	        file: file,
	        fileList: fileList
	      });
	    }
	  };

	  Upload.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('fileList' in nextProps) {
	      this.setState({
	        fileList: nextProps.fileList || []
	      });
	    }
	  };

	  Upload.prototype.clearProgressTimer = function clearProgressTimer() {
	    clearInterval(this.progressTimer);
	  };

	  Upload.prototype.render = function render() {
	    var _classNames2;

	    var _props = this.props;
	    var _props$prefixCls = _props.prefixCls;
	    var prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls;
	    var showUploadList = _props.showUploadList;
	    var listType = _props.listType;
	    var onPreview = _props.onPreview;
	    var type = _props.type;
	    var disabled = _props.disabled;
	    var children = _props.children;
	    var className = _props.className;


	    var rcUploadProps = (0, _objectAssign2["default"])({}, this.props, {
	      onStart: this.onStart,
	      onError: this.onError,
	      onProgress: this.onProgress,
	      onSuccess: this.onSuccess
	    });
	    delete rcUploadProps.className;

	    var uploadList = showUploadList ? _react2["default"].createElement(_uploadList2["default"], {
	      listType: listType,
	      items: this.state.fileList,
	      onPreview: onPreview,
	      onRemove: this.handleManualRemove
	    }) : null;

	    if (type === 'drag') {
	      var _classNames;

	      var dragCls = (0, _classnames2["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-drag', true), _defineProperty(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
	        return file.status === 'uploading';
	      })), _defineProperty(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
	      return _react2["default"].createElement(
	        'span',
	        { className: className },
	        _react2["default"].createElement(
	          'div',
	          {
	            className: dragCls,
	            onDrop: this.onFileDrop,
	            onDragOver: this.onFileDrop,
	            onDragLeave: this.onFileDrop
	          },
	          _react2["default"].createElement(
	            _index2["default"],
	            _extends({}, rcUploadProps, { ref: 'upload', className: prefixCls + '-btn' }),
	            _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-drag-container' },
	              children
	            )
	          )
	        ),
	        uploadList
	      );
	    }

	    var uploadButtonCls = (0, _classnames2["default"])(prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-select', true), _defineProperty(_classNames2, prefixCls + '-select-' + listType, true), _defineProperty(_classNames2, prefixCls + '-disabled', disabled), _classNames2));

	    var uploadButton = _react2["default"].createElement(
	      'div',
	      { className: uploadButtonCls, style: { display: children ? '' : 'none' } },
	      _react2["default"].createElement(_index2["default"], _extends({}, rcUploadProps, { ref: 'upload' }))
	    );

	    if (listType === 'picture-card') {
	      return _react2["default"].createElement(
	        'span',
	        { className: className },
	        uploadList,
	        uploadButton
	      );
	    }
	    return _react2["default"].createElement(
	      'span',
	      { className: className },
	      uploadButton,
	      uploadList
	    );
	  };

	  return Upload;
	}(_react2["default"].Component);

	Upload.Dragger = Dragger;
	Upload.defaultProps = {
	  prefixCls: 'u-upload',
	  type: 'select',
	  multiple: false,
	  action: '',
	  data: {},
	  accept: '',
	  beforeUpload: T,
	  showUploadList: true,
	  listType: 'text', // or pictrue
	  className: '',
	  disabled: false,
	  supportServerRender: true
	};
	exports["default"] = Upload;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Upload = __webpack_require__(118);

	var _Upload2 = _interopRequireDefault(_Upload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Upload2["default"];
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _AjaxUploader = __webpack_require__(119);

	var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

	var _IframeUploader = __webpack_require__(122);

	var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function empty() {}

	var propTypes = {
	  component: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  prefixCls: _react.PropTypes.string,
	  action: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  multipart: _react.PropTypes.bool,
	  onError: _react.PropTypes.func,
	  onSuccess: _react.PropTypes.func,
	  onProgress: _react.PropTypes.func,
	  onStart: _react.PropTypes.func,
	  data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  headers: _react.PropTypes.object,
	  accept: _react.PropTypes.string,
	  multiple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  beforeUpload: _react.PropTypes.func,
	  customRequest: _react.PropTypes.func,
	  onReady: _react.PropTypes.func,
	  withCredentials: _react.PropTypes.bool,
	  supportServerRender: _react.PropTypes.bool
	};
	var defaultProps = {
	  component: 'span',
	  prefixCls: 'u-upload',
	  data: {},
	  headers: {},
	  name: 'file',
	  multipart: false,
	  onProgress: empty,
	  onReady: empty,
	  onStart: empty,
	  onError: empty,
	  onSuccess: empty,
	  supportServerRender: false,
	  multiple: false,
	  beforeUpload: null,
	  customRequest: null,
	  withCredentials: false
	};

	var Upload = function (_Component) {
	  _inherits(Upload, _Component);

	  function Upload(props) {
	    _classCallCheck(this, Upload);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.state = {
	      Component: null
	    };
	    _this.getComponent = _this.getComponent.bind(_this);
	    _this.abort = _this.abort.bind(_this);
	    return _this;
	  }

	  Upload.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.supportServerRender) {
	      /* eslint react/no-did-mount-set-state:0 */
	      this.setState({
	        Component: this.getComponent()
	      }, this.props.onReady);
	    }
	  };

	  Upload.prototype.getComponent = function getComponent() {
	    return typeof FormData !== 'undefined' ? _AjaxUploader2["default"] : _IframeUploader2["default"];
	  };

	  Upload.prototype.abort = function abort(file) {
	    this.refs.inner.abort(file);
	  };

	  Upload.prototype.render = function render() {
	    if (this.props.supportServerRender) {
	      var _Component2 = this.state.Component;

	      if (_Component2) {
	        return _react2["default"].createElement(_Component2, _extends({}, this.props, { ref: 'inner' }));
	      }
	      return null;
	    }
	    var Component = this.getComponent();
	    return _react2["default"].createElement(Component, _extends({}, this.props, { ref: 'inner' }));
	  };

	  return Upload;
	}(_react.Component);

	;

	Upload.propTypes = propTypes;
	Upload.defaultProps = defaultProps;
	exports["default"] = Upload;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _request = __webpack_require__(120);

	var _request2 = _interopRequireDefault(_request);

	var _uid = __webpack_require__(121);

	var _uid2 = _interopRequireDefault(_uid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint react/no-is-mounted:0*/

	var propTypes = {
	  component: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  prefixCls: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  multiple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  accept: _react.PropTypes.string,
	  children: _react.PropTypes.any,
	  onStart: _react.PropTypes.func,
	  data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  headers: _react.PropTypes.object,
	  beforeUpload: _react.PropTypes.func,
	  customRequest: _react.PropTypes.func,
	  withCredentials: _react.PropTypes.bool
	};

	var AjaxUploader = function (_Component) {
	  _inherits(AjaxUploader, _Component);

	  function AjaxUploader(props) {
	    _classCallCheck(this, AjaxUploader);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.reqs = {};
	    _this.state = {
	      uid: (0, _uid2["default"])()
	    };

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.onFileDrop = _this.onFileDrop.bind(_this);
	    _this.uploadFiles = _this.uploadFiles.bind(_this);

	    _this.upload = _this.upload.bind(_this);
	    _this.post = _this.post.bind(_this);
	    _this.reset = _this.reset.bind(_this);
	    _this.abort = _this.abort.bind(_this);
	    return _this;
	  }

	  AjaxUploader.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	    this.abort();
	  };

	  AjaxUploader.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	  };

	  AjaxUploader.prototype.onChange = function onChange(e) {
	    var files = e.target.files;
	    this.uploadFiles(files);
	    this.reset();
	  };

	  AjaxUploader.prototype.onClick = function onClick() {
	    var el = this.refs.file;
	    if (!el) {
	      return;
	    }
	    el.click();
	  };

	  AjaxUploader.prototype.onKeyDown = function onKeyDown(e) {
	    if (e.key === 'Enter') {
	      this.onClick();
	    }
	  };

	  AjaxUploader.prototype.onFileDrop = function onFileDrop(e) {
	    if (e.type === 'dragover') {
	      e.preventDefault();
	      return;
	    }

	    var files = e.dataTransfer.files;
	    this.uploadFiles(files);

	    e.preventDefault();
	  };

	  AjaxUploader.prototype.uploadFiles = function uploadFiles(files) {
	    var postFiles = Array.prototype.slice.call(files);
	    var len = postFiles.length;
	    for (var i = 0; i < len; i++) {
	      var file = postFiles[i];
	      file.uid = (0, _uid2["default"])();
	      this.upload(file, postFiles);
	    }
	  };

	  AjaxUploader.prototype.upload = function upload(file, fileList) {
	    var _this2 = this;

	    var props = this.props;

	    if (!props.beforeUpload) {
	      // always async in case use react state to keep fileList
	      return setTimeout(function () {
	        return _this2.post(file);
	      }, 0);
	    }

	    var before = props.beforeUpload(file, fileList);
	    if (before && before.then) {
	      before.then(function (processedFile) {
	        var processedFileType = Object.prototype.toString.call(processedFile);
	        if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
	          _this2.post(processedFile);
	        } else {
	          _this2.post(file);
	        }
	      });
	    } else if (before !== false) {
	      setTimeout(function () {
	        return _this2.post(file);
	      }, 0);
	    }
	  };

	  AjaxUploader.prototype.post = function post(file) {
	    var _this3 = this;

	    if (!this.mounted) {
	      return;
	    }
	    var props = this.props;
	    var data = props.data;
	    var onStart = props.onStart;

	    if (typeof data === 'function') {
	      data = data(file);
	    }
	    var uid = file.uid;

	    var request = props.customRequest || _request2["default"];
	    this.reqs[uid] = request({
	      action: props.action,
	      filename: props.name,
	      file: file,
	      data: data,
	      headers: props.headers,
	      withCredentials: props.withCredentials,
	      onProgress: function onProgress(e) {
	        props.onProgress(e, file);
	      },
	      onSuccess: function onSuccess(ret) {
	        delete _this3.reqs[uid];
	        props.onSuccess(ret, file);
	      },
	      onError: function onError(err, ret) {
	        delete _this3.reqs[uid];
	        props.onError(err, ret, file);
	      }
	    });
	    onStart(file);
	  };

	  AjaxUploader.prototype.reset = function reset() {
	    this.setState({
	      uid: (0, _uid2["default"])()
	    });
	  };

	  AjaxUploader.prototype.abort = function abort(file) {
	    var reqs = this.reqs;

	    if (file) {
	      var uid = file;
	      if (file && file.uid) {
	        uid = file.uid;
	      }
	      if (reqs[uid]) {
	        reqs[uid].abort();
	        delete reqs[uid];
	      }
	    } else {
	      Object.keys(reqs).forEach(function (uid) {
	        reqs[uid].abort();
	        delete reqs[uid];
	      });
	    }
	  };

	  AjaxUploader.prototype.render = function render() {
	    var _classNames;

	    var _props = this.props;
	    var Tag = _props.component;
	    var prefixCls = _props.prefixCls;
	    var className = _props.className;
	    var disabled = _props.disabled;
	    var style = _props.style;
	    var multiple = _props.multiple;
	    var accept = _props.accept;
	    var children = _props.children;

	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));
	    var events = disabled ? {} : {
	      onClick: this.onClick,
	      onKeyDown: this.onKeyDown,
	      onDrop: this.onFileDrop,
	      onDragOver: this.onFileDrop,
	      tabIndex: '0'
	    };
	    return _react2["default"].createElement(
	      Tag,
	      _extends({}, events, {
	        className: cls,
	        role: 'button',
	        style: style
	      }),
	      _react2["default"].createElement('input', {
	        type: 'file',
	        ref: 'file',
	        key: this.state.uid,
	        style: { display: 'none' },
	        accept: accept,
	        multiple: multiple,
	        onChange: this.onChange
	      }),
	      children
	    );
	  };

	  return AjaxUploader;
	}(_react.Component);

	;
	AjaxUploader.propTypes = propTypes;
	exports["default"] = AjaxUploader;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = upload;
	function getError(option, xhr) {
	  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = option.action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	// option {
	//  onProgress: (event: { percent: number }): void,
	//  onError: (event: Error, body?: Object): void,
	//  onSuccess: (body: Object): void,
	//  data: Object,
	//  filename: String,
	//  file: File,
	//  withCredentials: Boolean,
	//  action: String,
	//  headers: Object,
	// }
	function upload(option) {
	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();

	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  formData.append(option.filename, option.file);

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    // allow success when 2xx status
	    // see https://github.com/react-component/upload/issues/34
	    if (xhr.status < 200 || xhr.status >= 300) {
	      return option.onError(getError(option, xhr), getBody(xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  xhr.open('post', option.action, true);

	  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  var headers = option.headers || {};

	  // when set headers['X-Requested-With'] = null , can close default XHR header
	  // see https://github.com/react-component/upload/issues/33
	  if (headers['X-Requested-With'] !== null) {
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	  }

	  for (var h in headers) {
	    if (headers.hasOwnProperty(h) && headers[h] !== null) {
	      xhr.setRequestHeader(h, headers[h]);
	    }
	  }
	  xhr.send(formData);

	  return {
	    abort: function abort() {
	      xhr.abort();
	    }
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = uid;
	var now = +new Date();
	var index = 0;

	function uid() {
	  return "u-upload-" + now + "-" + ++index;
	}
	module.exports = exports["default"];

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _uid = __webpack_require__(121);

	var _uid2 = _interopRequireDefault(_uid);

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var IFRAME_STYLE = {
	  position: 'absolute',
	  top: 0,
	  opacity: 0,
	  filter: 'alpha(opacity=0)',
	  left: 0,
	  zIndex: 9999
	};

	var propTypes = {
	  component: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  disabled: _react.PropTypes.bool,
	  prefixCls: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  accept: _react.PropTypes.string,
	  onStart: _react.PropTypes.func,
	  multiple: _react.PropTypes.bool,
	  children: _react.PropTypes.any,
	  data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  action: _react.PropTypes.string,
	  name: _react.PropTypes.string
	};
	// diferent from AjaxUpload, can only upload on at one time, serial seriously

	var IframeUploader = function (_Component) {
	  _inherits(IframeUploader, _Component);

	  function IframeUploader(props) {
	    _classCallCheck(this, IframeUploader);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	    _this.file = {};
	    _this.state = {
	      uploading: false
	    };

	    _this.onLoad = _this.onLoad.bind(_this);
	    _this.onChange = _this.onChange.bind(_this);
	    _this.getIframeNode = _this.getIframeNode.bind(_this);
	    _this.getIframeDocument = _this.getIframeDocument.bind(_this);
	    _this.getFormNode = _this.getFormNode.bind(_this);
	    _this.getFormInputNode = _this.getFormInputNode.bind(_this);
	    _this.getFormDataNode = _this.getFormDataNode.bind(_this);
	    _this.getFileForMultiple = _this.getFileForMultiple.bind(_this);
	    _this.getIframeHTML = _this.getIframeHTML.bind(_this);
	    _this.initIframeSrc = _this.initIframeSrc.bind(_this);
	    _this.initIframe = _this.initIframe.bind(_this);
	    _this.endUpload = _this.endUpload.bind(_this);
	    _this.startUpload = _this.startUpload.bind(_this);
	    _this.updateIframeWH = _this.updateIframeWH.bind(_this);
	    _this.abort = _this.abort.bind(_this);
	    _this.post = _this.post.bind(_this);
	    return _this;
	  }

	  IframeUploader.prototype.componentDidMount = function componentDidMount() {
	    this.updateIframeWH();
	    this.initIframe();
	  };

	  IframeUploader.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.updateIframeWH();
	  };

	  IframeUploader.prototype.onLoad = function onLoad() {
	    if (!this.state.uploading) {
	      return;
	    }
	    var props = this.props;
	    var file = this.file;

	    var response = void 0;
	    try {
	      var doc = this.getIframeDocument();
	      var script = doc.getElementsByTagName('script')[0];
	      if (script && script.parentNode === doc.body) {
	        doc.body.removeChild(script);
	      }
	      response = doc.body.innerHTML;
	      props.onSuccess(response, file);
	    } catch (err) {
	      (0, _warning2["default"])(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
	      response = 'cross-domain';
	      props.onError(err, null, file);
	    }
	    this.endUpload();
	  };

	  IframeUploader.prototype.onChange = function onChange() {
	    var _this2 = this;

	    var target = this.getFormInputNode();
	    // ie8/9 don't support FileList Object
	    // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
	    var file = this.file = {
	      uid: (0, _uid2["default"])(),
	      name: target.value
	    };
	    this.startUpload();
	    var props = this.props;

	    if (!props.beforeUpload) {
	      return this.post(file);
	    }
	    var before = props.beforeUpload(file);
	    if (before && before.then) {
	      before.then(function () {
	        _this2.post(file);
	      }, function () {
	        _this2.endUpload();
	      });
	    } else if (before !== false) {
	      this.post(file);
	    } else {
	      this.endUpload();
	    }
	  };

	  IframeUploader.prototype.getIframeNode = function getIframeNode() {
	    return this.refs.iframe;
	  };

	  IframeUploader.prototype.getIframeDocument = function getIframeDocument() {
	    return this.getIframeNode().contentDocument;
	  };

	  IframeUploader.prototype.getFormNode = function getFormNode() {
	    return this.getIframeDocument().getElementById('form');
	  };

	  IframeUploader.prototype.getFormInputNode = function getFormInputNode() {
	    return this.getIframeDocument().getElementById('input');
	  };

	  IframeUploader.prototype.getFormDataNode = function getFormDataNode() {
	    return this.getIframeDocument().getElementById('data');
	  };

	  IframeUploader.prototype.getFileForMultiple = function getFileForMultiple(file) {
	    return this.props.multiple ? [file] : file;
	  };

	  IframeUploader.prototype.getIframeHTML = function getIframeHTML(domain) {
	    var domainScript = '';
	    var domainInput = '';
	    if (domain) {
	      domainScript = '<script>document.domain="' + domain + '";</script>';
	      domainInput = '<input name="_documentDomain" value="' + domain + '" />';
	    }
	    return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
	  };

	  IframeUploader.prototype.initIframeSrc = function initIframeSrc() {
	    if (this.domain) {
	      this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
	    }
	  };

	  IframeUploader.prototype.initIframe = function initIframe() {
	    var iframeNode = this.getIframeNode();
	    var win = iframeNode.contentWindow;
	    var doc = void 0;
	    this.domain = this.domain || '';
	    this.initIframeSrc();
	    try {
	      doc = win.document;
	    } catch (e) {
	      this.domain = document.domain;
	      this.initIframeSrc();
	      win = iframeNode.contentWindow;
	      doc = win.document;
	    }
	    doc.open('text/html', 'replace');
	    doc.write(this.getIframeHTML(this.domain));
	    doc.close();
	    this.getFormInputNode().onchange = this.onChange;
	  };

	  IframeUploader.prototype.endUpload = function endUpload() {
	    if (this.state.uploading) {
	      this.file = {};
	      // hack avoid batch
	      this.state.uploading = false;
	      this.setState({
	        uploading: false
	      });
	      this.initIframe();
	    }
	  };

	  IframeUploader.prototype.startUpload = function startUpload() {
	    if (!this.state.uploading) {
	      this.state.uploading = true;
	      this.setState({
	        uploading: true
	      });
	    }
	  };

	  IframeUploader.prototype.updateIframeWH = function updateIframeWH() {
	    var rootNode = _reactDom2["default"].findDOMNode(this);
	    var iframeNode = this.getIframeNode();
	    iframeNode.style.height = rootNode.offsetHeight + 'px';
	    iframeNode.style.width = rootNode.offsetWidth + 'px';
	  };

	  IframeUploader.prototype.abort = function abort(file) {
	    if (file) {
	      var uid = file;
	      if (file && file.uid) {
	        uid = file.uid;
	      }
	      if (uid === this.file.uid) {
	        this.endUpload();
	      }
	    } else {
	      this.endUpload();
	    }
	  };

	  IframeUploader.prototype.post = function post(file) {
	    var formNode = this.getFormNode();
	    var dataSpan = this.getFormDataNode();
	    var data = this.props.data;
	    var onStart = this.props.onStart;

	    if (typeof data === 'function') {
	      data = data(file);
	    }
	    var inputs = [];
	    for (var key in data) {
	      if (data.hasOwnProperty(key)) {
	        inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	      }
	    }
	    dataSpan.innerHTML = inputs.join('');
	    formNode.submit();
	    dataSpan.innerHTML = '';
	    onStart(file);
	  };

	  IframeUploader.prototype.render = function render() {
	    var _classNames;

	    var _props = this.props;
	    var Tag = _props.component;
	    var disabled = _props.disabled;
	    var className = _props.className;
	    var prefixCls = _props.prefixCls;
	    var children = _props.children;
	    var style = _props.style;

	    var iframeStyle = _extends({}, IFRAME_STYLE, {
	      display: this.state.uploading || disabled ? 'none' : ''
	    });
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));
	    return _react2["default"].createElement(
	      Tag,
	      {
	        className: cls,
	        style: _extends({ position: 'relative', zIndex: 0 }, style)
	      },
	      _react2["default"].createElement('iframe', {
	        ref: 'iframe',
	        onLoad: this.onLoad,
	        style: iframeStyle
	      }),
	      children
	    );
	  };

	  return IframeUploader;
	}(_react.Component);

	;
	IframeUploader.propTypes = propTypes;
	exports["default"] = IframeUploader;
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeAnimate = __webpack_require__(89);

	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

	var _beeIcon = __webpack_require__(114);

	var _beeIcon2 = _interopRequireDefault(_beeIcon);

	var _beeProgressBar = __webpack_require__(124);

	var _beeProgressBar2 = _interopRequireDefault(_beeProgressBar);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _interface = __webpack_require__(126);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	var previewFile = function previewFile(file, callback) {
	  var reader = new FileReader();
	  reader.onloadend = function () {
	    return callback(reader.result);
	  };
	  reader.readAsDataURL(file);
	};

	var UploadList = function (_React$Component) {
	  _inherits(UploadList, _React$Component);

	  function UploadList() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, UploadList);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClose = function (file) {
	      var onRemove = _this.props.onRemove;
	      if (onRemove) {
	        onRemove(file);
	      }
	    }, _this.handlePreview = function (file, e) {
	      var onPreview = _this.props.onPreview;

	      if (!onPreview) {
	        return;
	      }
	      e.preventDefault();
	      return onPreview(file);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;

	    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
	      return;
	    }
	    (this.props.items || []).forEach(function (file) {
	      if (typeof document === 'undefined' || typeof window === 'undefined' ||
	      //!(window as any).FileReader || !(window as any).File ||
	      !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
	        return;
	      }
	      /*eslint-disable */
	      file.thumbUrl = '';
	      /*eslint-enable */
	      previewFile(file.originFileObj, function (previewDataUrl) {
	        /*eslint-disable */
	        file.thumbUrl = previewDataUrl;
	        /*eslint-enable */
	        _this2.forceUpdate();
	      });
	    });
	  };

	  UploadList.prototype.render = function render() {
	    var _this3 = this,
	        _classNames2;

	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var _props$items = _props.items;
	    var items = _props$items === undefined ? [] : _props$items;
	    var listType = _props.listType;

	    var list = items.map(function (file) {
	      var _classNames;

	      var progress = void 0;
	      var icon = _react2["default"].createElement(_beeIcon2["default"], { type: 'paper-clip-outline' });

	      if (listType === 'picture' || listType === 'picture-card') {
	        if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
	          if (listType === 'picture-card') {
	            icon = _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-list-item-uploading-text' },
	              '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
	            );
	          } else {
	            icon = _react2["default"].createElement(_beeIcon2["default"], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
	          }
	        } else {
	          icon = _react2["default"].createElement(
	            'a',
	            {
	              className: prefixCls + '-list-item-thumbnail',
	              onClick: function onClick(e) {
	                return _this3.handlePreview(file, e);
	              },
	              href: file.url || file.thumbUrl,
	              target: '_blank',
	              rel: 'noopener noreferrer'
	            },
	            _react2["default"].createElement('img', { src: file.url || file.thumbUrl, alt: file.name })
	          );
	        }
	      }

	      if (file.status === 'uploading') {
	        progress = _react2["default"].createElement(_beeProgressBar2["default"], { colors: 'success', size: 'sm', now: file.percent });
	      }
	      var infoUploadingClass = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
	      var preview = file.url ? _react2["default"].createElement(
	        'a',
	        {
	          href: file.url,
	          target: '_blank',
	          rel: 'noopener noreferrer',
	          className: prefixCls + '-list-item-name',
	          onClick: function onClick(e) {
	            return _this3.handlePreview(file, e);
	          }
	        },
	        file.name
	      ) : _react2["default"].createElement(
	        'span',
	        {
	          className: prefixCls + '-list-item-name',
	          onClick: function onClick(e) {
	            return _this3.handlePreview(file, e);
	          }
	        },
	        file.name
	      );
	      var style = file.url || file.thumbUrl ? undefined : {
	        pointerEvents: 'none',
	        opacity: 0.5
	      };
	      var actions = listType === 'picture-card' && file.status !== 'uploading' ? _react2["default"].createElement(
	        'span',
	        null,
	        _react2["default"].createElement(
	          'a',
	          {
	            href: file.url || file.thumbUrl,
	            target: '_blank',
	            rel: 'noopener noreferrer',
	            style: style,
	            onClick: function onClick(e) {
	              return _this3.handlePreview(file, e);
	            }
	          },
	          _react2["default"].createElement(_beeIcon2["default"], { type: 'eye-open' })
	        ),
	        _react2["default"].createElement(_beeIcon2["default"], { type: 'remove-symbol', title: 'Remove file', onClick: function onClick() {
	            return _this3.handleClose(file);
	          } })
	      ) : _react2["default"].createElement(_beeIcon2["default"], { type: 'remove-symbol', title: 'Remove file', onClick: function onClick() {
	          return _this3.handleClose(file);
	        } });

	      return _react2["default"].createElement(
	        'div',
	        { className: infoUploadingClass, key: file.uid },
	        _react2["default"].createElement(
	          'div',
	          { className: prefixCls + '-list-item-info' },
	          icon,
	          preview,
	          actions
	        ),
	        progress
	      );
	    });
	    var listClassNames = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      {
	        transitionName: prefixCls + '-margin-top',
	        component: 'div',
	        className: listClassNames
	      },
	      list
	    );
	  };

	  return UploadList;
	}(_react2["default"].Component);

	UploadList.defaultProps = {
	  listType: 'text', // or picture
	  progressAttr: {
	    strokeWidth: 3,
	    showInfo: false
	  },
	  prefixCls: 'u-upload'
	};
	exports["default"] = UploadList;
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ProgressBar = __webpack_require__(125);

	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _ProgressBar2["default"];
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ROUND_PRECISION = 1000;

	/**
	 * 自定义验证children是<ProgressBar>的实例.
	 * @props 实例后的propTypes
	 * @propName 本身propTypes的属性名 即 children
	 * @componentName 实例后的children名 期望是ProgressBar
	 */
	function onlyProgressBar(props, propName, componentName) {
	  var children = props[propName];
	  if (!children) {
	    return null;
	  }

	  var error = null;

	  _react2["default"].Children.forEach(children, function (child) {
	    if (error) {
	      return;
	    }

	    if (child.type === ProgressBar) {
	      // eslint-disable-line no-use-before-define
	      return;
	    }

	    var childIdentifier = _react2["default"].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
	    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
	  });

	  return error;
	}

	var propTypes = {
	  /**
	   *  最小数值
	   */
	  min: _react.PropTypes.number,
	  /**
	   *  有效数值
	   */
	  now: _react.PropTypes.number,
	  /**
	   *  最大数值
	   */
	  max: _react.PropTypes.number,
	  /**
	   *  文字描述标签
	   */
	  label: _react.PropTypes.node,
	  /**
	   *  文字描述标签显示
	   */
	  srOnly: _react.PropTypes.bool,
	  /**
	   *  条纹样式
	   */
	  striped: _react.PropTypes.bool,
	  /**
	   *  激活状态
	   */
	  active: _react.PropTypes.bool,
	  /**
	   *  大小
	   */
	  size: _react.PropTypes.oneOf(['xm', 'sm']),
	  /**
	   *  子组件 必须是ProgressBar
	   */
	  children: onlyProgressBar,

	  /**
	   * @private
	   */
	  isChild: _react.PropTypes.bool
	};

	var defaultProps = {
	  min: 0,
	  max: 100,
	  active: false,
	  isChild: false,
	  srOnly: false,
	  striped: false,
	  clsPrefix: 'u-progress'
	};

	/**
	 * 计算实际显示比例 
	 * @now 显示的总数值
	 * @min 最小数值
	 * @max 最大数值
	 */
	function getPercentage(now, min, max) {
	  var percentage = (now - min) / (max - min) * 100;
	  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
	}

	var ProgressBar = function (_React$Component) {
	  _inherits(ProgressBar, _React$Component);

	  function ProgressBar() {
	    _classCallCheck(this, ProgressBar);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
	    var min = _ref.min;
	    var now = _ref.now;
	    var max = _ref.max;
	    var label = _ref.label;
	    var srOnly = _ref.srOnly;
	    var striped = _ref.striped;
	    var active = _ref.active;
	    var colors = _ref.colors;
	    var className = _ref.className;
	    var style = _ref.style;
	    var clsPrefix = _ref.clsPrefix;

	    var others = _objectWithoutProperties(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style', 'clsPrefix']);

	    var childClsPrefix = clsPrefix + '-bar';
	    var classes = {
	      active: active
	    };
	    if (active || striped) {
	      classes[childClsPrefix + '-striped'] = true;
	    }
	    if (colors) {
	      classes[childClsPrefix + '-' + colors] = true;
	    }

	    var classNames = (0, _classnames2["default"])(childClsPrefix, classes);

	    //返回不敢wrapper的progressbar
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        role: 'progressbar',
	        className: (0, _classnames2["default"])(className, classNames),
	        style: _extends({ width: getPercentage(now, min, max) + '%' }, style),
	        'u-valuenow': now,
	        'u-valuemin': min,
	        'u-valuemax': max
	      }),
	      srOnly ? _react2["default"].createElement(
	        'span',
	        { className: 'sr-only' },
	        label
	      ) : label
	    );
	  };

	  ProgressBar.prototype.render = function render() {
	    //先处理以组ProgressBar形式使用情况
	    var _props = this.props;
	    var isChild = _props.isChild;

	    var props = _objectWithoutProperties(_props, ['isChild']);

	    // 判断isChild是否为true,如果是true,直接渲染成bar


	    if (isChild) {
	      return this.renderProgressBar(props);
	    }

	    var min = props.min;
	    var now = props.now;
	    var max = props.max;
	    var label = props.label;
	    var srOnly = props.srOnly;
	    var striped = props.striped;
	    var active = props.active;
	    var colors = props.colors;
	    var className = props.className;
	    var style = props.style;
	    var size = props.size;
	    var children = props.children;
	    var clsPrefix = props.clsPrefix;

	    var wrapperProps = _objectWithoutProperties(props, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'className', 'style', 'size', 'children', 'clsPrefix']);

	    /**
	     * 如果是单独直接用<ProgressBar /> 走children判断为false语句。
	     * 如果以组的形式使用<ProgressBar><ProgressBar now={10} /><ProgressBar now={20}/></ProgressBar> 走判断语句为true，
	     * 将children分别加上isChild=true的属性
	     */


	    return _react2["default"].createElement(
	      'div',
	      _extends({}, wrapperProps, {
	        className: (0, _classnames2["default"])(className, clsPrefix, size)
	      }),
	      children ? _react2["default"].Children.map(children, function (child) {
	        return (0, _react.cloneElement)(child, { isChild: true });
	      }) : this.renderProgressBar(_extends({
	        min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, colors: colors, className: className, style: style, clsPrefix: clsPrefix }, wrapperProps))
	    );
	  };

	  return ProgressBar;
	}(_react2["default"].Component);

	ProgressBar.propTypes = propTypes;
	ProgressBar.defaultProps = defaultProps;

	exports["default"] = ProgressBar;
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getFileItem;
	function getFileItem(file, fileList) {
	  var matchWay = !file.uid ? 'byName' : 'byUid';
	  var target = fileList.filter(function (item) {
	    if (matchWay === 'byName') {
	      return item.name === file.name;
	    }
	    return item.uid === file.uid;
	  })[0];
	  return target;
	}
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map