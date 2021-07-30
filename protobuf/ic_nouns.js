/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.icecondor = (function() {
    
        /**
         * Namespace icecondor.
         * @exports icecondor
         * @namespace
         */
        var icecondor = {};
    
        icecondor.Access = (function() {
    
            /**
             * Properties of an Access.
             * @memberof icecondor
             * @interface IAccess
             * @property {string|null} [id] Access id
             * @property {string|null} [createdAt] Access createdAt
             * @property {string|null} [expiresAt] Access expiresAt
             * @property {string|null} [userId] Access userId
             * @property {string|null} [level] Access level
             * @property {string|null} [key] Access key
             */
    
            /**
             * Constructs a new Access.
             * @memberof icecondor
             * @classdesc Represents an Access.
             * @implements IAccess
             * @constructor
             * @param {icecondor.IAccess=} [properties] Properties to set
             */
            function Access(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Access id.
             * @member {string} id
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.id = "";
    
            /**
             * Access createdAt.
             * @member {string} createdAt
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.createdAt = "";
    
            /**
             * Access expiresAt.
             * @member {string} expiresAt
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.expiresAt = "";
    
            /**
             * Access userId.
             * @member {string} userId
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.userId = "";
    
            /**
             * Access level.
             * @member {string} level
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.level = "";
    
            /**
             * Access key.
             * @member {string} key
             * @memberof icecondor.Access
             * @instance
             */
            Access.prototype.key = "";
    
            /**
             * Creates a new Access instance using the specified properties.
             * @function create
             * @memberof icecondor.Access
             * @static
             * @param {icecondor.IAccess=} [properties] Properties to set
             * @returns {icecondor.Access} Access instance
             */
            Access.create = function create(properties) {
                return new Access(properties);
            };
    
            /**
             * Encodes the specified Access message. Does not implicitly {@link icecondor.Access.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Access
             * @static
             * @param {icecondor.IAccess} message Access message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Access.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
                if (message.expiresAt != null && Object.hasOwnProperty.call(message, "expiresAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.expiresAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
                if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.level);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.key);
                return writer;
            };
    
            /**
             * Encodes the specified Access message, length delimited. Does not implicitly {@link icecondor.Access.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Access
             * @static
             * @param {icecondor.IAccess} message Access message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Access.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Access message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Access
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Access} Access
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Access.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Access();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.createdAt = reader.string();
                        break;
                    case 3:
                        message.expiresAt = reader.string();
                        break;
                    case 4:
                        message.userId = reader.string();
                        break;
                    case 5:
                        message.level = reader.string();
                        break;
                    case 6:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Access message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Access
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Access} Access
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Access.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Access message.
             * @function verify
             * @memberof icecondor.Access
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Access.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                    if (!$util.isString(message.expiresAt))
                        return "expiresAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isString(message.level))
                        return "level: string expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };
    
            /**
             * Creates an Access message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Access
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Access} Access
             */
            Access.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Access)
                    return object;
                var message = new $root.icecondor.Access();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.expiresAt != null)
                    message.expiresAt = String(object.expiresAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.level != null)
                    message.level = String(object.level);
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };
    
            /**
             * Creates a plain object from an Access message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Access
             * @static
             * @param {icecondor.Access} message Access
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Access.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createdAt = "";
                    object.expiresAt = "";
                    object.userId = "";
                    object.level = "";
                    object.key = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                    object.expiresAt = message.expiresAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };
    
            /**
             * Converts this Access to JSON.
             * @function toJSON
             * @memberof icecondor.Access
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Access.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Access;
        })();
    
        icecondor.Config = (function() {
    
            /**
             * Properties of a Config.
             * @memberof icecondor
             * @interface IConfig
             * @property {string|null} [id] Config id
             * @property {string|null} [date] Config date
             * @property {string|null} [receivedAt] Config receivedAt
             * @property {string|null} [userId] Config userId
             * @property {string|null} [deviceId] Config deviceId
             * @property {string|null} [source] Config source
             * @property {number|null} [recordingFrequency] Config recordingFrequency
             * @property {boolean|null} [recording] Config recording
             */
    
            /**
             * Constructs a new Config.
             * @memberof icecondor
             * @classdesc Represents a Config.
             * @implements IConfig
             * @constructor
             * @param {icecondor.IConfig=} [properties] Properties to set
             */
            function Config(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Config id.
             * @member {string} id
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.id = "";
    
            /**
             * Config date.
             * @member {string} date
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.date = "";
    
            /**
             * Config receivedAt.
             * @member {string} receivedAt
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.receivedAt = "";
    
            /**
             * Config userId.
             * @member {string} userId
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.userId = "";
    
            /**
             * Config deviceId.
             * @member {string} deviceId
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.deviceId = "";
    
            /**
             * Config source.
             * @member {string} source
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.source = "";
    
            /**
             * Config recordingFrequency.
             * @member {number} recordingFrequency
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.recordingFrequency = 0;
    
            /**
             * Config recording.
             * @member {boolean} recording
             * @memberof icecondor.Config
             * @instance
             */
            Config.prototype.recording = false;
    
            /**
             * Creates a new Config instance using the specified properties.
             * @function create
             * @memberof icecondor.Config
             * @static
             * @param {icecondor.IConfig=} [properties] Properties to set
             * @returns {icecondor.Config} Config instance
             */
            Config.create = function create(properties) {
                return new Config(properties);
            };
    
            /**
             * Encodes the specified Config message. Does not implicitly {@link icecondor.Config.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Config
             * @static
             * @param {icecondor.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.date);
                if (message.receivedAt != null && Object.hasOwnProperty.call(message, "receivedAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.receivedAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.source);
                if (message.recordingFrequency != null && Object.hasOwnProperty.call(message, "recordingFrequency"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.recordingFrequency);
                if (message.recording != null && Object.hasOwnProperty.call(message, "recording"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.recording);
                return writer;
            };
    
            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link icecondor.Config.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Config
             * @static
             * @param {icecondor.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Config message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Config();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.date = reader.string();
                        break;
                    case 3:
                        message.receivedAt = reader.string();
                        break;
                    case 4:
                        message.userId = reader.string();
                        break;
                    case 5:
                        message.deviceId = reader.string();
                        break;
                    case 6:
                        message.source = reader.string();
                        break;
                    case 7:
                        message.recordingFrequency = reader.int32();
                        break;
                    case 8:
                        message.recording = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Config message.
             * @function verify
             * @memberof icecondor.Config
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Config.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.date != null && message.hasOwnProperty("date"))
                    if (!$util.isString(message.date))
                        return "date: string expected";
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    if (!$util.isString(message.receivedAt))
                        return "receivedAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.source != null && message.hasOwnProperty("source"))
                    if (!$util.isString(message.source))
                        return "source: string expected";
                if (message.recordingFrequency != null && message.hasOwnProperty("recordingFrequency"))
                    if (!$util.isInteger(message.recordingFrequency))
                        return "recordingFrequency: integer expected";
                if (message.recording != null && message.hasOwnProperty("recording"))
                    if (typeof message.recording !== "boolean")
                        return "recording: boolean expected";
                return null;
            };
    
            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Config
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Config} Config
             */
            Config.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Config)
                    return object;
                var message = new $root.icecondor.Config();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.date != null)
                    message.date = String(object.date);
                if (object.receivedAt != null)
                    message.receivedAt = String(object.receivedAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.source != null)
                    message.source = String(object.source);
                if (object.recordingFrequency != null)
                    message.recordingFrequency = object.recordingFrequency | 0;
                if (object.recording != null)
                    message.recording = Boolean(object.recording);
                return message;
            };
    
            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Config
             * @static
             * @param {icecondor.Config} message Config
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Config.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.date = "";
                    object.receivedAt = "";
                    object.userId = "";
                    object.deviceId = "";
                    object.source = "";
                    object.recordingFrequency = 0;
                    object.recording = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = message.date;
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    object.receivedAt = message.receivedAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.source != null && message.hasOwnProperty("source"))
                    object.source = message.source;
                if (message.recordingFrequency != null && message.hasOwnProperty("recordingFrequency"))
                    object.recordingFrequency = message.recordingFrequency;
                if (message.recording != null && message.hasOwnProperty("recording"))
                    object.recording = message.recording;
                return object;
            };
    
            /**
             * Converts this Config to JSON.
             * @function toJSON
             * @memberof icecondor.Config
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Config.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Config;
        })();
    
        icecondor.Device = (function() {
    
            /**
             * Properties of a Device.
             * @memberof icecondor
             * @interface IDevice
             * @property {string|null} [id] Device id
             * @property {string|null} [createdAt] Device createdAt
             * @property {string|null} [userId] Device userId
             * @property {string|null} [deviceId] Device deviceId
             * @property {string|null} [name] Device name
             * @property {string|null} [make] Device make
             * @property {string|null} [model] Device model
             * @property {number|null} [vdop] Device vdop
             * @property {number|null} [hdop] Device hdop
             * @property {number|null} [batteryLife] Device batteryLife
             * @property {string|null} [osName] Device osName
             * @property {string|null} [osVersion] Device osVersion
             * @property {string|null} [appName] Device appName
             * @property {string|null} [appVersion] Device appVersion
             * @property {boolean|null} [archived] Device archived
             */
    
            /**
             * Constructs a new Device.
             * @memberof icecondor
             * @classdesc Represents a Device.
             * @implements IDevice
             * @constructor
             * @param {icecondor.IDevice=} [properties] Properties to set
             */
            function Device(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Device id.
             * @member {string} id
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.id = "";
    
            /**
             * Device createdAt.
             * @member {string} createdAt
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.createdAt = "";
    
            /**
             * Device userId.
             * @member {string} userId
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.userId = "";
    
            /**
             * Device deviceId.
             * @member {string} deviceId
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.deviceId = "";
    
            /**
             * Device name.
             * @member {string} name
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.name = "";
    
            /**
             * Device make.
             * @member {string} make
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.make = "";
    
            /**
             * Device model.
             * @member {string} model
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.model = "";
    
            /**
             * Device vdop.
             * @member {number} vdop
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.vdop = 0;
    
            /**
             * Device hdop.
             * @member {number} hdop
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.hdop = 0;
    
            /**
             * Device batteryLife.
             * @member {number} batteryLife
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.batteryLife = 0;
    
            /**
             * Device osName.
             * @member {string} osName
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.osName = "";
    
            /**
             * Device osVersion.
             * @member {string} osVersion
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.osVersion = "";
    
            /**
             * Device appName.
             * @member {string} appName
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.appName = "";
    
            /**
             * Device appVersion.
             * @member {string} appVersion
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.appVersion = "";
    
            /**
             * Device archived.
             * @member {boolean} archived
             * @memberof icecondor.Device
             * @instance
             */
            Device.prototype.archived = false;
    
            /**
             * Creates a new Device instance using the specified properties.
             * @function create
             * @memberof icecondor.Device
             * @static
             * @param {icecondor.IDevice=} [properties] Properties to set
             * @returns {icecondor.Device} Device instance
             */
            Device.create = function create(properties) {
                return new Device(properties);
            };
    
            /**
             * Encodes the specified Device message. Does not implicitly {@link icecondor.Device.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Device
             * @static
             * @param {icecondor.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
                if (message.make != null && Object.hasOwnProperty.call(message, "make"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.make);
                if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.model);
                if (message.vdop != null && Object.hasOwnProperty.call(message, "vdop"))
                    writer.uint32(/* id 8, wireType 5 =*/69).float(message.vdop);
                if (message.hdop != null && Object.hasOwnProperty.call(message, "hdop"))
                    writer.uint32(/* id 9, wireType 5 =*/77).float(message.hdop);
                if (message.batteryLife != null && Object.hasOwnProperty.call(message, "batteryLife"))
                    writer.uint32(/* id 10, wireType 5 =*/85).float(message.batteryLife);
                if (message.osName != null && Object.hasOwnProperty.call(message, "osName"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.osName);
                if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.osVersion);
                if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.appName);
                if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.appVersion);
                if (message.archived != null && Object.hasOwnProperty.call(message, "archived"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.archived);
                return writer;
            };
    
            /**
             * Encodes the specified Device message, length delimited. Does not implicitly {@link icecondor.Device.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Device
             * @static
             * @param {icecondor.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Device message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Device();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.createdAt = reader.string();
                        break;
                    case 3:
                        message.userId = reader.string();
                        break;
                    case 4:
                        message.deviceId = reader.string();
                        break;
                    case 5:
                        message.name = reader.string();
                        break;
                    case 6:
                        message.make = reader.string();
                        break;
                    case 7:
                        message.model = reader.string();
                        break;
                    case 8:
                        message.vdop = reader.float();
                        break;
                    case 9:
                        message.hdop = reader.float();
                        break;
                    case 10:
                        message.batteryLife = reader.float();
                        break;
                    case 11:
                        message.osName = reader.string();
                        break;
                    case 12:
                        message.osVersion = reader.string();
                        break;
                    case 13:
                        message.appName = reader.string();
                        break;
                    case 14:
                        message.appVersion = reader.string();
                        break;
                    case 15:
                        message.archived = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Device message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Device message.
             * @function verify
             * @memberof icecondor.Device
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Device.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.make != null && message.hasOwnProperty("make"))
                    if (!$util.isString(message.make))
                        return "make: string expected";
                if (message.model != null && message.hasOwnProperty("model"))
                    if (!$util.isString(message.model))
                        return "model: string expected";
                if (message.vdop != null && message.hasOwnProperty("vdop"))
                    if (typeof message.vdop !== "number")
                        return "vdop: number expected";
                if (message.hdop != null && message.hasOwnProperty("hdop"))
                    if (typeof message.hdop !== "number")
                        return "hdop: number expected";
                if (message.batteryLife != null && message.hasOwnProperty("batteryLife"))
                    if (typeof message.batteryLife !== "number")
                        return "batteryLife: number expected";
                if (message.osName != null && message.hasOwnProperty("osName"))
                    if (!$util.isString(message.osName))
                        return "osName: string expected";
                if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                    if (!$util.isString(message.osVersion))
                        return "osVersion: string expected";
                if (message.appName != null && message.hasOwnProperty("appName"))
                    if (!$util.isString(message.appName))
                        return "appName: string expected";
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    if (!$util.isString(message.appVersion))
                        return "appVersion: string expected";
                if (message.archived != null && message.hasOwnProperty("archived"))
                    if (typeof message.archived !== "boolean")
                        return "archived: boolean expected";
                return null;
            };
    
            /**
             * Creates a Device message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Device
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Device} Device
             */
            Device.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Device)
                    return object;
                var message = new $root.icecondor.Device();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.make != null)
                    message.make = String(object.make);
                if (object.model != null)
                    message.model = String(object.model);
                if (object.vdop != null)
                    message.vdop = Number(object.vdop);
                if (object.hdop != null)
                    message.hdop = Number(object.hdop);
                if (object.batteryLife != null)
                    message.batteryLife = Number(object.batteryLife);
                if (object.osName != null)
                    message.osName = String(object.osName);
                if (object.osVersion != null)
                    message.osVersion = String(object.osVersion);
                if (object.appName != null)
                    message.appName = String(object.appName);
                if (object.appVersion != null)
                    message.appVersion = String(object.appVersion);
                if (object.archived != null)
                    message.archived = Boolean(object.archived);
                return message;
            };
    
            /**
             * Creates a plain object from a Device message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Device
             * @static
             * @param {icecondor.Device} message Device
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Device.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createdAt = "";
                    object.userId = "";
                    object.deviceId = "";
                    object.name = "";
                    object.make = "";
                    object.model = "";
                    object.vdop = 0;
                    object.hdop = 0;
                    object.batteryLife = 0;
                    object.osName = "";
                    object.osVersion = "";
                    object.appName = "";
                    object.appVersion = "";
                    object.archived = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.make != null && message.hasOwnProperty("make"))
                    object.make = message.make;
                if (message.model != null && message.hasOwnProperty("model"))
                    object.model = message.model;
                if (message.vdop != null && message.hasOwnProperty("vdop"))
                    object.vdop = options.json && !isFinite(message.vdop) ? String(message.vdop) : message.vdop;
                if (message.hdop != null && message.hasOwnProperty("hdop"))
                    object.hdop = options.json && !isFinite(message.hdop) ? String(message.hdop) : message.hdop;
                if (message.batteryLife != null && message.hasOwnProperty("batteryLife"))
                    object.batteryLife = options.json && !isFinite(message.batteryLife) ? String(message.batteryLife) : message.batteryLife;
                if (message.osName != null && message.hasOwnProperty("osName"))
                    object.osName = message.osName;
                if (message.osVersion != null && message.hasOwnProperty("osVersion"))
                    object.osVersion = message.osVersion;
                if (message.appName != null && message.hasOwnProperty("appName"))
                    object.appName = message.appName;
                if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                    object.appVersion = message.appVersion;
                if (message.archived != null && message.hasOwnProperty("archived"))
                    object.archived = message.archived;
                return object;
            };
    
            /**
             * Converts this Device to JSON.
             * @function toJSON
             * @memberof icecondor.Device
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Device.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Device;
        })();
    
        icecondor.Fence = (function() {
    
            /**
             * Properties of a Fence.
             * @memberof icecondor
             * @interface IFence
             * @property {string|null} [id] Fence id
             * @property {string|null} [createdAt] Fence createdAt
             * @property {string|null} [userId] Fence userId
             * @property {string|null} [name] Fence name
             * @property {string|null} [geojson] Fence geojson
             * @property {number|null} [area] Fence area
             */
    
            /**
             * Constructs a new Fence.
             * @memberof icecondor
             * @classdesc Represents a Fence.
             * @implements IFence
             * @constructor
             * @param {icecondor.IFence=} [properties] Properties to set
             */
            function Fence(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Fence id.
             * @member {string} id
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.id = "";
    
            /**
             * Fence createdAt.
             * @member {string} createdAt
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.createdAt = "";
    
            /**
             * Fence userId.
             * @member {string} userId
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.userId = "";
    
            /**
             * Fence name.
             * @member {string} name
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.name = "";
    
            /**
             * Fence geojson.
             * @member {string} geojson
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.geojson = "";
    
            /**
             * Fence area.
             * @member {number} area
             * @memberof icecondor.Fence
             * @instance
             */
            Fence.prototype.area = 0;
    
            /**
             * Creates a new Fence instance using the specified properties.
             * @function create
             * @memberof icecondor.Fence
             * @static
             * @param {icecondor.IFence=} [properties] Properties to set
             * @returns {icecondor.Fence} Fence instance
             */
            Fence.create = function create(properties) {
                return new Fence(properties);
            };
    
            /**
             * Encodes the specified Fence message. Does not implicitly {@link icecondor.Fence.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Fence
             * @static
             * @param {icecondor.IFence} message Fence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fence.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                if (message.geojson != null && Object.hasOwnProperty.call(message, "geojson"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.geojson);
                if (message.area != null && Object.hasOwnProperty.call(message, "area"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.area);
                return writer;
            };
    
            /**
             * Encodes the specified Fence message, length delimited. Does not implicitly {@link icecondor.Fence.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Fence
             * @static
             * @param {icecondor.IFence} message Fence message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Fence.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Fence message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Fence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Fence} Fence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fence.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Fence();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.createdAt = reader.string();
                        break;
                    case 3:
                        message.userId = reader.string();
                        break;
                    case 4:
                        message.name = reader.string();
                        break;
                    case 5:
                        message.geojson = reader.string();
                        break;
                    case 6:
                        message.area = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Fence message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Fence
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Fence} Fence
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Fence.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Fence message.
             * @function verify
             * @memberof icecondor.Fence
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Fence.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.geojson != null && message.hasOwnProperty("geojson"))
                    if (!$util.isString(message.geojson))
                        return "geojson: string expected";
                if (message.area != null && message.hasOwnProperty("area"))
                    if (typeof message.area !== "number")
                        return "area: number expected";
                return null;
            };
    
            /**
             * Creates a Fence message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Fence
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Fence} Fence
             */
            Fence.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Fence)
                    return object;
                var message = new $root.icecondor.Fence();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.geojson != null)
                    message.geojson = String(object.geojson);
                if (object.area != null)
                    message.area = Number(object.area);
                return message;
            };
    
            /**
             * Creates a plain object from a Fence message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Fence
             * @static
             * @param {icecondor.Fence} message Fence
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Fence.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createdAt = "";
                    object.userId = "";
                    object.name = "";
                    object.geojson = "";
                    object.area = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.geojson != null && message.hasOwnProperty("geojson"))
                    object.geojson = message.geojson;
                if (message.area != null && message.hasOwnProperty("area"))
                    object.area = options.json && !isFinite(message.area) ? String(message.area) : message.area;
                return object;
            };
    
            /**
             * Converts this Fence to JSON.
             * @function toJSON
             * @memberof icecondor.Fence
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Fence.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Fence;
        })();
    
        icecondor.Friendship = (function() {
    
            /**
             * Properties of a Friendship.
             * @memberof icecondor
             * @interface IFriendship
             * @property {string|null} [id] Friendship id
             * @property {string|null} [userId] Friendship userId
             * @property {string|null} [friendUserId] Friendship friendUserId
             * @property {string|null} [createdAt] Friendship createdAt
             */
    
            /**
             * Constructs a new Friendship.
             * @memberof icecondor
             * @classdesc Represents a Friendship.
             * @implements IFriendship
             * @constructor
             * @param {icecondor.IFriendship=} [properties] Properties to set
             */
            function Friendship(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Friendship id.
             * @member {string} id
             * @memberof icecondor.Friendship
             * @instance
             */
            Friendship.prototype.id = "";
    
            /**
             * Friendship userId.
             * @member {string} userId
             * @memberof icecondor.Friendship
             * @instance
             */
            Friendship.prototype.userId = "";
    
            /**
             * Friendship friendUserId.
             * @member {string} friendUserId
             * @memberof icecondor.Friendship
             * @instance
             */
            Friendship.prototype.friendUserId = "";
    
            /**
             * Friendship createdAt.
             * @member {string} createdAt
             * @memberof icecondor.Friendship
             * @instance
             */
            Friendship.prototype.createdAt = "";
    
            /**
             * Creates a new Friendship instance using the specified properties.
             * @function create
             * @memberof icecondor.Friendship
             * @static
             * @param {icecondor.IFriendship=} [properties] Properties to set
             * @returns {icecondor.Friendship} Friendship instance
             */
            Friendship.create = function create(properties) {
                return new Friendship(properties);
            };
    
            /**
             * Encodes the specified Friendship message. Does not implicitly {@link icecondor.Friendship.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Friendship
             * @static
             * @param {icecondor.IFriendship} message Friendship message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friendship.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
                if (message.friendUserId != null && Object.hasOwnProperty.call(message, "friendUserId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.friendUserId);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.createdAt);
                return writer;
            };
    
            /**
             * Encodes the specified Friendship message, length delimited. Does not implicitly {@link icecondor.Friendship.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Friendship
             * @static
             * @param {icecondor.IFriendship} message Friendship message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Friendship.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Friendship message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Friendship
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Friendship} Friendship
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friendship.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Friendship();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.userId = reader.string();
                        break;
                    case 3:
                        message.friendUserId = reader.string();
                        break;
                    case 4:
                        message.createdAt = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Friendship message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Friendship
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Friendship} Friendship
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Friendship.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Friendship message.
             * @function verify
             * @memberof icecondor.Friendship
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Friendship.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.friendUserId != null && message.hasOwnProperty("friendUserId"))
                    if (!$util.isString(message.friendUserId))
                        return "friendUserId: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                return null;
            };
    
            /**
             * Creates a Friendship message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Friendship
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Friendship} Friendship
             */
            Friendship.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Friendship)
                    return object;
                var message = new $root.icecondor.Friendship();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.friendUserId != null)
                    message.friendUserId = String(object.friendUserId);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                return message;
            };
    
            /**
             * Creates a plain object from a Friendship message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Friendship
             * @static
             * @param {icecondor.Friendship} message Friendship
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Friendship.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.userId = "";
                    object.friendUserId = "";
                    object.createdAt = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.friendUserId != null && message.hasOwnProperty("friendUserId"))
                    object.friendUserId = message.friendUserId;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                return object;
            };
    
            /**
             * Converts this Friendship to JSON.
             * @function toJSON
             * @memberof icecondor.Friendship
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Friendship.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Friendship;
        })();
    
        icecondor.Heartbeat = (function() {
    
            /**
             * Properties of a Heartbeat.
             * @memberof icecondor
             * @interface IHeartbeat
             * @property {string|null} [id] Heartbeat id
             * @property {string|null} [date] Heartbeat date
             * @property {string|null} [receivedAt] Heartbeat receivedAt
             * @property {string|null} [userId] Heartbeat userId
             * @property {string|null} [deviceId] Heartbeat deviceId
             * @property {boolean|null} [charging] Heartbeat charging
             * @property {number|null} [batteryPercentage] Heartbeat batteryPercentage
             * @property {boolean|null} [cellData] Heartbeat cellData
             * @property {boolean|null} [wifiData] Heartbeat wifiData
             * @property {number|Long|null} [memoryFree] Heartbeat memoryFree
             * @property {number|Long|null} [memoryTotal] Heartbeat memoryTotal
             */
    
            /**
             * Constructs a new Heartbeat.
             * @memberof icecondor
             * @classdesc Represents a Heartbeat.
             * @implements IHeartbeat
             * @constructor
             * @param {icecondor.IHeartbeat=} [properties] Properties to set
             */
            function Heartbeat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Heartbeat id.
             * @member {string} id
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.id = "";
    
            /**
             * Heartbeat date.
             * @member {string} date
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.date = "";
    
            /**
             * Heartbeat receivedAt.
             * @member {string} receivedAt
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.receivedAt = "";
    
            /**
             * Heartbeat userId.
             * @member {string} userId
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.userId = "";
    
            /**
             * Heartbeat deviceId.
             * @member {string} deviceId
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.deviceId = "";
    
            /**
             * Heartbeat charging.
             * @member {boolean} charging
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.charging = false;
    
            /**
             * Heartbeat batteryPercentage.
             * @member {number} batteryPercentage
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.batteryPercentage = 0;
    
            /**
             * Heartbeat cellData.
             * @member {boolean} cellData
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.cellData = false;
    
            /**
             * Heartbeat wifiData.
             * @member {boolean} wifiData
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.wifiData = false;
    
            /**
             * Heartbeat memoryFree.
             * @member {number|Long} memoryFree
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.memoryFree = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Heartbeat memoryTotal.
             * @member {number|Long} memoryTotal
             * @memberof icecondor.Heartbeat
             * @instance
             */
            Heartbeat.prototype.memoryTotal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Creates a new Heartbeat instance using the specified properties.
             * @function create
             * @memberof icecondor.Heartbeat
             * @static
             * @param {icecondor.IHeartbeat=} [properties] Properties to set
             * @returns {icecondor.Heartbeat} Heartbeat instance
             */
            Heartbeat.create = function create(properties) {
                return new Heartbeat(properties);
            };
    
            /**
             * Encodes the specified Heartbeat message. Does not implicitly {@link icecondor.Heartbeat.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Heartbeat
             * @static
             * @param {icecondor.IHeartbeat} message Heartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heartbeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.date);
                if (message.receivedAt != null && Object.hasOwnProperty.call(message, "receivedAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.receivedAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
                if (message.charging != null && Object.hasOwnProperty.call(message, "charging"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.charging);
                if (message.batteryPercentage != null && Object.hasOwnProperty.call(message, "batteryPercentage"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.batteryPercentage);
                if (message.cellData != null && Object.hasOwnProperty.call(message, "cellData"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.cellData);
                if (message.wifiData != null && Object.hasOwnProperty.call(message, "wifiData"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.wifiData);
                if (message.memoryFree != null && Object.hasOwnProperty.call(message, "memoryFree"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.memoryFree);
                if (message.memoryTotal != null && Object.hasOwnProperty.call(message, "memoryTotal"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.memoryTotal);
                return writer;
            };
    
            /**
             * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link icecondor.Heartbeat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Heartbeat
             * @static
             * @param {icecondor.IHeartbeat} message Heartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Heartbeat message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Heartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Heartbeat} Heartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heartbeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Heartbeat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.date = reader.string();
                        break;
                    case 3:
                        message.receivedAt = reader.string();
                        break;
                    case 4:
                        message.userId = reader.string();
                        break;
                    case 5:
                        message.deviceId = reader.string();
                        break;
                    case 6:
                        message.charging = reader.bool();
                        break;
                    case 7:
                        message.batteryPercentage = reader.int32();
                        break;
                    case 8:
                        message.cellData = reader.bool();
                        break;
                    case 9:
                        message.wifiData = reader.bool();
                        break;
                    case 10:
                        message.memoryFree = reader.uint64();
                        break;
                    case 11:
                        message.memoryTotal = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Heartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Heartbeat} Heartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Heartbeat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Heartbeat message.
             * @function verify
             * @memberof icecondor.Heartbeat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Heartbeat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.date != null && message.hasOwnProperty("date"))
                    if (!$util.isString(message.date))
                        return "date: string expected";
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    if (!$util.isString(message.receivedAt))
                        return "receivedAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.charging != null && message.hasOwnProperty("charging"))
                    if (typeof message.charging !== "boolean")
                        return "charging: boolean expected";
                if (message.batteryPercentage != null && message.hasOwnProperty("batteryPercentage"))
                    if (!$util.isInteger(message.batteryPercentage))
                        return "batteryPercentage: integer expected";
                if (message.cellData != null && message.hasOwnProperty("cellData"))
                    if (typeof message.cellData !== "boolean")
                        return "cellData: boolean expected";
                if (message.wifiData != null && message.hasOwnProperty("wifiData"))
                    if (typeof message.wifiData !== "boolean")
                        return "wifiData: boolean expected";
                if (message.memoryFree != null && message.hasOwnProperty("memoryFree"))
                    if (!$util.isInteger(message.memoryFree) && !(message.memoryFree && $util.isInteger(message.memoryFree.low) && $util.isInteger(message.memoryFree.high)))
                        return "memoryFree: integer|Long expected";
                if (message.memoryTotal != null && message.hasOwnProperty("memoryTotal"))
                    if (!$util.isInteger(message.memoryTotal) && !(message.memoryTotal && $util.isInteger(message.memoryTotal.low) && $util.isInteger(message.memoryTotal.high)))
                        return "memoryTotal: integer|Long expected";
                return null;
            };
    
            /**
             * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Heartbeat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Heartbeat} Heartbeat
             */
            Heartbeat.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Heartbeat)
                    return object;
                var message = new $root.icecondor.Heartbeat();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.date != null)
                    message.date = String(object.date);
                if (object.receivedAt != null)
                    message.receivedAt = String(object.receivedAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.charging != null)
                    message.charging = Boolean(object.charging);
                if (object.batteryPercentage != null)
                    message.batteryPercentage = object.batteryPercentage | 0;
                if (object.cellData != null)
                    message.cellData = Boolean(object.cellData);
                if (object.wifiData != null)
                    message.wifiData = Boolean(object.wifiData);
                if (object.memoryFree != null)
                    if ($util.Long)
                        (message.memoryFree = $util.Long.fromValue(object.memoryFree)).unsigned = true;
                    else if (typeof object.memoryFree === "string")
                        message.memoryFree = parseInt(object.memoryFree, 10);
                    else if (typeof object.memoryFree === "number")
                        message.memoryFree = object.memoryFree;
                    else if (typeof object.memoryFree === "object")
                        message.memoryFree = new $util.LongBits(object.memoryFree.low >>> 0, object.memoryFree.high >>> 0).toNumber(true);
                if (object.memoryTotal != null)
                    if ($util.Long)
                        (message.memoryTotal = $util.Long.fromValue(object.memoryTotal)).unsigned = true;
                    else if (typeof object.memoryTotal === "string")
                        message.memoryTotal = parseInt(object.memoryTotal, 10);
                    else if (typeof object.memoryTotal === "number")
                        message.memoryTotal = object.memoryTotal;
                    else if (typeof object.memoryTotal === "object")
                        message.memoryTotal = new $util.LongBits(object.memoryTotal.low >>> 0, object.memoryTotal.high >>> 0).toNumber(true);
                return message;
            };
    
            /**
             * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Heartbeat
             * @static
             * @param {icecondor.Heartbeat} message Heartbeat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Heartbeat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.date = "";
                    object.receivedAt = "";
                    object.userId = "";
                    object.deviceId = "";
                    object.charging = false;
                    object.batteryPercentage = 0;
                    object.cellData = false;
                    object.wifiData = false;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.memoryFree = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.memoryFree = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.memoryTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.memoryTotal = options.longs === String ? "0" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = message.date;
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    object.receivedAt = message.receivedAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.charging != null && message.hasOwnProperty("charging"))
                    object.charging = message.charging;
                if (message.batteryPercentage != null && message.hasOwnProperty("batteryPercentage"))
                    object.batteryPercentage = message.batteryPercentage;
                if (message.cellData != null && message.hasOwnProperty("cellData"))
                    object.cellData = message.cellData;
                if (message.wifiData != null && message.hasOwnProperty("wifiData"))
                    object.wifiData = message.wifiData;
                if (message.memoryFree != null && message.hasOwnProperty("memoryFree"))
                    if (typeof message.memoryFree === "number")
                        object.memoryFree = options.longs === String ? String(message.memoryFree) : message.memoryFree;
                    else
                        object.memoryFree = options.longs === String ? $util.Long.prototype.toString.call(message.memoryFree) : options.longs === Number ? new $util.LongBits(message.memoryFree.low >>> 0, message.memoryFree.high >>> 0).toNumber(true) : message.memoryFree;
                if (message.memoryTotal != null && message.hasOwnProperty("memoryTotal"))
                    if (typeof message.memoryTotal === "number")
                        object.memoryTotal = options.longs === String ? String(message.memoryTotal) : message.memoryTotal;
                    else
                        object.memoryTotal = options.longs === String ? $util.Long.prototype.toString.call(message.memoryTotal) : options.longs === Number ? new $util.LongBits(message.memoryTotal.low >>> 0, message.memoryTotal.high >>> 0).toNumber(true) : message.memoryTotal;
                return object;
            };
    
            /**
             * Converts this Heartbeat to JSON.
             * @function toJSON
             * @memberof icecondor.Heartbeat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Heartbeat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Heartbeat;
        })();
    
        icecondor.Location = (function() {
    
            /**
             * Properties of a Location.
             * @memberof icecondor
             * @interface ILocation
             * @property {string|null} [id] Location id
             * @property {string|null} [date] Location date
             * @property {string|null} [receivedAt] Location receivedAt
             * @property {string|null} [userId] Location userId
             * @property {string|null} [deviceId] Location deviceId
             * @property {number|null} [latitude] Location latitude
             * @property {number|null} [longitude] Location longitude
             * @property {number|null} [altitude] Location altitude
             * @property {number|null} [accuracy] Location accuracy
             * @property {string|null} [provider] Location provider
             */
    
            /**
             * Constructs a new Location.
             * @memberof icecondor
             * @classdesc Represents a Location.
             * @implements ILocation
             * @constructor
             * @param {icecondor.ILocation=} [properties] Properties to set
             */
            function Location(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Location id.
             * @member {string} id
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.id = "";
    
            /**
             * Location date.
             * @member {string} date
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.date = "";
    
            /**
             * Location receivedAt.
             * @member {string} receivedAt
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.receivedAt = "";
    
            /**
             * Location userId.
             * @member {string} userId
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.userId = "";
    
            /**
             * Location deviceId.
             * @member {string} deviceId
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.deviceId = "";
    
            /**
             * Location latitude.
             * @member {number} latitude
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.latitude = 0;
    
            /**
             * Location longitude.
             * @member {number} longitude
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.longitude = 0;
    
            /**
             * Location altitude.
             * @member {number} altitude
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.altitude = 0;
    
            /**
             * Location accuracy.
             * @member {number} accuracy
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.accuracy = 0;
    
            /**
             * Location provider.
             * @member {string} provider
             * @memberof icecondor.Location
             * @instance
             */
            Location.prototype.provider = "";
    
            /**
             * Creates a new Location instance using the specified properties.
             * @function create
             * @memberof icecondor.Location
             * @static
             * @param {icecondor.ILocation=} [properties] Properties to set
             * @returns {icecondor.Location} Location instance
             */
            Location.create = function create(properties) {
                return new Location(properties);
            };
    
            /**
             * Encodes the specified Location message. Does not implicitly {@link icecondor.Location.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Location
             * @static
             * @param {icecondor.ILocation} message Location message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Location.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.date);
                if (message.receivedAt != null && Object.hasOwnProperty.call(message, "receivedAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.receivedAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceId);
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 6, wireType 5 =*/53).float(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 7, wireType 5 =*/61).float(message.longitude);
                if (message.altitude != null && Object.hasOwnProperty.call(message, "altitude"))
                    writer.uint32(/* id 8, wireType 5 =*/69).float(message.altitude);
                if (message.accuracy != null && Object.hasOwnProperty.call(message, "accuracy"))
                    writer.uint32(/* id 9, wireType 5 =*/77).float(message.accuracy);
                if (message.provider != null && Object.hasOwnProperty.call(message, "provider"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.provider);
                return writer;
            };
    
            /**
             * Encodes the specified Location message, length delimited. Does not implicitly {@link icecondor.Location.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Location
             * @static
             * @param {icecondor.ILocation} message Location message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Location.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Location message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Location
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Location} Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Location.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Location();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.date = reader.string();
                        break;
                    case 3:
                        message.receivedAt = reader.string();
                        break;
                    case 4:
                        message.userId = reader.string();
                        break;
                    case 5:
                        message.deviceId = reader.string();
                        break;
                    case 6:
                        message.latitude = reader.float();
                        break;
                    case 7:
                        message.longitude = reader.float();
                        break;
                    case 8:
                        message.altitude = reader.float();
                        break;
                    case 9:
                        message.accuracy = reader.float();
                        break;
                    case 10:
                        message.provider = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Location message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Location
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Location} Location
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Location.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Location message.
             * @function verify
             * @memberof icecondor.Location
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Location.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.date != null && message.hasOwnProperty("date"))
                    if (!$util.isString(message.date))
                        return "date: string expected";
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    if (!$util.isString(message.receivedAt))
                        return "receivedAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.latitude != null && message.hasOwnProperty("latitude"))
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                if (message.longitude != null && message.hasOwnProperty("longitude"))
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                if (message.altitude != null && message.hasOwnProperty("altitude"))
                    if (typeof message.altitude !== "number")
                        return "altitude: number expected";
                if (message.accuracy != null && message.hasOwnProperty("accuracy"))
                    if (typeof message.accuracy !== "number")
                        return "accuracy: number expected";
                if (message.provider != null && message.hasOwnProperty("provider"))
                    if (!$util.isString(message.provider))
                        return "provider: string expected";
                return null;
            };
    
            /**
             * Creates a Location message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Location
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Location} Location
             */
            Location.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Location)
                    return object;
                var message = new $root.icecondor.Location();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.date != null)
                    message.date = String(object.date);
                if (object.receivedAt != null)
                    message.receivedAt = String(object.receivedAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                if (object.altitude != null)
                    message.altitude = Number(object.altitude);
                if (object.accuracy != null)
                    message.accuracy = Number(object.accuracy);
                if (object.provider != null)
                    message.provider = String(object.provider);
                return message;
            };
    
            /**
             * Creates a plain object from a Location message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Location
             * @static
             * @param {icecondor.Location} message Location
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Location.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.date = "";
                    object.receivedAt = "";
                    object.userId = "";
                    object.deviceId = "";
                    object.latitude = 0;
                    object.longitude = 0;
                    object.altitude = 0;
                    object.accuracy = 0;
                    object.provider = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.date != null && message.hasOwnProperty("date"))
                    object.date = message.date;
                if (message.receivedAt != null && message.hasOwnProperty("receivedAt"))
                    object.receivedAt = message.receivedAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.latitude != null && message.hasOwnProperty("latitude"))
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                if (message.longitude != null && message.hasOwnProperty("longitude"))
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                if (message.altitude != null && message.hasOwnProperty("altitude"))
                    object.altitude = options.json && !isFinite(message.altitude) ? String(message.altitude) : message.altitude;
                if (message.accuracy != null && message.hasOwnProperty("accuracy"))
                    object.accuracy = options.json && !isFinite(message.accuracy) ? String(message.accuracy) : message.accuracy;
                if (message.provider != null && message.hasOwnProperty("provider"))
                    object.provider = message.provider;
                return object;
            };
    
            /**
             * Converts this Location to JSON.
             * @function toJSON
             * @memberof icecondor.Location
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Location.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Location;
        })();
    
        icecondor.Rule = (function() {
    
            /**
             * Properties of a Rule.
             * @memberof icecondor
             * @interface IRule
             * @property {string|null} [id] Rule id
             * @property {string|null} [createdAt] Rule createdAt
             * @property {string|null} [userId] Rule userId
             * @property {string|null} [fenceId] Rule fenceId
             * @property {string|null} [kind] Rule kind
             */
    
            /**
             * Constructs a new Rule.
             * @memberof icecondor
             * @classdesc Represents a Rule.
             * @implements IRule
             * @constructor
             * @param {icecondor.IRule=} [properties] Properties to set
             */
            function Rule(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Rule id.
             * @member {string} id
             * @memberof icecondor.Rule
             * @instance
             */
            Rule.prototype.id = "";
    
            /**
             * Rule createdAt.
             * @member {string} createdAt
             * @memberof icecondor.Rule
             * @instance
             */
            Rule.prototype.createdAt = "";
    
            /**
             * Rule userId.
             * @member {string} userId
             * @memberof icecondor.Rule
             * @instance
             */
            Rule.prototype.userId = "";
    
            /**
             * Rule fenceId.
             * @member {string} fenceId
             * @memberof icecondor.Rule
             * @instance
             */
            Rule.prototype.fenceId = "";
    
            /**
             * Rule kind.
             * @member {string} kind
             * @memberof icecondor.Rule
             * @instance
             */
            Rule.prototype.kind = "";
    
            /**
             * Creates a new Rule instance using the specified properties.
             * @function create
             * @memberof icecondor.Rule
             * @static
             * @param {icecondor.IRule=} [properties] Properties to set
             * @returns {icecondor.Rule} Rule instance
             */
            Rule.create = function create(properties) {
                return new Rule(properties);
            };
    
            /**
             * Encodes the specified Rule message. Does not implicitly {@link icecondor.Rule.verify|verify} messages.
             * @function encode
             * @memberof icecondor.Rule
             * @static
             * @param {icecondor.IRule} message Rule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
                if (message.fenceId != null && Object.hasOwnProperty.call(message, "fenceId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.fenceId);
                if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.kind);
                return writer;
            };
    
            /**
             * Encodes the specified Rule message, length delimited. Does not implicitly {@link icecondor.Rule.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.Rule
             * @static
             * @param {icecondor.IRule} message Rule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Rule.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Rule message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.Rule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.Rule} Rule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.Rule();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.createdAt = reader.string();
                        break;
                    case 3:
                        message.userId = reader.string();
                        break;
                    case 4:
                        message.fenceId = reader.string();
                        break;
                    case 5:
                        message.kind = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Rule message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.Rule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.Rule} Rule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Rule.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Rule message.
             * @function verify
             * @memberof icecondor.Rule
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Rule.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.fenceId != null && message.hasOwnProperty("fenceId"))
                    if (!$util.isString(message.fenceId))
                        return "fenceId: string expected";
                if (message.kind != null && message.hasOwnProperty("kind"))
                    if (!$util.isString(message.kind))
                        return "kind: string expected";
                return null;
            };
    
            /**
             * Creates a Rule message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.Rule
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.Rule} Rule
             */
            Rule.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.Rule)
                    return object;
                var message = new $root.icecondor.Rule();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.fenceId != null)
                    message.fenceId = String(object.fenceId);
                if (object.kind != null)
                    message.kind = String(object.kind);
                return message;
            };
    
            /**
             * Creates a plain object from a Rule message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.Rule
             * @static
             * @param {icecondor.Rule} message Rule
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Rule.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createdAt = "";
                    object.userId = "";
                    object.fenceId = "";
                    object.kind = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.fenceId != null && message.hasOwnProperty("fenceId"))
                    object.fenceId = message.fenceId;
                if (message.kind != null && message.hasOwnProperty("kind"))
                    object.kind = message.kind;
                return object;
            };
    
            /**
             * Converts this Rule to JSON.
             * @function toJSON
             * @memberof icecondor.Rule
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Rule.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Rule;
        })();
    
        icecondor.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof icecondor
             * @interface IUser
             * @property {string|null} [id] User id
             * @property {string|null} [createdAt] User createdAt
             * @property {string|null} [email] User email
             * @property {string|null} [username] User username
             * @property {string|null} [timeZone] User timeZone
             * @property {string|null} [paid] User paid
             */
    
            /**
             * Constructs a new User.
             * @memberof icecondor
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {icecondor.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User id.
             * @member {string} id
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.id = "";
    
            /**
             * User createdAt.
             * @member {string} createdAt
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.createdAt = "";
    
            /**
             * User email.
             * @member {string} email
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.email = "";
    
            /**
             * User username.
             * @member {string} username
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.username = "";
    
            /**
             * User timeZone.
             * @member {string} timeZone
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.timeZone = "";
    
            /**
             * User paid.
             * @member {string} paid
             * @memberof icecondor.User
             * @instance
             */
            User.prototype.paid = "";
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof icecondor.User
             * @static
             * @param {icecondor.IUser=} [properties] Properties to set
             * @returns {icecondor.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link icecondor.User.verify|verify} messages.
             * @function encode
             * @memberof icecondor.User
             * @static
             * @param {icecondor.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
                if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
                if (message.timeZone != null && Object.hasOwnProperty.call(message, "timeZone"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.timeZone);
                if (message.paid != null && Object.hasOwnProperty.call(message, "paid"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.paid);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link icecondor.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof icecondor.User
             * @static
             * @param {icecondor.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof icecondor.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {icecondor.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.icecondor.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.createdAt = reader.string();
                        break;
                    case 3:
                        message.email = reader.string();
                        break;
                    case 4:
                        message.username = reader.string();
                        break;
                    case 5:
                        message.timeZone = reader.string();
                        break;
                    case 6:
                        message.paid = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof icecondor.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {icecondor.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof icecondor.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    if (!$util.isString(message.createdAt))
                        return "createdAt: string expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.username != null && message.hasOwnProperty("username"))
                    if (!$util.isString(message.username))
                        return "username: string expected";
                if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                    if (!$util.isString(message.timeZone))
                        return "timeZone: string expected";
                if (message.paid != null && message.hasOwnProperty("paid"))
                    if (!$util.isString(message.paid))
                        return "paid: string expected";
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof icecondor.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {icecondor.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.icecondor.User)
                    return object;
                var message = new $root.icecondor.User();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.createdAt != null)
                    message.createdAt = String(object.createdAt);
                if (object.email != null)
                    message.email = String(object.email);
                if (object.username != null)
                    message.username = String(object.username);
                if (object.timeZone != null)
                    message.timeZone = String(object.timeZone);
                if (object.paid != null)
                    message.paid = String(object.paid);
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof icecondor.User
             * @static
             * @param {icecondor.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.createdAt = "";
                    object.email = "";
                    object.username = "";
                    object.timeZone = "";
                    object.paid = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = message.createdAt;
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.timeZone != null && message.hasOwnProperty("timeZone"))
                    object.timeZone = message.timeZone;
                if (message.paid != null && message.hasOwnProperty("paid"))
                    object.paid = message.paid;
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof icecondor.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return User;
        })();
    
        return icecondor;
    })();

    return $root;
});
