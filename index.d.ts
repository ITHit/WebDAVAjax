// -----------------------------------------------------------------------
// IT Hit WebDAV Ajax Library v5.21.5974.0
// Copyright © 2020 IT Hit LTD. All rights reserved.
// License: https://www.webdavsystem.com/ajax/
// -----------------------------------------------------------------------

export namespace ITHit{ 
	 /**
 * Base class for exceptions.
 * @api
 * @class ITHit.Exception
 */ 
 class Exception  { 
	 /**
			 * Exception message.
			 * @api
			 * @property {String} ITHit.Exception.Message
			 * @type {string}
			 */ 
 Message: string 
 /**
			 * Original exception that caused this exception.
			 * @api
			 * @property {ITHit.Exception}  ITHit.Exception.InnerException
			 * @type {ITHit.Exception}
			 */ 
 InnerException: ITHit.Exception 
 }/**
     * Detects environment in which JavaScript is running, such as operating system and web browser.
     * @api
     * @class ITHit.Environment
   */ 
 class Environment  { 
	 }/**
 * Type of information being logged.
 * @api
 * @enum {number}
 * @class ITHit.LogLevel
 */ 
 class LogLevel  { 
	 }/**
	 * Provides static methods for logging.
	 * @api
	 * @class ITHit.Logger
	 */ 
 namespace Logger{ 
	 /**
		 * Adds log listener.
		 * @api
		 * @param {ITHit.Logger~EventHandler} fHandler Handler function.
		 * @param {number} iLogLevel Log level messages capturing.
		 */ 
 function AddListener(fHandler: () => void, iLogLevel: number): void; 
 /**
		 * Removes log listener.
		 * @api
		 * @param {ITHit.Logger~EventHandler} fHandler Handler function.
		 */ 
 function RemoveListener(fHandler?: () => void | null): void; 
 /**
		 * Writs a message to log with a specified log level. Default log level is {@link ITHit.LogLevel#Info}
		 * @api
		 * @param {string} sMessage Message to be logged.
		 * @param {number} iLogLevel Logging level.
		 * @throws ITHit.Exceptions.LoggerException Function was expected as log listener.
		 */ 
 function WriteMessage(sMessage: string, iLogLevel: number): void; 
 }class Logger  { 
	 } 
 namespace WebDAV{ 
	 /**
 * This namespace provides classes for accessing WebDAV server items, file structure management, properties management and items locking.
 * @public
 * @namespace ITHit.WebDAV.Client
 * @class ITHit.WebDAV.Client
 */ 
 namespace Client{ 
	 /**
 * The ITHit.WebDav.Client.Exceptions namespace provides classes that represent various WebDAV client library exceptions, erroneous server responses and HTTP errors.
 * @namespace ITHit.WebDAV.Client.Exceptions
 */ 
 namespace Exceptions{ 
	 /**
 * Base exception for all exceptions thrown by WebDAV client library.
 * Initializes a new instance of the WebDavException class with a specified error message.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.WebDavException
 * @extends ITHit.Exception
 */ 
 class WebDavException extends ITHit.Exception { 
	 }/**
 * Is thrown whenever and erroneous http response is received. Initializes a new instance of the WebDavHttpException
 * class with a specified error message, a reference to the inner exception that is the cause of this exception,
 * href of the item, multistatus response and status of the response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavException
 */ 
 class WebDavHttpException extends ITHit.WebDAV.Client.Exceptions.WebDavException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Is raised whenever property processing was unsuccessfull. Initializes a new instance of the PropertyException
 * class with a specified error message, a reference to the inner exception that is the cause of this exception,
 * href of the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.PropertyException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class PropertyException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Name of the property processing of which caused the exception.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName}
	 */ 
 PropertyName: ITHit.WebDAV.Client.PropertyName 
 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Thrown when server responded with Property Not Found http response. Initializes a new instance of the
 * PropertyNotFoundException class with a specified error message, a reference to the inner exception that
 * is the cause of this exception, href of the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.PropertyNotFoundException
 * @extends ITHit.WebDAV.Client.Exceptions.PropertyException
 */ 
 class PropertyNotFoundException extends ITHit.WebDAV.Client.Exceptions.PropertyException { 
	 /**
	 * Name of the property processing of which caused the exception.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName}
	 */ 
 PropertyName: ITHit.WebDAV.Client.PropertyName 
 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Thrown when server responded with Property forbidden http response. Initializes a new instance of the
 * PropertyForbiddenException class with a specified error message, a reference to the inner exception
 * that is the cause of this exception, href of the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.PropertyForbiddenException
 * @extends ITHit.WebDAV.Client.Exceptions.PropertyException
 */ 
 class PropertyForbiddenException extends ITHit.WebDAV.Client.Exceptions.PropertyException { 
	 /**
	 * Name of the property processing of which caused the exception.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName}
	 */ 
 PropertyName: ITHit.WebDAV.Client.PropertyName 
 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Base exception for all exceptions thrown by browser extension integration.
 * Initializes a new instance of the IntegrationException class with a specified error message.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.IntegrationException
 */ 
 class IntegrationException  { 
	 }/**
 * Incorrect credentials provided or insufficient permissions to access the requested item. Initializes a new instance
 * of the UnauthorizedException class with a specified error message, a reference to the inner exception that is the
 * cause of this exception, href of the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.UnauthorizedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class UnauthorizedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The request could not be understood by the server due to malformed syntax.
 * Initializes a new instance of the BadRequestException class with a specified error message, a reference to the
 * inner exception that is the cause of this exception, href of the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.BadRequestException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class BadRequestException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The request could not be carried because of conflict on server.
 * Initializes a new instance of the ConflictException class with a specified error message, a reference
 * to the inner exception that is the cause of this exception, href of the item and multistatus response
 * caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.ConflictException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class ConflictException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The item is locked. Initializes a new instance of the LockedException class with a specified error message,
 * a reference to the inner exception that is the cause of this exception, href of the item and multistatus
 * response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.LockedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class LockedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The server refused to fulfill the request. Initializes a new instance of the ForbiddenException class with
 * a specified error message, a reference to the inner exception that is the cause of this exception, href of
 * the item and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.ForbiddenException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class ForbiddenException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The method is not allowed. Initializes a new instance of the MethodNotAllowedException class with a specified
 * error message, a reference to the inner exception that is the cause of this exception, href of the item and
 * multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.MethodNotAllowedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class MethodNotAllowedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The method is not implemented. Initializes a new instance of the NotImplementedException class with a specified
 * error message, a reference to the inner exception that is the cause of this exception, href of the item and
 * multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.NotImplementedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class NotImplementedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The item doesn't exist on the server. Initializes a new instance of the NotFoundException class with a specified
 * error message, a reference to the inner exception that is the cause of this exception, href of the item and
 * multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.NotFoundException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class NotFoundException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Precondition failed. Initializes a new instance of the PreconditionFailedException class with a specified error
 * message, a reference to the inner exception that is the cause of this exception, href of the item and multistatus
 * response with error details.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.PreconditionFailedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class PreconditionFailedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * The method could not be performed on the resource because the requested action depended on another action
 * and that action failed. Initializes a new instance of the DependencyFailedException class with a specified
 * error message, a reference to the inner exception that is the cause of this exception, href of the item
 * and multistatus response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.DependencyFailedException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class DependencyFailedException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Insufficient storage exception. Initializes a new instance of the InsufficientStorageException class with
 * a specified error message, a reference to the inner exception that is the cause of this exception, href of
 * the item and error response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.InsufficientStorageException
 * @extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException
 */ 
 class InsufficientStorageException extends ITHit.WebDAV.Client.Exceptions.WebDavHttpException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Quota not exceeded exception. Initializes a new instance of the QuotaNotExceededException class with a
 * specified error message, a reference to the inner exception that is the cause of this exception, href of
 * the item and error response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.QuotaNotExceededException
 * @extends ITHit.WebDAV.Client.Exceptions.InsufficientStorageException
 */ 
 class QuotaNotExceededException extends ITHit.WebDAV.Client.Exceptions.InsufficientStorageException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }/**
 * Sufficient disk space exception. Initializes a new instance of the SufficientDiskSpaceException class with
 * a specified error message, a reference to the inner exception that is the cause of this exception, href of
 * the item and error response caused the error.
 * @api
 * @class ITHit.WebDAV.Client.Exceptions.SufficientDiskSpaceException
 * @extends ITHit.WebDAV.Client.Exceptions.InsufficientStorageException
 */ 
 class SufficientDiskSpaceException extends ITHit.WebDAV.Client.Exceptions.InsufficientStorageException { 
	 /**
	 * Multistatus Contains {@link ITHit.WebDAV.Client.Multistatus} with elements that had errors, if multistatus information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Multistatus}
	 */ 
 Multistatus: ITHit.WebDAV.Client.Multistatus 
 /**
	 * Http status with wich request failed.
	 * @api
	 * @type {ITHit.WebDAV.Client.HttpStatus}
	 */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 /**
	 * Uri for which request failed.
	 * @api
	 * @type {string}
	 */ 
 Uri: string 
 /**
	 * Error contains IError with additional info, if error information was available in response.
	 * @api
	 * @type {ITHit.WebDAV.Client.Error}
	 */ 
 Error: ITHit.WebDAV.Client.Error 
 }}/**
	 * Initializes new instance of PropertyName.
	 * @classdesc Represents name of property.
	 * @constructs
	 * @api
	 * @param {string} sName Name of the property.
	 * @param {string} sNamespaceUri Namespace of the property.
	 * @throws ITHit.Exceptions.ArgumentNullException
	 */ 
 class PropertyName  { 
	 constructor(sName: string, sNamespaceUri: string); 
 /**
	 * Name of the property.
	 * @api
	 * @type {string}
	 */ 
 Name: string 
 /**
	 * Namespace of the property.
	 * @api
	 * @type {string}
	 */ 
 NamespaceUri: string 
 /**
	 * Returns string representation of current property name.
	 * @api
	 * @returns {string} String representation of current property name.
	 */ 
 toString(): string; 
 }/**
	 * Structure that describes HTTP response's status.
	 * @api
	 * @class ITHit.WebDAV.Client.HttpStatus
	 */ 
 namespace HttpStatus{ 
	 /**
			 * Parses HttpStatus structure from string containing status information.
			 * @api
			 * @param {string} sStatus String containing status information.
			 * @returns {ITHit.WebDAV.Client.HttpStatus} HttpStatus structure that describes current status.
			 */ 
 function Parse(sStatus: string): ITHit.WebDAV.Client.HttpStatus; 
 }class HttpStatus  { 
	 /**
			 * No status defined.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static None: ITHit.WebDAV.Client.HttpStatus 
 None: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The request requires user authentication.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Unauthorized: ITHit.WebDAV.Client.HttpStatus 
 Unauthorized: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The request has succeeded.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static OK: ITHit.WebDAV.Client.HttpStatus 
 OK: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The request has been fulfilled and resulted in a new resource being created.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Created: ITHit.WebDAV.Client.HttpStatus 
 Created: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server has fulfilled the request but does not need to return an entity-body, and might want to
			 * return updated meta information.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static NoContent: ITHit.WebDAV.Client.HttpStatus 
 NoContent: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server has fulfilled the partial GET request for the resource.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static PartialContent: ITHit.WebDAV.Client.HttpStatus 
 PartialContent: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * This status code provides status for multiple independent operations.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static MultiStatus: ITHit.WebDAV.Client.HttpStatus 
 MultiStatus: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * This status code is used instead if 302 redirect. This is because 302 code is processed automatically
			 * and there is no way to process redirect to login page.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Redirect: ITHit.WebDAV.Client.HttpStatus 
 Redirect: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat
			 * the request without modifications.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static BadRequest: ITHit.WebDAV.Client.HttpStatus 
 BadRequest: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server has not found anything matching the Request-URI.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static NotFound: ITHit.WebDAV.Client.HttpStatus 
 NotFound: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static MethodNotAllowed: ITHit.WebDAV.Client.HttpStatus 
 MethodNotAllowed: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The precondition given in one or more of the request-header fields evaluated to false when it was tested
			 * on the server.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static PreconditionFailed: ITHit.WebDAV.Client.HttpStatus 
 PreconditionFailed: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The source or destination resource of a method is locked.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Locked: ITHit.WebDAV.Client.HttpStatus 
 Locked: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The method could not be performed on the resource because the requested action depended on another
			 * action and that action failed.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static DependencyFailed: ITHit.WebDAV.Client.HttpStatus 
 DependencyFailed: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server understood the request, but is refusing to fulfill it.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Forbidden: ITHit.WebDAV.Client.HttpStatus 
 Forbidden: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The request could not be completed due to a conflict with the current state of the resource.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static Conflict: ITHit.WebDAV.Client.HttpStatus 
 Conflict: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server does not support the functionality required to fulfill the request.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static NotImplemented: ITHit.WebDAV.Client.HttpStatus 
 NotImplemented: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The server, while acting as a gateway or proxy, received an invalid response from the upstream
			 * server it accessed in attempting to fulfill the request.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static BadGateway: ITHit.WebDAV.Client.HttpStatus 
 BadGateway: ITHit.WebDAV.Client.HttpStatus 
 /**
			 * The method could not be performed on the resource because the server is unable to store the
			 * representation needed to successfully complete the request.
			 * @api
			 * @type {ITHit.WebDAV.Client.HttpStatus}
			 */ 
 static InsufficientStorage: ITHit.WebDAV.Client.HttpStatus 
 InsufficientStorage: ITHit.WebDAV.Client.HttpStatus 
 /**
		 * @api
		 * @type {number}
		 */ 
 Code: number 
 /**
		 * @api
		 * @type {string}
		 */ 
 Description: string 
 /**
		 * Indicates whether the current HttpStatus structure is equal to another HttpStatus structure.
		 * @api
		 * @param {ITHit.WebDAV.Client.HttpStatus} oHttpStatus HttpStatus object to compare.
		 * @returns {boolean} True if the current object is equal to the other parameter; otherwise, false.
		 */ 
 Equals(oHttpStatus: ITHit.WebDAV.Client.HttpStatus): boolean; 
 /**
		 * Returns true if status is successful for Create operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Create operation.
		 */ 
 IsCreateOk(): boolean; 
 /**
		 * Returns true if status is successful for Delete operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Delete operation.
		 */ 
 IsDeleteOk(): boolean; 
 /**
		 * Returns true if status is successful.
		 * @api
		 * @returns {boolean} Returns true if status is successful.
		 */ 
 IsOk(): boolean; 
 /**
		 * Returns true if status is successful for Copy or Move operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Copy or Move operation.
		 */ 
 IsCopyMoveOk(): boolean; 
 /**
		 * Returns true if status is successful for Get operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Get operation.
		 */ 
 IsGetOk(): boolean; 
 /**
		 * Returns true if status is successful for Put operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Put operation.
		 */ 
 IsPutOk(): boolean; 
 /**
		 * Returns true if status is successful for Unlock operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Unlock operation.
		 */ 
 IsUnlockOk(): boolean; 
 /**
		 * Returns true if status is successful for Head operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Head operation.
		 */ 
 IsHeadOk(): boolean; 
 /**
		 * Returns true if status is successful for Proppatch operation.
		 * @api
		 * @returns {boolean} Returns true if status is successful for Proppatch operation.
		 */ 
 IsUpdateOk(): boolean; 
 /**
		 * Returns true if status is successful.
		 * @api
		 * @returns {boolean} Returns true if status is successful.
		 */ 
 IsSuccess(): boolean; 
 }/**
	 * Initializes new string valued property.
	 * @api
	 * @classdesc Represents custom property exposed by WebDAV hierarchy items.
	 * @constructs
	 * @param {string|ITHit.WebDAV.Client.PropertyName} sName Name of the property.
	 * @param {string} [sValue] Property value.
	 * @param {string} [sNamespace] Namespace of the property.
	 * @throws ITHit.Exception
	 */ 
 class Property  { 
	 constructor(sName: string | ITHit.WebDAV.Client.PropertyName, sValue?: string | null, sNamespace?: string | null); 
 /**
	 * Property Name.
	 * @api
	 * @type {string|ITHit.WebDAV.Client.PropertyName}
	 */ 
 Name: string | ITHit.WebDAV.Client.PropertyName 
 /**
	 * Property value.
	 * @api
	 * @type {*}
	 */ 
 Value: any 
 /**
	 * String value of the custom property.
	 * @api
	 * @returns {string} String value of the custom property.
	 */ 
 StringValue(): string; 
 }/**
 * Instance of this class is passed to callback function. It provides information about success or failure of
 * the operation as well as you will use it to get the results of the asynchronous call.
 * @api
 * @class ITHit.WebDAV.Client.AsyncResult
 */ 
 class AsyncResult  { 
	 /**
	 * Result value. Can be any type, each method may put there appropriate object which before was returned directly.
	 * Null if request was unsuccessful.
	 * @api
	 * @type {*}
	 */ 
 Result: any 
 /**
	 * Flag of either async request result was successful or not.
	 * @api
	 * @type {boolean}
	 */ 
 IsSuccess: boolean 
 /**
	 * Error (Exception) object. Describes the type of error that occurred. Null if request was successful.
	 * @api
	 * @type {ITHit.WebDAV.Client.Exceptions.WebDavException|Error|null}
	 */ 
 Error: ITHit.WebDAV.Client.Exceptions.WebDavException | Error | null 
 /**
     * Status of HTTP response retrieved either from Result or Error objects
     * @api
     * @type {ITHit.WebDAV.Client.HttpStatus}
     */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 }/**
	 * Initializes new instance of OrderProperty.
     * @api
	 * @classdesc WebDAV order Property.
	 * @constructs
	 * @param {ITHit.WebDAV.Client.PropertyName} sProperty Property name.
	 * @param {boolean} sAscending Order direction.
	 */ 
 class OrderProperty  { 
	 constructor(sProperty: ITHit.WebDAV.Client.PropertyName, sAscending: boolean); 
 /**
	 * Property name.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName}
	 */ 
 Property: ITHit.WebDAV.Client.PropertyName 
 /**
	 * Order direction.
	 * @api
	 * @type {boolean}
	 */ 
 Ascending: boolean 
 /**
	 * Returns string representation of current property name.
	 * @api
	 * @returns {string} String representation of current property name.
	 */ 
 toString(): string; 
 }/**
 * Enumeration of the item (Resource or Folder).
 * @api
 * @enum {string}
 * @class ITHit.WebDAV.Client.ResourceType
 */ 
 enum ResourceType{ 
	 Folder = "Folder",
	 File = "Resource",
	 }/**
 * List of WebDAV properties.
 * @api
 * @class ITHit.WebDAV.Client.PropertyList
 * @extends Array
 */ 
 class PropertyList extends Array { 
	 /**
     * Returns true if the with the specified property name and namespace exists in property list.
     * Returns false if does not exist.
     * @api
     * @param {ITHit.WebDAV.Client.PropertyName} oPropName Property name to search for.
     * @param {boolean} [bIgnoreCase] Specifies if the search is case sensitive or case insensitive.
     * @returns {boolean}
     */ 
 Has(oPropName: ITHit.WebDAV.Client.PropertyName, bIgnoreCase?: boolean | null): boolean; 
 /**
     * Gets property value found by property name and namespace. Returns null if property with such name does not exist.
     * @api
     * @param {ITHit.WebDAV.Client.PropertyName} oPropName Property name to search for.
     * @param {boolean} [bIgnoreCase] Specifies if the search is case sensitive or case insensitive.
     * @returns {(string|null)} String representing property value or null if property with such name does not exist.
     */ 
 Find(oPropName: ITHit.WebDAV.Client.PropertyName, bIgnoreCase?: boolean | null): string | null; 
 }/**
 * Represents information about errors occurred in different elements.
 * @api
 * @class ITHit.WebDAV.Client.Multistatus
 */ 
 class Multistatus  { 
	 /**
     * Gets the generic description, if available.
     * @api
     * @type {string}
     */ 
 Description: string 
 /**
     * Array of the errors returned by server.
     * @api
     * @type {ITHit.WebDAV.Client.MultistatusResponse[]}
     */ 
 Responses: ITHit.WebDAV.Client.MultistatusResponse[] 
 }/**
 * Represents error occurred in one element.
 * @api
 * @class ITHit.WebDAV.Client.MultistatusResponse
 */ 
 class MultistatusResponse  { 
	 /**
     * Request href
     * @api
     * @type {string}
     */ 
 Href: string 
 /**
     * Array of the errors returned by server.
     * @api
     * @type {string}
     */ 
 Description: string 
 /**
     * HTTP Status of the operation.
     * @api
     * @type {ITHit.WebDAV.Client.HttpStatus}
     */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 }/**
 * Provides means for finding which properties failed to update.
 * @api
 * @class ITHit.WebDAV.Client.PropertyMultistatusResponse
 * @extends ITHit.WebDAV.Client.MultistatusResponse
 */ 
 class PropertyMultistatusResponse extends ITHit.WebDAV.Client.MultistatusResponse { 
	 /**
	 * Name of the property, if element is property. Otherwise null.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName}
	 */ 
 PropertyName: ITHit.WebDAV.Client.PropertyName 
 /**
     * Request href
     * @api
     * @type {string}
     */ 
 Href: string 
 /**
     * Array of the errors returned by server.
     * @api
     * @type {string}
     */ 
 Description: string 
 /**
     * HTTP Status of the operation.
     * @api
     * @type {ITHit.WebDAV.Client.HttpStatus}
     */ 
 Status: ITHit.WebDAV.Client.HttpStatus 
 }/**
 * Scope of the lock.
 * Represents exclusive or shared lock.
 * @api
 * @enum {string}
 * @class ITHit.WebDAV.Client.LockScope
 */ 
 enum LockScope{ 
	 Exclusive = "Exclusive",
	 Shared = "Shared",
	 }/**
 * Represents pair of resource uri - lock token. Is used to access locked resources.
 * @api
 * @class ITHit.WebDAV.Client.LockUriTokenPair
 */ 
 class LockUriTokenPair  { 
	 /**
	 * Path to the locked resource.
	 * @api
	 * @type {string}
	 */ 
 Href: string 
 /**
	 * Lock token.
	 * @api
	 * @type {string}
	 */ 
 LockToken: string 
 }/**
 * Information about lock set on an item.
 * @api
 * @class ITHit.WebDAV.Client.LockInfo
 */ 
 class LockInfo  { 
	 /**
	 * Scope of the lock.
	 * @api
	 * @type {ITHit.WebDAV.Client.LockScope}
	 */ 
 LockScope: ITHit.WebDAV.Client.LockScope 
 /**
	 * Whether lock is set on item's children.
	 * @api
	 * @type {boolean}
	 */ 
 Deep: boolean 
 /**
	 * Timeout until lock expires.
	 * @api
	 * @type {number}
	 */ 
 TimeOut: number 
 /**
	 * Owner's name.
	 * @api
	 * @type {string}
	 */ 
 Owner: string 
 /**
	 * Lock token.
	 * @api
	 * @type {ITHit.WebDAV.Client.LockUriTokenPair}
	 */ 
 LockToken: ITHit.WebDAV.Client.LockUriTokenPair 
 }/**
 * Options of an item, described by supported HTTP extensions.
 * @api
 * @class ITHit.WebDAV.Client.OptionsInfo
 */ 
 class OptionsInfo  { 
	 /**
	 * Features supported by WebDAV server. See Features Enumeration {@link ITHit.WebDAV.Client.Features}.
	 * @api
	 * @type {number}
	 */ 
 Features: number 
 }/**
 * Represents features supported by WebDAV server.
 * @api
 * @enum {number}
 * @class ITHit.WebDAV.Client.Features
 */ 
 class Features  { 
	 /**
		 * WebDAV Class 1 compliant item.
		 * Class 1 items does not support locking.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Class1: number 
 readonly Class1: number 
 /**
		 * WebDAV Class 2 compliant item.
		 * Class 2 items support locking.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Class2: number 
 readonly Class2: number 
 /**
		 * WebDAV Class 3 compliant item.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Class3: number 
 readonly Class3: number 
 /**
		 * WevDAV paging compliant item.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly VersionControl: number 
 readonly VersionControl: number 
 /**
		 * DeltaV version-control compliant item.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Paging: number 
 readonly Paging: number 
 /**
		 * Checkout-in-place item support check out, check in and uncheckout operations.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly CheckoutInPlace: number 
 readonly CheckoutInPlace: number 
 /**
		 * DeltaV Version History compliant item.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly VersionHistory: number 
 readonly VersionHistory: number 
 /**
		 * DeltaV Update compliant item.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Update: number 
 readonly Update: number 
 /**
		 * The item supports resumable upload.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly ResumableUpload: number 
 readonly ResumableUpload: number 
 /**
		 * The item supports resumable download.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly ResumableDownload: number 
 readonly ResumableDownload: number 
 /**
		 * The item supports search.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly Dasl: number 
 readonly Dasl: number 
 /**
		 * The item supports GSuite editing.
		 * @api
		 * @readonly
		 * @type {number}
		 */ 
 static readonly GSuite: number 
 readonly GSuite: number 
 }/**
	 * Represents one WebDAV item (file, folder or lock-null).
	 * @api
	 * @class ITHit.WebDAV.Client.HierarchyItem
	 */ 
 class HierarchyItem  { 
	 /**
		 * Current WebDAV session.
		 * @api
		 * @type {ITHit.WebDAV.Client.WebDavSession}
		 */ 
 Session: ITHit.WebDAV.Client.WebDavSession 
 /**
		 * This item path on the server.
		 * @api
		 * @type {string}
		 */ 
 Href: string 
 /**
		 * Most recent modification date.
		 * @api
		 * @type {Date}
		 */ 
 LastModified: Date 
 /**
		 * User friendly item name.
		 * @api
		 * @type {string}
		 */ 
 DisplayName: string 
 /**
		 * The date item was created.
		 * @api
		 * @type {Date}
		 */ 
 CreationDate: Date 
 /**
		 * Type of the item (File or Folder).
		 * @api
		 * @type {string}
		 * @see ITHit.WebDAV.Client.ResourceType
		 */ 
 ResourceType: string 
 /**
		 * Retrieves information about supported locks. Item can support exclusive, shared locks or do not support
		 * any locks. If you set exclusive lock other users will not be able to set any locks. If you set shared
		 * lock other users will be able to set shared lock on the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.CheckSupport.CheckLockSupport
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.CheckSupport.CheckLockSupport
		 * @type {Array.<string>}
		 * @see ITHit.WebDAV.Client.LockScope
		 */ 
 SupportedLocks: string[] 
 /**
		 * List of locks applied to this item.
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.GetLocks.GetList
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.GetLocks.GetList
		 * @api
		 * @type {Array.<ITHit.WebDAV.Client.LockInfo>}
		 */ 
 ActiveLocks: ITHit.WebDAV.Client.LockInfo[] 
 /**
		 * List of item properties.
		 * @api
		 * @type {ITHit.WebDAV.Client.PropertyList}
		 */ 
 Properties: ITHit.WebDAV.Client.PropertyList 
 /**
		 * Returns true if file is under version control. Otherwise false. To detect if version control could
		 * be enabled for this item call GetSupportedFeaturesAsync and check for VersionControl token.
		 * To enable version control call PutUnderVersionControlAsync.
		 * @api
		 * @returns {boolean} Boolean, if true - versions supported
		 */ 
 /**
		 * Number of bytes available for this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 AvailableBytes: number 
 /**
		 * Number of bytes used by this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 UsedBytes: number 
 /**
		 * Refreshes item loading data from server.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Refresh.Refresh
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Refresh.Refresh
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Copies this item to destination folder.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Copy
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Copy
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to copied item.
		 * @param {boolean} bDeep Indicates whether children of this item should be copied.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair[]} [oLockTokens] Lock tokens for destination folder.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~CopyToAsyncCallback} fCallback Function to call when operation is completed.
		 */ 
 CopyToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bDeep: boolean, bOverwrite: boolean, oLockTokens?: ITHit.WebDAV.Client.LockUriTokenPair[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
		 * Deletes this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Delete.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Delete.Delete
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair | null} oLockTokens Lock tokens for this item or any locked child item.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~DeleteAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 DeleteAsync(oLockTokens: ITHit.WebDAV.Client.LockUriTokenPair | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Returns names of all custom properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyNames
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyNamesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyNamesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves values of specific properties.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyValues
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyValues
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyValuesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyValuesAsync(aNames: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves all custom properties exposed by the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetAllProperties
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetAllProperties
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetAllPropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetAllPropertiesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves parent hierarchy item of this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetParent.GetParent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetParent.GetParent
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetParentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetParentAsync(aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves media type independent links.
		 * @api
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSourceAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSourceAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Locks the item. If the lock was successfully applied, the server will return a lock token. You will pass this
		 * lock token back to the server when updating and unlocking the item. The actual lock time applied by the server
		 * may be different from the one requested by the client.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetLock
		 * @param {string} sLockScope Scope of the lock. See LockScope Enumeration {@link ITHit.WebDAV.Client.LockScope}
		 * @param {boolean} bDeep Whether to lock entire subtree.
		 * @param {string} sOwner Owner of the lock.
		 * @param {number} iTimeout Timeout after which lock expires. Pass -1 to request an infinite timeout.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~LockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 LockAsync(sLockScope: string, bDeep: boolean, sOwner: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Moves this item to another location.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Move
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Move
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to moved item.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {(string|ITHit.WebDAV.Client.LockUriTokenPair[])} oLockTokens Lock tokens for item to be moved, for destination folder or file to be overwritten that are locked.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~MoveToAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 MoveToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bOverwrite: boolean, oLockTokens: string | ITHit.WebDAV.Client.LockUriTokenPair[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Prolongs the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.RefreshLock.RefreshLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.RefreshLock.RefreshLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {number} iTimeout New timeout to set.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshLockAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshLockAsync(sLockToken: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Gets features supported by this item, such as WebDAV class support.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSupportedFeaturesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSupportedFeaturesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Removes the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetUnLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetUnLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UnlockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 UnlockAsync(sLockToken: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Updates values of properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Delete
		 * @param {ITHit.WebDAV.Client.Property[]} oPropertiesToAddOrUpdate Properties to be updated.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} oPropertiesToDelete Names of properties to be removed from this item.
		 * @param {string} [sLockToken] Lock token.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UpdatePropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.WebDavRequest|null} WebDAV request
		 */ 
 UpdatePropertiesAsync(oPropertiesToAddOrUpdate: ITHit.WebDAV.Client.Property[], oPropertiesToDelete: ITHit.WebDAV.Client.PropertyName[], sLockToken?: string | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.WebDavRequest | null; 
 }/**
 * The class represents set of extensions to be edited with Microsoft Office.
 * @api
 * @class ITHit.WebDAV.Client.MsOfficeEditExtensions
 * @examplecode ITHit.WebDAV.Client.Tests.DocManager.MsOfficeEditExtensions.EditRtfDocumentWithWord
 * @examplecode ITHit.WebDAV.Client.TSExamples.DocManager.MsOfficeEditExtensions.EditRtfDocumentWithWord
 */ 
 class MsOfficeEditExtensions  { 
	 /**
		 * Array of file extensions which are opened with Microsoft Access.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Access: string[] 
 Access: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Infopath.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Infopath: string[] 
 Infopath: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Excel.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Excel: string[] 
 Excel: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Powerpoint.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Powerpoint: string[] 
 Powerpoint: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Project.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Project: string[] 
 Project: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Publisher.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Publisher: string[] 
 Publisher: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Visio.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Visio: string[] 
 Visio: string[] 
 /**
		 * Array of file extensions which are opened with Microsoft Word.
		 * @api
		 * @type {Array.<string>}
		 */ 
 static Word: string[] 
 Word: string[] 
 }/**
	 * This class provides methods for opening documents for editing directly from server and saving back to server
	 * without download and upload steps. This includes editing Microsoft Office documents as well as any other file
	 * types and works on Windows, Mac OS X and Linux.
	 * @api
	 * @class ITHit.WebDAV.Client.DocManager
	 */ 
 namespace DocManager{ 
	 /**
			 * Gets file names of the protocol installer depending on OS.
			 * @api
             * @return {Array.<string>} An array with file names of the protocol installer.
			 */ 
 function GetProtocolInstallFileNames(): string[]; 
 /**
            * Returns true if protocol application installer is supported for the OS on which this function is called, false - otherwise.
            * @api
            * @return {boolean} True if protocol application installer is supported for the OS on which this function is called.
            */ 
 function IsDavProtocolSupported(): boolean; 
 /**
			 * <p>Mounts folder in file system and opens it in default OS file manger. Requests protocol installation if folder opening protocol is not installed.</p>
             * <i class="optional">The following functionality is supported in v3 Beta and later only:</i>
             * <p>
             * This function supports both challenge-response authentication (Basic, Digest, NTLM, Kerberos) and cookies authentication.
             * If <code>'None'</code> is specified in the <code>sSearchIn</code> parameter the challenge-response authentication is used, otherwise cookies authentication is used.
             * </p>
			 * @api
			 * @param {string} sFolderUrl URL of the folder to open in OS file manager. Must be a full URL including the domain name.
             * @param {string} [sMountUrl] URL to mount file system to before opening the folder. Usually this is your WebDAV server root folder. If this parameter is not specified file system will be mounted to the folder in which document is located.
			 * @param {function} [errorCallback] Function to call if file manager opening has failed. Typically you will request the protocol installation in this callback.
             * If not specified a default message offering protocol installation will be displayed.
             * @param {string} [reserved] Reserved for future use.
             * @param {string} [sSearchIn] <span class="optional">v3 Beta and later only.</span> Indicates cookies authentication. Allowed values are:
             * <ul>
             * <li><code>'Current'</code> - Copies cookies from web browser in which this script is running.</li>
             * <li><code>'None'</code> - do not search or copy any cookies.</li>
             * </ul>
             * Default is <code>'None'</code>.
             * @param {string} [sCookieNames] <span class="optional">v3 Beta and later only.</span> Coma separated list of cookie names to search for. Microsoft Office requires persistent cookie (with expiration date), it does not support session cookies.
             * @param {string} [sLoginUrl] <span class="optional">v3 Beta and later only.</span> Login URL to redirect to in case any cookies specified in <code>sCookieNames</code> parameter are not found.
			 */ 
 function OpenFolderInOsFileManager(sFolderUrl: string, sMountUrl?: string | null, errorCallback?: Function | null, reserved?: string | null, sSearchIn?: string | null, sCookieNames?: string | null, sLoginUrl?: string | null): void; 
 /**
			 * Extracts extension and returns true if URL points to Microsoft Office Document.
			 * @api
			 * @param {string} sDocumentUrl URL of the document.
			 * @return {boolean} True if URL points to Microsoft Office Document.
			 */ 
 function IsMicrosoftOfficeDocument(sDocumentUrl: string): boolean; 
 /**
			 * Opens Microsoft Office document using protocol. This method does not offer protocol installation if protocol is not found. Microsoft Office must be installed on a client machine.
			 * @api
			 * @param {string} sDocumentUrl URL of the document to edit. This must be a Microsoft Office document. Must be a full URL including the domain name.
			 */ 
 function MicrosoftOfficeEditDocument(sDocumentUrl: string): void; 
 /**
			 * <p>Opens document for editing. In case of Microsoft Office documents, it will try to use Microsoft Office protocols first.
             * If Microsoft Office protocols are not found it will use davX: protocol and prompt to install it if not found.</p>
             * <p>This function supports only challenge-response authentication (Basic, Digest, NTLM, Kerberos).
             * You can also use it to open MS Office documents from servers with MS-OFBA authentication.</p>
             * <p>This function does <b>NOT</b> support cookies authentication. If your server is using cookies authentication use the <code>DavProtocolEditDocument()</code> function instead.</p>
			 * @example
			 * &lt;!DOCTYPE html&gt;
			 * &lt;html&gt;
			 * &lt;head&gt;
			 *     &lt;meta charset="utf-8" /&gt;
			 *     &lt;script type="text/javascript" src="ITHitWebDAVClient.js" &gt;&lt;/script&gt;
			 * &lt;/head&gt;

			 * &lt;body&gt;
			 * &lt;script type="text/javascript"&gt;
			 *     function edit() {
			 *         ITHit.WebDAV.Client.DocManager.EditDocument("http://localhost:87654/folder/file.ext", "http://localhost:87654/", errorCallback);
			 *     }
			 *
			 *     function errorCallback() {
			 *         var installerFilePath = "/Plugins/" + ITHit.WebDAV.Client.DocManager.GetProtocolInstallFileNames()[0];
             *
			 *         if (confirm("Opening this type of file requires a protocol installation. Select OK to download the protocol installer.")){
			 *             window.open(installerFilePath);
			 *         }
			 *     }
			 * &lt;/script&gt;
			 * &lt;input type="button" value="Edit Document" onclick="edit()" /&gt;
			 * &lt;/body&gt;
			 * &lt;/html&gt;
			 * @api
			 * @param {string} sDocumentUrl URL of the document to open for editing from server. Must be a full URL including the domain name. Unlike <code>DavProtocolEditDocument()</code> function, this function supports only one document URL in this parameter.
             * @param {string} [sMountUrl] URL to mount file system to before opening the folder. Usually this is your WebDAV server root folder. If this perameter is not specified file system will be mounted to the folder in which document is located.
			 * @param {function} [errorCallback] Function to call if document opening failed. Typically you will request the protocol installation in this callback. This callback is executed for non-Microsoft Office documents only.
             * If not specified a default message offering protocol installation will be displayed.      
			 */ 
 function EditDocument(sDocumentUrl: string, sMountUrl?: string | null, errorCallback?: Function | null): void; 
 /**
			 * Extracts extension and returns true if the document can be edited in G Suite editor or document preview generated via G Suite.
			 * @api
			 * @param {string} sDocumentUrl URL of the document.
			 * @return {boolean} True if URL points to GSuite Editor.
			 */ 
 function IsGSuiteDocument(sDocumentUrl: string): boolean; 
 /**
			 * <p>Edit MS Office document with G Suite Online Editor.</p>             
             * @api
             * @param {string} sDocumentUrl URL of the document to open for editing from server. Must be a full URL including the domain name.
             * @param {DOM} oContainerDomElement HTML DOM element where the G Suite online editor will be loaded. If this parameter is omitted or null is passed the editor will be created in a new tab/window.
			 * @param {function} [errorCallback] Function to call if document opening failed.
            */ 
 function GSuiteEditDocument(sDocumentUrl: string, oContainerDomElement: any, errorCallback?: Function | null): void; 
 /**
			 * <p>Preview MS Office document with G Suite Online Tool.</p>             
             * @api
             * @param {string} sDocumentUrl URL of the document to open for preview. Must be a full URL including the domain name.
             * @param {DOM} oContainerDomElement HTML DOM element where the G Suite preview will be loaded. If this parameter is omitted or null is passed the preview will be created in a new tab/window.
			 * @param {function} [errorCallback] Function to call if document opening failed.
            */ 
 function GSuitePreviewDocument(sDocumentUrl: string, oContainerDomElement: any, errorCallback?: Function | null): void; 
 /**
			 * <p>Opens document for editing or printing using davX: protocol and prompts to install the protocol it if not found.</p>
             * <i class="optional">The following functionality is supported in v3 Beta and later only:</i>
             * <p>
             * This function supports both challenge-response authentication (Basic, Digest, NTLM, Kerberos) and cookies authentication.
             * If <code>'None'</code> is specified in the <code>sSearchIn</code> parameter the challenge-response authentication is used, otherwise cookies authentication is used.
             * </p>
             * @example
			 * &lt;!DOCTYPE html&gt;
			 * &lt;html&gt;
			 * &lt;head&gt;
			 *     &lt;meta charset="utf-8" /&gt;
			 *     &lt;script type="text/javascript" src="ITHitWebDAVClient.js" &gt;&lt;/script&gt;
			 * &lt;/head&gt;
			 * &lt;body&gt;
			 * &lt;script type="text/javascript"&gt;
			 *     function edit() {
			 *         ITHit.WebDAV.Client.DocManager.DavProtocolEditDocument(
			 *             'http://localhost:87654/folder/file.ext', // Document URL(s)
			 *             'http://localhost:87654/',                // Mount URL
			 *             errorCallback,                            // Function to call if protocol app is not installed
			 *             null,                                     // Reserved
			 *             'Current',                                // Which browser to copy cookies from: 'Current', 'None'
			 *             '.AspNet.ApplicationCookie',              // Cookie(s) to copy.
			 *             '/Account/Login',                         // URL to navigate to if any cookie from the list is not found.
			 *             'Edit'                                    // Command to execute: 'Edit', 'OpenWith', 'Print'
			 *         );
			 *     }
			 *
			 *     function errorCallback() {
			 *         var installerFilePath = "/Plugins/" + ITHit.WebDAV.Client.DocManager.GetProtocolInstallFileNames()[0];
			 *
			 *         if (confirm("Opening this type of file requires a protocol installation. Select OK to download the protocol installer.")){
			 *             window.open(installerFilePath);
			 *         }
			 *     }
			 * &lt;/script&gt;
			 * &lt;input type="button" value="Edit Document" onclick="edit()" /&gt;
			 * &lt;/body&gt;
			 * &lt;/html&gt;
			 * @api
			 * @param {string | string[]} sDocumentUrls Array of document URLs to be opened for editing from server. All documents must be located under the same mount URL (specified in <code>sMountUrl</code> parameter). Must be a full URL(s) including the domain name.
             * @param {string} [sMountUrl] URL to mount file system to before opening the folder. Usually this is your WebDAV server root folder. If this perameter is not specified file system will be mounted to the folder in which document is located.
			 * @param {function} [errorCallback] Function to call if document opening failed. Typically you will request the protocol installation in this callback.
             * If not specified a default message offering protocol installation will be displayed.
             * @param {string} [reserved] Reserved for future use.
             * @param {string} [sSearchIn] <span class="optional">v3 Beta and later only.</span> Indicates cookies authentication. Supported options are:
             * <ul>
             * <li><code>'Current'</code> - Copies cookies from web browser in which this script is running.</li>
             * <li><code>'None'</code> - do not search or copy any cookies.</li>
             * </ul>
             * Default is <code>'None'</code>.
             * @param {string} [sCookieNames] <span class="optional">v3 Beta and later only.</span> Coma separated list of cookie names to search for. Microsoft Office requires persistent cookie (with expiration date), it does not support session cookies.
             * @param {string} [sLoginUrl] <span class="optional">v3 Beta and later only.</span> Login URL to redirect to in case any cookies specified in <code>sCookieNames</code> parameter are not found.
             * @param {string} [sCommand] <span class="optional">v3 Beta and later only.</span> Command to use when opening the document. Supported options are:
             * <ul>
             * <li> <code>null</code> - Chooses an appropriate verb to open a document in the associated application.
             * <li> <code>'Edit'</code> - Opens a document for editing.
             * <li> <code>'Open'</code> - Opens a document in the associated application. Not applicable for some applications.
             * <li> <code>'OpenWith'</code> - Show system 'Open With' dialog to select application to be used to open a document. This option is supported on Windows only.
             * <li> <code>'Print'</code> - Prints a document. The application that prints a document is running in a minimized state and automatically closes if printing is successful. If printing fails, the application remains open. To print multiple documents, pass a list of documents as a first parameter. This option is supported on Windows only.
             * </ul>
             * Default is <code>null</code>.       
			 */ 
 function DavProtocolEditDocument(sDocumentUrls: string | string[], sMountUrl?: string | null, errorCallback?: Function | null, reserved?: string | null, sSearchIn?: string | null, sCookieNames?: string | null, sLoginUrl?: string | null, sCommand?: string | null): void; 
 }class DocManager  { 
	 /**
			 * Collection of extensions of files which are opened with Microsoft Office.
			 * @api
			 * @type {ITHit.WebDAV.Client.MsOfficeEditExtensions}
			 * @examplecode ITHit.WebDAV.Client.Tests.DocManager.MsOfficeEditExtensions.EditDocumentTest
             * @examplecode ITHit.WebDAV.Client.TSExamples.DocManager.MsOfficeEditExtensions.EditDocumentTest
			 */ 
 static MsOfficeEditExtensions: ITHit.WebDAV.Client.MsOfficeEditExtensions 
 MsOfficeEditExtensions: ITHit.WebDAV.Client.MsOfficeEditExtensions 
 /**
			 * Timeout in milliseconds to call error callback if application associated with the extension did not start.
			 * Default is 3000ms.
			 * Used in Chrome / Internet Explorer / Safari if protocol application is not installed AND web browser protocol warning dialog is disabled AND EditDocument() / MicrosoftOfficeEditDocument() function is called (in case of Basic/Digest/Anonymous authentication).
			 * NOT used in Firefox / Edge OR if DavProtocolEditDocument() is called OR if web browser protocol warning dialog is enabled.
			 * @api
			 * @type {number}
			 */ 
 static ProtocolTimeoutMs: number 
 ProtocolTimeoutMs: number 
 }/**
 * Provides support partial uploads and resuming broken uploads.
 * @api
 * @class ITHit.WebDAV.Client.ResumableUpload
 */ 
 class ResumableUpload  { 
	 /**
	 * Get amount of bytes successfully uploaded to server.
	 * @api
	 * @param {ITHit.WebDAV.Client.ResumableUpload~GetBytesUploadedAsyncCallback} fCallback Function to call when operation is completed.
	 * @returns {ITHit.WebDAV.Client.Request} Request object.
	 */ 
 GetBytesUploadedAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
	 * Cancels upload of the file.
	 * @api
	 * @param {string} mLockTokens Lock token for this file.
	 * @param {ITHit.WebDAV.Client.ResumableUpload~CancelUploadAsyncCallback} fCallback Function to call when operation is completed.
	 * @returns {ITHit.WebDAV.Client.Request} Request object.
	 */ 
 CancelUploadAsync(mLockTokens: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 }/**
 * Information about lock set on an item.
 * @api
 * @class ITHit.WebDAV.Client.GEditInfo
 */ 
 class GEditInfo  { 
	 /**
     * File ID from google drive.
     * @api
     * @type {string}
    */ 
 GFileID: string 
 /**
     * Revision ID from google drive.
     * @api
     * @type {string}
    */ 
 GRevisionID: string 
 }/**
	 * Represents a file on a WebDAV server.
	 * @api
	 * @class ITHit.WebDAV.Client.File
	 * @extends ITHit.WebDAV.Client.HierarchyItem
	 */ 
 namespace File{ 
	 /**
             * Locks the item and upload to google drive.
             * @api
             * @param {ITHit.WebDAV.Client.Request} oRequest Current WebDAV session.  
             * @param {string} sHref This item path on the server.
             * @returns {ITHit.WebDAV.Client.GEditInfo} Instance of GEditInfo.
             */ 
 function GEdit(oRequest: ITHit.WebDAV.Client.Request, sHref: string): ITHit.WebDAV.Client.GEditInfo; 
 /**
             * Locks the item and upload to google drive.
             * @api
             * @param {ITHit.WebDAV.Client.Request} oRequest Current WebDAV session.  
             * @param {string} sHref This item path on the server.
             * @param {ITHit.WebDAV.Client.File~GEditAsyncCallback} fCallback Function to call when operation is completed.
             * @returns {ITHit.WebDAV.Client.Request} Request object.
             */ 
 function GEditAsync(oRequest: ITHit.WebDAV.Client.Request, sHref: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		     * Removes the lock and update file.
		     * @api
		     * @param {ITHit.WebDAV.Client.Request} oRequest Current WebDAV session.  
             * @param {string} sHref This item path on the server.
		     * @param {string} [sLockToken] Identifies lock to be prolonged.
		     * @throws ITHit.WebDAV.Client.Exceptions.PreconditionFailedException The item is not locked.
		     * @throws ITHit.WebDAV.Client.Exceptions.NotFoundException The item doesn't exist on the server.
		     * @throws ITHit.WebDAV.Client.Exceptions.WebDavException Unexpected error occurred.
		     */ 
 function GUnlock(oRequest: ITHit.WebDAV.Client.Request, sHref: string, sLockToken?: string | null): void; 
 /**
             * Removes the lock and update file.
             * @api
             * @param {ITHit.WebDAV.Client.Request} oRequest Current WebDAV session.  
             * @param {string} sHref This item path on the server.
             * @param {string} sLockToken Identifies lock to be prolonged.
             * @param {string} sRevisionID Revision ID of google file.
             * @param {ITHit.WebDAV.Client.File~GUnlockAsyncCallback} fCallback Function to call when operation is completed.
             * @returns {ITHit.WebDAV.Client.Request} Request object.
             */ 
 function GUnlockAsync(oRequest: ITHit.WebDAV.Client.Request, sHref: string, sLockToken: string, sRevisionID: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 }class File extends ITHit.WebDAV.Client.HierarchyItem { 
	 /**
		 * Length of the file.
         * @api
		 * @type {number}
		 */ 
 ContentLength: number 
 /**
		 * Content type of the file.
         * @api
		 * @type {string}
		 */ 
 ContentType: string 
 /**
		 * ResumableUpload instance to manage partially failed uploads.
		 * @api
		 * @type {ITHit.WebDAV.Client.ResumableUpload}
		 */ 
 ResumableUpload: ITHit.WebDAV.Client.ResumableUpload 
 /**
		 * Reads file content. To download only a part of a file you can specify 2 parameters in ReadContent call.
		 * First parameter is the starting byte (zero-based) at witch to start content download, the second – amount
		 * of bytes to be downloaded. The library will add Range header to the request in this case.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CreateFile.ReadContent
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CreateFile.ReadContentRange
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CreateFile.ReadContent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CreateFile.ReadContentRange
		 * @param {number} iBytesFrom Start position to retrieve lBytesCount number of bytes from.
		 * @param {number} iBytesCount Number of bytes to retrieve.
		 * @param {ITHit.WebDAV.Client.File~ReadContentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 ReadContentAsync(iBytesFrom: number, iBytesCount: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Writes file content.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CreateFile.OnlyWriteContent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CreateFile.OnlyWriteContent
		 * @param {string} sContent File content.
		 * @param {string} sLockToken Lock token.
		 * @param {string} sMimeType File mime-type.
		 * @param {ITHit.WebDAV.Client.File~WriteContentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 WriteContentAsync(sContent: string, sLockToken: string, sMimeType: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves item versions.
		 * @examplecode ITHit.WebDAV.Client.Tests.Versions.GetVersions.GetVersions
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Versions.GetVersions.GetVersions
		 * @api
		 * @param {ITHit.WebDAV.Client.File~GetVersionsAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetVersionsAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Update to version.
		 * @examplecode ITHit.WebDAV.Client.Tests.Versions.ManageVersions.UpdateToVersion
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Versions.ManageVersions.UpdateToVersion
		 * @api
		 * @param {string|ITHit.WebDAV.Client.Version} mVersion Href to file with version attribute or {@link ITHit.WebDAV.Client.Version} instance.
		 * @param {ITHit.WebDAV.Client.File~UpdateToVersionAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 UpdateToVersionAsync(mVersion: string | ITHit.WebDAV.Client.Version, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Enables / disables version control for this file.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Versions.PutUnderVersion.EnableVersion
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Versions.PutUnderVersion.EnableVersion
		 * @param {boolean} bEnable True to enable version-control, false - to disable.
		 * @param {string} mLockToken Lock token for this item.
		 * @param {ITHit.WebDAV.Client.File~PutUnderVersionControlAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 PutUnderVersionControlAsync(bEnable: boolean, mLockToken: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Current WebDAV session.
		 * @api
		 * @type {ITHit.WebDAV.Client.WebDavSession}
		 */ 
 Session: ITHit.WebDAV.Client.WebDavSession 
 /**
		 * This item path on the server.
		 * @api
		 * @type {string}
		 */ 
 Href: string 
 /**
		 * Most recent modification date.
		 * @api
		 * @type {Date}
		 */ 
 LastModified: Date 
 /**
		 * User friendly item name.
		 * @api
		 * @type {string}
		 */ 
 DisplayName: string 
 /**
		 * The date item was created.
		 * @api
		 * @type {Date}
		 */ 
 CreationDate: Date 
 /**
		 * Type of the item (File or Folder).
		 * @api
		 * @type {string}
		 * @see ITHit.WebDAV.Client.ResourceType
		 */ 
 ResourceType: string 
 /**
		 * Retrieves information about supported locks. Item can support exclusive, shared locks or do not support
		 * any locks. If you set exclusive lock other users will not be able to set any locks. If you set shared
		 * lock other users will be able to set shared lock on the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.CheckSupport.CheckLockSupport
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.CheckSupport.CheckLockSupport
		 * @type {Array.<string>}
		 * @see ITHit.WebDAV.Client.LockScope
		 */ 
 SupportedLocks: string[] 
 /**
		 * List of locks applied to this item.
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.GetLocks.GetList
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.GetLocks.GetList
		 * @api
		 * @type {Array.<ITHit.WebDAV.Client.LockInfo>}
		 */ 
 ActiveLocks: ITHit.WebDAV.Client.LockInfo[] 
 /**
		 * List of item properties.
		 * @api
		 * @type {ITHit.WebDAV.Client.PropertyList}
		 */ 
 Properties: ITHit.WebDAV.Client.PropertyList 
 /**
		 * Returns true if file is under version control. Otherwise false. To detect if version control could
		 * be enabled for this item call GetSupportedFeaturesAsync and check for VersionControl token.
		 * To enable version control call PutUnderVersionControlAsync.
		 * @api
		 * @returns {boolean} Boolean, if true - versions supported
		 */ 
 /**
		 * Number of bytes available for this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 AvailableBytes: number 
 /**
		 * Number of bytes used by this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 UsedBytes: number 
 /**
		 * Refreshes item loading data from server.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Refresh.Refresh
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Refresh.Refresh
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Copies this item to destination folder.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Copy
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Copy
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to copied item.
		 * @param {boolean} bDeep Indicates whether children of this item should be copied.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair[]} [oLockTokens] Lock tokens for destination folder.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~CopyToAsyncCallback} fCallback Function to call when operation is completed.
		 */ 
 CopyToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bDeep: boolean, bOverwrite: boolean, oLockTokens?: ITHit.WebDAV.Client.LockUriTokenPair[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
		 * Deletes this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Delete.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Delete.Delete
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair | null} oLockTokens Lock tokens for this item or any locked child item.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~DeleteAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 DeleteAsync(oLockTokens: ITHit.WebDAV.Client.LockUriTokenPair | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Returns names of all custom properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyNames
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyNamesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyNamesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves values of specific properties.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyValues
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyValues
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyValuesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyValuesAsync(aNames: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves all custom properties exposed by the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetAllProperties
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetAllProperties
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetAllPropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetAllPropertiesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves parent hierarchy item of this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetParent.GetParent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetParent.GetParent
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetParentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetParentAsync(aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves media type independent links.
		 * @api
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSourceAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSourceAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Locks the item. If the lock was successfully applied, the server will return a lock token. You will pass this
		 * lock token back to the server when updating and unlocking the item. The actual lock time applied by the server
		 * may be different from the one requested by the client.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetLock
		 * @param {string} sLockScope Scope of the lock. See LockScope Enumeration {@link ITHit.WebDAV.Client.LockScope}
		 * @param {boolean} bDeep Whether to lock entire subtree.
		 * @param {string} sOwner Owner of the lock.
		 * @param {number} iTimeout Timeout after which lock expires. Pass -1 to request an infinite timeout.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~LockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 LockAsync(sLockScope: string, bDeep: boolean, sOwner: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Moves this item to another location.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Move
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Move
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to moved item.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {(string|ITHit.WebDAV.Client.LockUriTokenPair[])} oLockTokens Lock tokens for item to be moved, for destination folder or file to be overwritten that are locked.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~MoveToAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 MoveToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bOverwrite: boolean, oLockTokens: string | ITHit.WebDAV.Client.LockUriTokenPair[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Prolongs the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.RefreshLock.RefreshLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.RefreshLock.RefreshLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {number} iTimeout New timeout to set.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshLockAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshLockAsync(sLockToken: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Gets features supported by this item, such as WebDAV class support.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSupportedFeaturesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSupportedFeaturesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Removes the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetUnLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetUnLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UnlockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 UnlockAsync(sLockToken: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Updates values of properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Delete
		 * @param {ITHit.WebDAV.Client.Property[]} oPropertiesToAddOrUpdate Properties to be updated.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} oPropertiesToDelete Names of properties to be removed from this item.
		 * @param {string} [sLockToken] Lock token.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UpdatePropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.WebDavRequest|null} WebDAV request
		 */ 
 UpdatePropertiesAsync(oPropertiesToAddOrUpdate: ITHit.WebDAV.Client.Property[], oPropertiesToDelete: ITHit.WebDAV.Client.PropertyName[], sLockToken?: string | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.WebDavRequest | null; 
 }/**
     * @classdesc Represents a search request.
	 * @constructs
	 * @api
	 * @param {string} sSearchPhrase Search phrase.
	 */ 
 class SearchQuery  { 
	 constructor(sSearchPhrase: string); 
 /**
	 * Search phrase.
	 * @api
	 * @type {string}
	 */ 
 Phrase: string 
 /**
	 * <p>Properties to be returned from server with each item returned in search results.</p> 
     * <p>This property can be used to request any additional data required in search results, such as snippet of 
     * text around the search phrase, document title, author name, etc.</p>
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName[]}
	 */ 
 SelectProperties: ITHit.WebDAV.Client.PropertyName[] 
 /**
	 * Enables or disables search by properties specified in <code>LikeProperties</code> list. Default is <code>true</code>.
	 * @api
	 * @type {boolean}
	 */ 
 EnableLike: boolean 
 /**
	 * List of properties to be used in like conditions. The search phrase will be searched in the properties specilied in this list.
	 * @api
	 * @type {ITHit.WebDAV.Client.PropertyName[]}
	 */ 
 LikeProperties: ITHit.WebDAV.Client.PropertyName[] 
 /**
	 * Enables or disables search inside file content. Default is <code>true</code>.
	 * @api
	 * @type {boolean}
	 */ 
 EnableContains: boolean 
 }/**
 * Array of file and folder items that correspond to the offset, number of items and sorting conditions requested from server.
 * Also contains a total number of items in this folder or in search results.
 * @api
 * @class ITHit.WebDAV.Client.PageResults
 */ 
 class PageResults  { 
	 /**
	 * Total number of items in the folder or in search results.
	 * @api
	 * @type {number}
	 */ 
 TotalItems: number 
 /**
	 * Items that correspond to the requested page and sorting.
	 * @api
	 * @type {ITHit.WebDAV.Client.HierarchyItem[]}
	 */ 
 Page: ITHit.WebDAV.Client.HierarchyItem[] 
 }/**
     * Represents a folder in a WebDAV repository.
     * @api
     * @class ITHit.WebDAV.Client.Folder
     * @extends ITHit.WebDAV.Client.HierarchyItem
     */ 
 class Folder extends ITHit.WebDAV.Client.HierarchyItem { 
	 /**
         * Creates a new folder with a specified name as child of this folder.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CreateFolder.CreateFolder
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CreateFolder.CreateFolder
         * @param {string} sName Name of the new folder.
         * @param {string} [sLockTokens] Lock token for ITHit.WebDAV.Client.Folder folder.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.Folder~CreateFolderAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 CreateFolderAsync(sName: string, sLockTokens?: string | null, aProperties?: ITHit.WebDAV.Client.PropertyName[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Creates a new file with a specified name as a child of this folder.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CreateFile.CreateAndWriteContent
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CreateFile.CreateAndWriteContent
         * @param {string} sName Name of the new file.
         * @param {string} sLockTokens Lock token for current folder.
         * @param {string} sContent File content.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.Folder~CreateFileAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 CreateFileAsync(sName: string, sLockTokens: string, sContent: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Gets specified number of children of this folder that correspond to requested offset and sorting. Use GetSupportedFeaturesAsync() function to detect if paging is supported.
         * @api      
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetFolderItems.GetPage
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetFolderItems.GetPage
         * @param {ITHit.WebDAV.Client.PropertyName[]} [aProperties] Additional properties requested from server. If null is specified, only default properties are returned.      
         * @param {number} [nOffset] The number of items to skip before returning the remaining items.
         * @param {number} [nResults] The number of items to return.
         * @param {ITHit.WebDAV.Client.OrderProperty[]} [aOrderProperties] List of order properties.
         * @param {ITHit.WebDAV.Client.Folder~GetPageAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.       
         */ 
 GetPageAsync(aProperties?: ITHit.WebDAV.Client.PropertyName[] | null, nOffset?: number | null, nResults?: number | null, aOrderProperties?: ITHit.WebDAV.Client.OrderProperty[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * This method returns all items contained in the folder, which may be very large. To limit amount of items returned and get only a single results page use [GetPageAsync]{@link ITHit.WebDAV.Client.Folder#GetPageAsync} function instead.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetFolderItems.GetChildren
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetFolderItems.GetChildren
         * @param {boolean} bRecursively Indicates if all subtree of children should be return. Default is false.
         * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. If null is specified, only default properties are returned.
         * @param {ITHit.WebDAV.Client.Folder~GetChildrenAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetChildrenAsync(bRecursively: boolean, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Gets the specified folder from server.
         * @api
         * @param {string} sName Name of the folder.
         * @param {ITHit.WebDAV.Client.Folder~GetFolderAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetFolderAsync(sName: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Gets the specified file from server.
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetItemByFolder.GetFile
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetItemByFolder.GetFile
         * @api
         * @param {string} sName Name of the file.
         * @param {ITHit.WebDAV.Client.Folder~GetFileAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetFileAsync(sName: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Gets the specified item from server.
         * @api
         * @param {string} sName Name of the item.
         * @param {ITHit.WebDAV.Client.Folder~GetItemAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetItemAsync(sName: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Checks whether specified item exists in the folder.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.ItemExists.ItemExists
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.ItemExists.ItemExists
         * @param {string} sName Name of the item.
         * @param {ITHit.WebDAV.Client.Folder~ItemExistsAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 ItemExistsAsync(sName: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * This method returns all items found on the server, which may be very large. To limit amount of items returned and get only a single results page use [GetSearchPageByQueryAsync]{@link ITHit.WebDAV.Client.Folder#GetSearchPageByQueryAsync} function instead.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Search.SearchByQuery
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Search.SearchByQuery
         * @param {ITHit.WebDAV.Client.SearchQuery} oSearchQuery Object with search query conditions.
         * @param {ITHit.WebDAV.Client.Folder~SearchByQueryAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 SearchByQueryAsync(oSearchQuery: ITHit.WebDAV.Client.SearchQuery, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Searches folder by query. Returns specified number of search result items that correspond to requested offset and sorting. Use GetSupportedFeaturesAsync() function to detect if paging is supported.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Search.GetSearchPageByQuery
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Search.GetSearchPageByQuery
         * @param {ITHit.WebDAV.Client.SearchQuery} oSearchQuery Object with search query conditions.
         * @param {number} [nOffset] The number of items to skip before returning the remaining items.
         * @param {number} [nResults] The number of items to return.
         * @param {ITHit.WebDAV.Client.Folder~GetSearchPageByQueryAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetSearchPageByQueryAsync(oSearchQuery: ITHit.WebDAV.Client.SearchQuery, nOffset?: number | null, nResults?: number | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Searches folder by search string. To limit amount of items returned and get only a single results page use [GetSearchPageAsync]{@link ITHit.WebDAV.Client.Folder#GetSearchPageAsync} function instead.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Search.SearchByString
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Search.SearchByString
         * @param {string} sSearchQuery String of search query.
         * @param {ITHit.WebDAV.Client.PropertyName[]} [aProperties] Additional properties requested from server. If null is specified, only default properties are returned.
         * @param {ITHit.WebDAV.Client.Folder~SearchAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 SearchAsync(sSearchQuery: string, aProperties?: ITHit.WebDAV.Client.PropertyName[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Searches folder by search string. Returns specified number of search result items that correspond to requested offset and sorting. Use GetSupportedFeaturesAsync() function to detect if paging is supported.
         * @api
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Search.GetSearchPageByString
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Search.GetSearchPageByString
         * @param {string} sSearchQuery String of search query.
         * @param {ITHit.WebDAV.Client.PropertyName[]} [aProperties] Additional properties requested from server. If null is specified, only default properties are returned.
         * @param {number} [nOffset] The number of items to skip before returning the remaining items.
         * @param {number} [nResults] The number of items to return.
         * @param {ITHit.WebDAV.Client.Folder~GetSearchPageAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 GetSearchPageAsync(sSearchQuery: string, aProperties?: ITHit.WebDAV.Client.PropertyName[] | null, nOffset?: number | null, nResults?: number | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Current WebDAV session.
		 * @api
		 * @type {ITHit.WebDAV.Client.WebDavSession}
		 */ 
 Session: ITHit.WebDAV.Client.WebDavSession 
 /**
		 * This item path on the server.
		 * @api
		 * @type {string}
		 */ 
 Href: string 
 /**
		 * Most recent modification date.
		 * @api
		 * @type {Date}
		 */ 
 LastModified: Date 
 /**
		 * User friendly item name.
		 * @api
		 * @type {string}
		 */ 
 DisplayName: string 
 /**
		 * The date item was created.
		 * @api
		 * @type {Date}
		 */ 
 CreationDate: Date 
 /**
		 * Type of the item (File or Folder).
		 * @api
		 * @type {string}
		 * @see ITHit.WebDAV.Client.ResourceType
		 */ 
 ResourceType: string 
 /**
		 * Retrieves information about supported locks. Item can support exclusive, shared locks or do not support
		 * any locks. If you set exclusive lock other users will not be able to set any locks. If you set shared
		 * lock other users will be able to set shared lock on the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.CheckSupport.CheckLockSupport
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.CheckSupport.CheckLockSupport
		 * @type {Array.<string>}
		 * @see ITHit.WebDAV.Client.LockScope
		 */ 
 SupportedLocks: string[] 
 /**
		 * List of locks applied to this item.
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.GetLocks.GetList
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.GetLocks.GetList
		 * @api
		 * @type {Array.<ITHit.WebDAV.Client.LockInfo>}
		 */ 
 ActiveLocks: ITHit.WebDAV.Client.LockInfo[] 
 /**
		 * List of item properties.
		 * @api
		 * @type {ITHit.WebDAV.Client.PropertyList}
		 */ 
 Properties: ITHit.WebDAV.Client.PropertyList 
 /**
		 * Returns true if file is under version control. Otherwise false. To detect if version control could
		 * be enabled for this item call GetSupportedFeaturesAsync and check for VersionControl token.
		 * To enable version control call PutUnderVersionControlAsync.
		 * @api
		 * @returns {boolean} Boolean, if true - versions supported
		 */ 
 /**
		 * Number of bytes available for this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 AvailableBytes: number 
 /**
		 * Number of bytes used by this user on server. -1 if server does not support Quota.
		 * @api
		 * @type {number}
		 */ 
 UsedBytes: number 
 /**
		 * Refreshes item loading data from server.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Refresh.Refresh
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Refresh.Refresh
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Copies this item to destination folder.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Copy
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Copy
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to copied item.
		 * @param {boolean} bDeep Indicates whether children of this item should be copied.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair[]} [oLockTokens] Lock tokens for destination folder.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~CopyToAsyncCallback} fCallback Function to call when operation is completed.
		 */ 
 CopyToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bDeep: boolean, bOverwrite: boolean, oLockTokens?: ITHit.WebDAV.Client.LockUriTokenPair[] | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
		 * Deletes this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Delete.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Delete.Delete
		 * @param {ITHit.WebDAV.Client.LockUriTokenPair | null} oLockTokens Lock tokens for this item or any locked child item.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~DeleteAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 DeleteAsync(oLockTokens: ITHit.WebDAV.Client.LockUriTokenPair | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Returns names of all custom properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyNames
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyNamesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyNamesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves values of specific properties.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetPropertyValues
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetPropertyValues
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aNames
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetPropertyValuesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetPropertyValuesAsync(aNames: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves all custom properties exposed by the item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.GetProperties.GetAllProperties
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.GetProperties.GetAllProperties
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetAllPropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetAllPropertiesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves parent hierarchy item of this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetParent.GetParent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetParent.GetParent
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetParentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetParentAsync(aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Retrieves media type independent links.
		 * @api
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSourceAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSourceAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Locks the item. If the lock was successfully applied, the server will return a lock token. You will pass this
		 * lock token back to the server when updating and unlocking the item. The actual lock time applied by the server
		 * may be different from the one requested by the client.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetLock
		 * @param {string} sLockScope Scope of the lock. See LockScope Enumeration {@link ITHit.WebDAV.Client.LockScope}
		 * @param {boolean} bDeep Whether to lock entire subtree.
		 * @param {string} sOwner Owner of the lock.
		 * @param {number} iTimeout Timeout after which lock expires. Pass -1 to request an infinite timeout.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~LockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 LockAsync(sLockScope: string, bDeep: boolean, sOwner: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Moves this item to another location.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.CopyMove.Move
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.CopyMove.Move
		 * @param {ITHit.WebDAV.Client.Folder} oDestinationFolder Folder to move to.
		 * @param {string} sDestinationName Name to assign to moved item.
		 * @param {boolean} bOverwrite Whether existing destination item shall be overwritten.
		 * @param {(string|ITHit.WebDAV.Client.LockUriTokenPair[])} oLockTokens Lock tokens for item to be moved, for destination folder or file to be overwritten that are locked.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~MoveToAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 MoveToAsync(oDestinationFolder: ITHit.WebDAV.Client.Folder, sDestinationName: string, bOverwrite: boolean, oLockTokens: string | ITHit.WebDAV.Client.LockUriTokenPair[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Prolongs the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.RefreshLock.RefreshLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.RefreshLock.RefreshLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {number} iTimeout New timeout to set.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshLockAsyncCallback} fCallback Function to call when operation is completed.
		 * @return {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshLockAsync(sLockToken: string, iTimeout: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Gets features supported by this item, such as WebDAV class support.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.SupportedFeatures.SupportedFeatures
		 * @param {ITHit.WebDAV.Client.HierarchyItem~GetSupportedFeaturesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 GetSupportedFeaturesAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Removes the lock.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.Locks.Lock.SetUnLock
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Locks.Lock.SetUnLock
		 * @param {string} sLockToken Identifies lock to be prolonged.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UnlockAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 UnlockAsync(sLockToken: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Updates values of properties exposed by this item.
		 * @api
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyProperties.UpdateProperties.Delete
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Update
		 * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyProperties.UpdateProperties.Delete
		 * @param {ITHit.WebDAV.Client.Property[]} oPropertiesToAddOrUpdate Properties to be updated.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} oPropertiesToDelete Names of properties to be removed from this item.
		 * @param {string} [sLockToken] Lock token.
		 * @param {ITHit.WebDAV.Client.HierarchyItem~UpdatePropertiesAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.WebDavRequest|null} WebDAV request
		 */ 
 UpdatePropertiesAsync(oPropertiesToAddOrUpdate: ITHit.WebDAV.Client.Property[], oPropertiesToDelete: ITHit.WebDAV.Client.PropertyName[], sLockToken?: string | null, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.WebDavRequest | null; 
 }/**
	 * Represents a version on a WebDAV server.
	 * @api
	 * @class ITHit.WebDAV.Client.Version
	 * @extends ITHit.WebDAV.Client.File
	 */ 
 class Version extends ITHit.WebDAV.Client.File { 
	 /**
		 * This property contains a server-defined string that is different for each version.
		 * This string is intended for display for a user.
		 * @api
		 * @type {string}
		 */ 
 VersionName: string 
 /**
		 * @api
		 * @type {string}
		 */ 
 CreatorDisplayName: string 
 /**
		 * @api
		 * @type {string}
		 */ 
 Comment: string 
 /**
		 * Update file to current version.
		 * @examplecode ITHit.WebDAV.Client.Tests.Versions.ManageVersions.UpdateToThis
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Versions.ManageVersions.UpdateToThis
		 * @api
		 * @param {ITHit.WebDAV.Client.Version~UpdateToThisVersionAsync} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 UpdateToThisAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Read file content. To download only a part of a file you can specify 2 parameters in ReadContent call.
		 * First parameter is the starting byte (zero-based) at witch to start content download, the second – amount
		 * of bytes to be downloaded. The library will add Range header to the request in this case.
		 * @examplecode ITHit.WebDAV.Client.Tests.Versions.ReadContent.ReadContent
		 * @examplecode ITHit.WebDAV.Client.TSExamples.Versions.ReadContent.ReadContent
		 * @api
		 * @param {number} iBytesFrom Start position to retrieve lBytesCount number of bytes from.
		 * @param {number} iBytesCount Number of bytes to retrieve.
		 * @param {ITHit.WebDAV.Client.File~ReadContentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 ReadContentAsync(iBytesFrom: number, iBytesCount: number, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Writes file content.
		 * @api
		 * @param {string} sContent File content.
		 * @param {string} sLockToken Lock token.
		 * @param {string} sMimeType File mime-type.
		 * @param {ITHit.WebDAV.Client.File~WriteContentAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 WriteContentAsync(sContent: string, sLockToken: string, sMimeType: string, fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Refreshes item loading data from server.
		 * @api
		 * @param {ITHit.WebDAV.Client.HierarchyItem~RefreshAsyncCallback} fCallback Function to call when operation is completed.
		 * @returns {ITHit.WebDAV.Client.Request} Request object.
		 */ 
 RefreshAsync(fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
		 * Length of the file.
         * @api
		 * @type {number}
		 */ 
 ContentLength: number 
 /**
		 * Content type of the file.
         * @api
		 * @type {string}
		 */ 
 ContentType: string 
 /**
		 * Current WebDAV session.
		 * @api
		 * @type {ITHit.WebDAV.Client.WebDavSession}
		 */ 
 Session: ITHit.WebDAV.Client.WebDavSession 
 /**
		 * This item path on the server.
		 * @api
		 * @type {string}
		 */ 
 Href: string 
 /**
		 * User friendly item name.
		 * @api
		 * @type {string}
		 */ 
 DisplayName: string 
 /**
		 * The date item was created.
		 * @api
		 * @type {Date}
		 */ 
 CreationDate: Date 
 /**
		 * List of item properties.
		 * @api
		 * @type {ITHit.WebDAV.Client.PropertyList}
		 */ 
 Properties: ITHit.WebDAV.Client.PropertyList 
 }/**
 * Represents information about errors occurred in different elements.
 * @api
 * @class ITHit.WebDAV.Client.Error
 */ 
 class Error  { 
	 /**
     * Gets the generic description, if available.
     * @api
     * @type {string}
     */ 
 Description: string 
 /**
     * Array of the errors returned by server.
     * @api
     * @type {ITHit.WebDAV.Client.MultistatusResponse[]}
     */ 
 Responses: ITHit.WebDAV.Client.MultistatusResponse[] 
 }/**
	 * This class represents asynchronous request to WebDAV server. The instance of this class is returned from most
	 * asynchronous methods of the library. You can use it to cancel the request calling Abort() method of this class
	 * as well as to show progress attaching to Progress event.
	 * @api
	 * @class ITHit.WebDAV.Client.WebDavRequest
	 */ 
 class WebDavRequest  { 
	 }/**
	 * Represents a context for one or many requests.
	 * @api
	 * @class ITHit.WebDAV.Client.RequestProgress
	 */ 
 class RequestProgress  { 
	 /**
		 * Progress in percents
		 * @api
		 * @type {number}
		 */ 
 Percent: number 
 /**
		 * Count of complete operations
		 * @api
		 * @type {number}
		 */ 
 CountComplete: number 
 /**
		 * Total operations count
		 * @api
		 * @type {number}
		 */ 
 CountTotal: number 
 /**
		 * Count of loaded bytes
		 * @api
		 * @type {number}
		 */ 
 BytesLoaded: number 
 /**
		 * Total bytes. This param can be changed in progress, if request has many operations (sub-requests).
		 * @api
		 * @type {number}
		 */ 
 BytesTotal: number 
 /**
		 * Flag indicating if the resource concerned by the XMLHttpRequest ProgressEvent has a length that can be calculated.
		 * @api
		 * @type {boolean}
		 */ 
 LengthComputable: boolean 
 }/**
	 * Represents a context for one or many requests.
	 * @api
	 * @fires ITHit.WebDAV.Client.Request#OnProgress
	 * @fires ITHit.WebDAV.Client.Request#OnError
	 * @fires ITHit.WebDAV.Client.Request#OnFinish
	 * @class ITHit.WebDAV.Client.Request
	 */ 
 class Request  { 
	 /**
			 * Progress event trigger on update information about request progress.
			 * See {@link ITHit.WebDAV.Client.RequestProgress} for more information.
			 * @api
			 * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.Progress.Progress
			* @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.Progress.Progress
			 * @event ITHit.WebDAV.Client.Request#OnProgress
			 * @property {ITHit.WebDAV.Client.RequestProgress} Progress Progress info instance
			 * @property {ITHit.WebDAV.Client.Request} Request Current request
			 */ 
 /**
			 * Error event trigger when one of request operations have error.
			 * Notice: This event trigger before async method callback.
			 * @api
			 * @event ITHit.WebDAV.Client.Request#OnError
			 * @property {Error|ITHit.WebDAV.Client.Exceptions.WebDavException} Error Error object
			 * @property {ITHit.WebDAV.Client.Request} Request Current request
			 */ 
 /**
			 * Finish event trigger once when all operations in requests is complete.
			 * Notice: This event trigger before async method callback.
			 * @api
			 * @event ITHit.WebDAV.Client.Request#OnFinish
			 * @property {ITHit.WebDAV.Client.Request} Request Current request
			 */ 
 /**
		 * Progress info object, auto updated on `OnProgress` event.
		 * @api
		 * @type {ITHit.WebDAV.Client.RequestProgress}
		 */ 
 Progress: ITHit.WebDAV.Client.RequestProgress 
 /**
         * Progress info object, auto updated on `OnUploadProgress` event.
         * @public
         * @type {ITHit.WebDAV.Client.RequestProgress}
         */ 
 UploadProgress: ITHit.WebDAV.Client.RequestProgress 
 /**
		 * @api
		 * @param {string} sEventName
		 * @param {function} fCallback
		 * @param {object} [oContext]
		 */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
		 * @api
		 * @param {string} sEventName
		 * @param {function} fCallback
		 * @param {object} [oContext]
		 */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
		 * Cancels asynchronous request. The Finish event and the callback function will be called immediately after this method call.
		 * @api
		 */ 
 Abort(): void; 
 /**
         * Cancels asynchronous request. The Finish event and the callback function will not be called after this method call.
         * @public
         */ 
 AbortAsync(): void; 
 }/**
         * @classdesc Session for accessing WebDAV servers.
         * @example
         *  &lt;!DOCTYPE html&gt;
         *  &lt;html lang="en"&gt;
         *  &lt;head&gt;
         *      &lt;title&gt;IT Hit WebDAV Ajax Library&lt;/title&gt;
         *      &lt;script src="http://www.ajaxbrowser.com/ITHitService/WebDAVAJAXLibrary/ITHitWebDAVClient.js" type="text/javascript"&gt;&lt;/script&gt;
         *      &lt;script type="text/javascript"&gt;
         *          var sFolderUrl = 'http://localhost:35829/';
         *          var oSession = new ITHit.WebDAV.Client.WebDavSession();
         *
         *          oSession.OpenFolderAsync(sFolderUrl, null, function (oFolderAsyncResult) {
         *              if (!oFolderAsyncResult.IsSuccess) {
         *                  console.error(oFolderAsyncResult.Error);
         *                  return;
         *               }
         *
         *              /&#42;&#42; &#64;typedef {ITHit.WebDAV.Client.Folder} oFolder &#42;/
         *              var oFolder = oFolderAsyncResult.Result;
         *
         *              console.log(oFolder.Href);
         *
         *              oFolder.GetChildrenAsync(false, null, function (oAsyncResult) {
         *                  if (!oAsyncResult.IsSuccess) {
         *                      console.error(oFolderAsyncResult.Error);
         *                      return;
         *                  }
         *
         *                  /&#42;&#42; &#64;typedef {ITHit.WebDAV.Client.HierarchyItem[]} aHierarchyItems &#42;/
         *                  var aHierarchyItems = oAsyncResult.Result;
         *
         *                  for (var i = 0, l = aHierarchyItems.length; i &lt; l; i++) {
         *                      var sSize = aHierarchyItems[i].ResourceType !== ITHit.WebDAV.Client.ResourceType.Folder ?
         *                          Math.round(aHierarchyItems[i].ContentLength / 1000) + ' Kb' :
         *                          null;
         *                      console.log(' [' + aHierarchyItems[i].ResourceType + '] ' + aHierarchyItems[i].DisplayName + (sSize ? ', ' + sSize : ''));
         *                  }
         *              });
         *          });
         *      &lt;/script&gt;
         *  &lt;/head&gt;
         *  &lt;body&gt;
         *  &lt;/body&gt;
         *  &lt;/html&gt;
         * @api
         * @fires ITHit.WebDAV.Client.WebDavSession#OnBeforeRequestSend
         * @fires ITHit.WebDAV.Client.WebDavSession#OnResponse
         * @constructs
         */ 
 namespace WebDavSession{ 
	 /**
             * Version of AJAX Library
             * @api
             */ 
 function Version(): void; 
 /**
            * Protocol Version of AJAX Library
            * @api
            */ 
 function ProtocolVersion(): void; 
 }class WebDavSession  { 
	 /**
             * The OnBeforeRequestSend event is fired before request is being submitted to server and provides all
             * information that is used when creating the request such as URL, HTTP verb, headers and request body.
             * @api
             * @examplecode ITHit.WebDAV.Client.Tests.WebDavSession.Events.BeforeRequestSend
             * @examplecode ITHit.WebDAV.Client.TSExamples.WebDavSession.Events.BeforeRequestSend
             * @event ITHit.WebDAV.Client.WebDavSession#OnBeforeRequestSend
             * @property {string} Method Request method
             * @property {string} Href Request absolute path
             * @property {object} Headers Key-value object with headers
             * @property {string} Body Request Body
             */ 
 /**
             * The OnResponse event fires when the data is received from server. In your event handler you can update
             * any data received from server.
             * @api
             * @examplecode ITHit.WebDAV.Client.Tests.WebDavSession.Events.Response
             * @examplecode ITHit.WebDAV.Client.TSExamples.WebDavSession.Events.Response
             * @event ITHit.WebDAV.Client.WebDavSession#OnResponse
             * @property {number} Status Response status code
             * @property {string} StatusDescription Response status description
             * @property {object} Headers Key-value object with headers
             * @property {string} Body Response Body
             */ 
 /**
         * @api
         * @param {string} sEventName
         * @param {function} fCallback
         * @param {object} [oContext]
         */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
         * @api
         * @param {string} sEventName
         * @param {function} fCallback
         * @param {object} [oContext]
         */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
         * Load File object corresponding to path.
         * @api
         * @param {string} sPath Path to the file.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenFileAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 OpenFileAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Returns Folder object corresponding to path.
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetItemBySession.GetFolder
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetItemBySession.GetFolder
         * @api
         * @param {string} sPath Path to the folder.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenFolderAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 OpenFolderAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
         * Returns HierarchyItem object corresponding to path.
         * @api
         * @param {string} sPath Path to the resource.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenItemAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 OpenItemAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
         * Creates folder corresponding to path.
         * @api
         * @param {string} sPath Path to the resource.
         * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~CreateFolderAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 CreateFolderAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 } 
 namespace Upload{ 
	 /**
     * Upload state.
     * @api
     * @enum {string}
     * @readonly
     * @class ITHit.WebDAV.Client.Upload.State
     */ 
 enum State{ 
	 Uploading = "Uploading",
	 Canceled = "Canceled",
	 Paused = "Paused",
	 Queued = "Queued",
	 Failed = "Failed",
	 Completed = "Completed",
	 Retrying = "Retrying",
	 Skipped = "Skipped",
	 }/**
     * This class represents progress state of upload.
     * @api
     * @class ITHit.WebDAV.Client.Upload.Progress
     */ 
 class Progress  { 
	 /**
             * Bytes uploaded.
             * @api
             * @type {!number}
             */ 
 UploadedBytes: number 
 /**
             * Total bytes to upload.
             * @api
             * @type {!number}
             */ 
 TotalBytes: number 
 /**
             * Elapsed time in seconds.
             * @api
             * @type {!number}
             */ 
 ElapsedTime: number 
 /**
             * Time left in seconds.
             * @api
             * @type {!number}
             */ 
 RemainingTime: number 
 /**
             * Progress in percents.
             * @api
             * @type {!number}
             */ 
 Completed: number 
 /**
             * Speed in bytes/s.
             * @api
             * @type {!number}
             */ 
 Speed: number 
 }/**
             * This class represents file or folder in unify form.
             * @public
             * @alias ITHit.WebDAV.Client.Upload.FSEntry
             * @constructs
             *
             * @param {string} sPath The path without resource name.
             * @param {File} [oFile] The file object.
             */ 
 namespace FSEntry{ 
	 /**
             * @public
             * @readonly
             */ 
 function PathSeparator(): void; 
 /**
             * Creates entry.
             * @public
             * @param {string[]} aPathParts
             * @param {File} [oFile]
             * @return {ITHit.WebDAV.Client.Upload.FSEntry}
             */ 
 function CreateFromPathParts(aPathParts: string[], oFile?: File | null): ITHit.WebDAV.Client.Upload.FSEntry; 
 }class FSEntry  { 
	 constructor(sPath: string, oFile?: File | null); 
 /**
             * Returns relative path of entry on file system.
             * @public
             * @return {string}
             */ 
 GetRelativePath(): string; 
 }/**
     * Represents a file or folder being uploaded. Provides functions to discover item state, get info about upload
     * progress as well as to pause, resume and cancel upload.
     * @api
     * @class ITHit.WebDAV.Client.Upload.UploadItem
     * @param {string} sUrl
     * @param {ITHit.WebDAV.Client.Upload.FSEntry} oFsEntry
     * @param {ITHit.WebDAV.Client.Upload.Controls.HtmlControl} oBinding
     * @param {ITHit.WebDAV.Client.Upload.UploaderSession} oSession
     * @param {ITHit.WebDAV.Client.Upload.Groups.GroupManager} oGroupManager
     * @param {ITHit.WebDAV.Client.Upload.Settings} oSettings
     */ 
 class UploadItem  { 
	 constructor(sUrl: string, oFsEntry: ITHit.WebDAV.Client.Upload.FSEntry, oBinding: ITHit.WebDAV.Client.Upload.Controls.HtmlControl, oSession: ITHit.WebDAV.Client.Upload.UploaderSession, oGroupManager: ITHit.WebDAV.Client.Upload.Groups.GroupManager, oSettings: ITHit.WebDAV.Client.Upload.Settings); 
 /**
 * Event reporting that upload item state changed.
 * @api
 * @event ITHit.WebDAV.Client.Upload.UploadItem#OnStateChanged
 * @property {ITHit.WebDAV.Client.Upload.UploadItem} Sender Upload item instance.
 * @property {string} Name Event name.
 * @property {ITHit.WebDAV.Client.Upload.State} OldState Previous state.
 * @property {ITHit.WebDAV.Client.Upload.State} NewState Actual state.
 * @example
 * /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.UploadItem} oItem &#x002A/
 * var oItem = oUploader.Queue.GetByUrl(sSomeUrl);
 * oItem.AddListener('OnStateChanged', function (oStateChanged) {
 *         console.log('Upload to:' + oStateChanged.Sender.GetUrl() +  ', changed state to :' + oStateChanged.NewState);
 *     });
 *
 */ 
 /**
 * Event reporting that upload item progress changed.
 * @api
 * @event ITHit.WebDAV.Client.Upload.UploadItem#OnProgressChanged
 * @property {ITHit.WebDAV.Client.Upload.UploadItem} Sender Upload item instance.
 * @property {string} Name Event name.
 * @property {ITHit.WebDAV.Client.Upload.Progress} OldProgress Previous progress.
 * @property {ITHit.WebDAV.Client.Upload.Progress} NewProgress Actual progress.
 * @example
 * /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.UploadItem} oItem &#x002A/
 * var oItem = oUploader.Queue.GetByUrl(sSomeUrl);
 * oItem.AddListener('OnProgressChanged', function (oProgressChanged) {
 *         console.log('Upload to:' + oStateChanged.Sender.GetUrl() +  ', completed by:' + oProgressChanged.NewProgress.Completed + '%');
 *     });
 *
 */ 
 /**
 * Event reporting that upload error occurred.
 * @api
 * @event ITHit.WebDAV.Client.Upload.UploadItem#OnError
 * @property {ITHit.WebDAV.Client.Upload.UploadItem} Sender Upload item instance.
 * @property {string} Name Event name.
 * @property {Error|ITHit.WebDAV.Client.Exceptions.WebDavException} Error.
 * @example
 * /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.UploadItem} oItem &#x002A/
 * var oItem = oUploader.Queue.GetByUrl(sSomeUrl);
 * oItem.AddListener('OnError', function (oOnError) {
 *         console.log('Upload to:' + oOnError.Sender.GetUrl() +  ', failed with error:' + oOnError.Error.toString());
 *     });
 *
 */ 
 /**
 * Event fired before {@link ITHit.WebDAV.Client.Upload.UploadItem} started upload.
 * You will validate item in this event and present user interface if user interaction is necessary.
 * In this event you can check if each item exists on the server and specify if item should be overwritten or skipped.
 * You can also validate file size, file extension, file upload path and file name.
 *
 * To continue upload the {@link ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted#Upload} function should be called.
 * To skip upload the {@link ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted#Skip} function should be called.
 * @api
 * @event ITHit.WebDAV.Client.Upload.UploadItem#OnBeforeUploadStarted
 * @type {ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted}
 * @example
 * /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.UploadItem} oItem &#x002A/
 * var oItem = oUploader.Queue.GetByUrl(sSomeUrl);
 * oItem.AddListener('OnBeforeUploadStarted', function(oBeforeUploadStarted) {
 *   WebDAVController.WebDavSession.OpenItemAsync(sHref,
 *       [],
 *       function(oAsyncResult) {
 *           if (oAsyncResult.IsSuccess) {
 *              oItem.SetSkip(true);
 *           }
 *
 *           oBeforeUploadStarted.Done();
 *       });
 * });
 */ 
 /**
 * Event fired when is possible to retry failed upload and waited until one of action called.
 * @api
 * @event ITHit.WebDAV.Client.Upload.UploadItem#OnUploadError
 * @type {ITHit.WebDAV.Client.Upload.Events.UploadError}
 * @example
 * /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.UploadItem} oItem &#x002A/
 * var oItem = oUploader.Queue.GetByUrl(sSomeUrl);
 * AddListener('OnUploadError', function(oUploadError) {
 *   setTimeout(function() {
 *    oUploadError.Retry();
 *  }, 2000)
 * });
 */ 
 /**
 * Callback function to be called when action performed.
 * @api
 * @callback ITHit.WebDAV.Client.Upload.UploadItem~AsyncCallback
 */ 
 /**
             * Gets [File]{@link https://www.w3.org/TR/FileAPI/} object. Returns null in case of a folder.
             * @api
             * @return {(File | null )}
             */ 
 GetFile(): File | null; 
 /**
             * Get target url.
             * @api
             * @return {string} File or folder target upload URL.
             */ 
 GetUrl(): string; 
 /**
             * Gets file or folder name with extension.
             * @api
             * @return {string} File or folder name.
             */ 
 GetName(): string; 
 /**
             * Gets relative path.
             * @api
             * @return {string} File or folder relative path.
             */ 
 GetRelativePath(): string; 
 /**
             * Check if upload item represents a folder item.
             * @api
             * @return {boolean} True if item is a folder. Otherwise - false.
             */ 
 IsFolder(): boolean; 
 /**
             * Gets current upload state.
             * @api
             * @return {(ITHit.WebDAV.Client.Upload.State | string)}
             */ 
 GetState(): ITHit.WebDAV.Client.Upload.State | string; 
 /**
             * Gets object that describes upload progress.
             * @api
             * @return {ITHit.WebDAV.Client.Upload.Progress }
             */ 
 GetProgress(): ITHit.WebDAV.Client.Upload.Progress; 
 /**
             * Gets all upload errors.
             * @api
             * @return {(Error[]|ITHit.WebDAV.Client.Exceptions.WebDavException[])}
             */ 
 GetErrors(): Error[] | ITHit.WebDAV.Client.Exceptions.WebDavException[]; 
 /**
             * Gets last upload error.
             * @api
             * @return {(Error|ITHit.WebDAV.Client.Exceptions.WebDavException)}
             */ 
 GetLastError(): Error | ITHit.WebDAV.Client.Exceptions.WebDavException; 
 /**
             * Stores custom data.
             * @api
             * @type {Object}
             */ 
 CustomData: Object 
 /**
             * Sets if the item is overwritten if it exists on the server. 
             * If false is passed and the file exists on the server upload will fail and the UploadItem will be set in the error state. Default is false.
             * @api
             * @param {boolean} Pass true to force the file to be overwritten. Pass false to make upload fail if file exists. 
             */ 
 SetOverwrite(Pass: boolean): void; 
 /**
             * Adds HTTP header to upload. Note that depending on your web server and web browser, 
             * maximum allowed request header size or size of all headers in total may be limited.
             * @api
             * @param {String} sName Header name.
             * @param {String} sValue Header value. 
             */ 
 AddHeader(sName: String, sValue: String): void; 
 /**
             * Gets if the item will be overwritten if it exists on the server.
             * @api
             * @return {boolean} True if the file on the server will be overwritten. Otherwise - false. Default is false.
             */ 
 GetOverwrite(): boolean; 
 /**
             * Sets if the file should be deleted if upload is canceled. 
             * By default, the file is deleted if the upload is canceled. To override this behavior, call this method passing false as a parameter. 
             * This function must be called on files only.
             * @api
             * @param {boolean} bDelete Specifies if the file should be deleted on cancel. Typically you will pass false if the file existed before upload. 
             * You will pass true to set the default behavior and delete the file when the upload is canceled.
             * @throws {ITHit.Exceptions.ArgumentException} Thrown if this function is called on folder item.
             */ 
 SetDeleteOnCancel(bDelete: boolean): void; 
 /**
             * Gets if the file is deleted when the upload is canceled.
             * @api
             * @return {boolean} True if file is deleted when upload is canceled. Otherwise - false. Default is true.
             */ 
 GetDeleteOnCancel(): boolean; 
 /**
             * Sets failed state.
             * Populates item's error with provided error instance.
             * @api
             * @param {ITHit.WebDAV.Client.Exceptions.WebDavException} oError - The error instance that will be set as a failure description.
             * @throws {ITHit.Exceptions.ArgumentException} - Thrown if argument is not derived from {@link ITHit.WebDAV.Client.Exceptions.WebDavException}.
             * @example
             * var oUploader = new ITHit.WebDAV.Client.Upload.Uploader();
             * oUploader.Queue.OnUploadItemsCreated = function(oUploadItemsCreated) {
             *     var sErrorMessage = 'Added to queue in failed state';
             *      var oWebDavException = new ITHit.WebDAV.Client.Exceptions.WebDavException(sMessage);
             *
             *      /&#42;&#42; &#64;typedef {ITHit.WebDAV.Client.Upload.UploadItem[]} aItemsToUpload &#42;/
             *     oUploadItemsCreated.Items.forEach(function(oItem) {
             *         oItem.SetFailed(oWebDavException);
             *     }
             *
             *      oUploadItemsCreated.Upload(oUploadItemsCreated.Items);
             * });
             *
             */ 
 SetFailed(oError: ITHit.WebDAV.Client.Exceptions.WebDavException): void; 
 /**
             * Begins upload.
             * @api
             * @param {ITHit.WebDAV.Client.Upload.UploadItem~AsyncCallback} [fCallback] The callback to call when upload is paused.
             */ 
 StartAsync(fCallback?: () => void | null): void; 
 /**
             * Pauses upload.
             * @api
             * @param {ITHit.WebDAV.Client.Upload.UploadItem~AsyncCallback} [fCallback] The callback to call when upload is paused.
             */ 
 PauseAsync(fCallback?: () => void | null): void; 
 /**
             * Aborts upload.
             * @api
             * @param {number} [iTryCount] Number of times to try to delete the file if the file did not exist on the server before upload.
             * Pass 0 to not try to delete the file. Default is: 5.
             * @param {number} [iDelayAttempt] Delay between attempts to delete in milliseconds. Default is: 500.
             * @param {ITHit.WebDAV.Client.Upload.UploadItem~AsyncCallback} [fCallback] The callback to call when upload is cancelled.
             */ 
 CancelAsync(iTryCount?: number | null, iDelayAttempt?: number | null, fCallback?: () => void | null): void; 
 /**
             * Add event handlers.
             * @api
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
             * Remove event listener.
             * @api
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to call.
             * @param {object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
             * @public
             * @return {ITHit.WebDAV.Client.Upload.Groups.GroupManager}
             */ 
 GetGroup(): ITHit.WebDAV.Client.Upload.Groups.GroupManager; 
 }/**
             * @alias ITHit.WebDAV.Client.Upload.FileSpan
             * @constructs
             * @public
             * @param {Blob} oFile
             * @param {number} [iStart]
             * @param {(number | null)} [iEnd]
             */ 
 class FileSpan  { 
	 constructor(oFile: Blob, iStart?: number | null, iEnd?: number | null); 
 /**
             * Gets start of the span.
             * @public
             * @return {number}
             */ 
 GetStart(): number; 
 /**
             * Sets start of the span.
             * @public
             * @param {number} iStart
             */ 
 SetStart(iStart: number): void; 
 /**
             * Gets end of the span. Match end of file if null.
             * @public
             * @return {number}
             */ 
 GetEnd(): number; 
 /**
             * Sets end of the span. Match end of file if null.
             * @public
             * @param {(number | null)} iEnd
             */ 
 SetEnd(iEnd: number | null): void; 
 }/**
     * @public
     * @class ITHit.WebDAV.Client.Upload.UploaderSession
     * @extends ITHit.WebDAV.Client.WebDavSession
     */ 
 class UploaderSession extends ITHit.WebDAV.Client.WebDavSession { 
	 /**
             * Returns progress report corresponding to path.
             * @public
             * @param {string} sUrl The url to resource.
             * @param {ITHit.WebDAV.Client.UploaderSession~GetProgressReportAsyncCallback} fCallback
             * @param {Object} [thisArg]
             * @return {* | ITHit.WebDAV.Client.Request} Request object.
             */ 
 GetProgressReportAsync(sUrl: string, fCallback: (oResult: ITHit.WebDAV.Client.AsyncResult) => void, thisArg?: Object | null): any | ITHit.WebDAV.Client.Request; 
 /**
             * The OnBeforeRequestSend event is fired before request is being submitted to server and provides all
             * information that is used when creating the request such as URL, HTTP verb, headers and request body.
             * @api
             * @examplecode ITHit.WebDAV.Client.Tests.WebDavSession.Events.BeforeRequestSend
             * @examplecode ITHit.WebDAV.Client.TSExamples.WebDavSession.Events.BeforeRequestSend
             * @event ITHit.WebDAV.Client.WebDavSession#OnBeforeRequestSend
             * @property {string} Method Request method
             * @property {string} Href Request absolute path
             * @property {object} Headers Key-value object with headers
             * @property {string} Body Request Body
             */ 
 /**
             * The OnResponse event fires when the data is received from server. In your event handler you can update
             * any data received from server.
             * @api
             * @examplecode ITHit.WebDAV.Client.Tests.WebDavSession.Events.Response
             * @examplecode ITHit.WebDAV.Client.TSExamples.WebDavSession.Events.Response
             * @event ITHit.WebDAV.Client.WebDavSession#OnResponse
             * @property {number} Status Response status code
             * @property {string} StatusDescription Response status description
             * @property {object} Headers Key-value object with headers
             * @property {string} Body Response Body
             */ 
 /**
         * @api
         * @param {string} sEventName
         * @param {function} fCallback
         * @param {object} [oContext]
         */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
         * @api
         * @param {string} sEventName
         * @param {function} fCallback
         * @param {object} [oContext]
         */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: object | null): void; 
 /**
         * Load File object corresponding to path.
         * @api
         * @param {string} sPath Path to the file.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenFileAsyncCallback} fCallback Function to call when operation is completed.
         * @returns {ITHit.WebDAV.Client.Request} Request object.
         */ 
 OpenFileAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): ITHit.WebDAV.Client.Request; 
 /**
         * Returns Folder object corresponding to path.
         * @examplecode ITHit.WebDAV.Client.Tests.HierarchyItems.GetItemBySession.GetFolder
         * @examplecode ITHit.WebDAV.Client.TSExamples.HierarchyItems.GetItemBySession.GetFolder
         * @api
         * @param {string} sPath Path to the folder.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenFolderAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 OpenFolderAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
         * Returns HierarchyItem object corresponding to path.
         * @api
         * @param {string} sPath Path to the resource.
		 * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~OpenItemAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 OpenItemAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 /**
         * Creates folder corresponding to path.
         * @api
         * @param {string} sPath Path to the resource.
         * @param {ITHit.WebDAV.Client.PropertyName[]} aProperties Additional properties requested from server. Default is empty array.
         * @param {ITHit.WebDAV.Client.WebDavSession~CreateFolderAsyncCallback} fCallback Function to call when operation is completed.
         */ 
 CreateFolderAsync(sPath: string, aProperties: ITHit.WebDAV.Client.PropertyName[], fCallback?: (oResult: ITHit.WebDAV.Client.AsyncResult) => void | null): void; 
 }/**
 * This class provides settings for Uploader.
 * @api
 * @class ITHit.WebDAV.Client.Upload.Settings
 */ 
 class Settings  { 
	 /**
             * Number of active uploads same time.
             * Number of concurrent uploads.
             * @api
             * @type {number}
             * @default 2
             */ 
 ConcurrentUploads: number 
 /**
             * Default queue state.
             * @api
             * @type {(ITHit.WebDAV.Client.Upload.State.Queued|string)}
             * @default ITHit.WebDAV.Client.Upload.State.Queued
             */ 
 State: ITHit.WebDAV.Client.Upload.State.Queued | string 
 /**
             * Default cancel behaviour.
             * @api
             * @type {!boolean}
             * @default true
             */ 
 DeleteOnCancel: boolean 
 }/**
     * List of items being uploaded. Each item in the list describes the file
     * or folder upload state and provides methods for managing upload.
     * @api
     * @class ITHit.WebDAV.Client.Upload.Queue
     * @fires ITHit.WebDAV.Client.Upload.Queue#OnQueueChanged
     */ 
 class Queue  { 
	 /**
 * Event reporting that queue changed. Fired when item is added or deleted from queue.
 * @api
 * @event ITHit.WebDAV.Client.Upload.Queue#OnQueueChanged
 * @property {ITHit.WebDAV.Client.Upload.Queue} Sender The queue instance.
 * @property {string} Name Event name.
 * @property {ITHit.WebDAV.Client.Upload.UploadItem[]} AddedItems Added items.
 * @property {ITHit.WebDAV.Client.Upload.UploadItem[]} RemovedItems Removed items.
 * @example
 *              var oUploader = new ITHit.WebDAV.Client.Upload.Uploader();
 *              oUploader.Queue.AddListener('OnQueueChanged', function (oQueueChanged) {
 *
 *                  oQueueChanged.AddedItems.forEach(function(element) {
 *                      console.log('Upload added:' + element.GetName());
 *                  });
 *               };
 */ 
 /**
 * Event fired {@link ITHit.WebDAV.Client.Upload.UploadItem}s are created.
 * You will validate files selected for upload in this event and present user interface if user interaction is necessary.
 * In this event you can check if each item exists on the server and specify if item should be overwritten or skipped.
 * You can also validate file size, file extension, file upload path and file name.
 *
 * To continue upload the {@link ITHit.WebDAV.Client.Upload.Events.UploadItemsCreated#Upload} function with the list of items to be uploaded should be called.
 * @api
 * @event ITHit.WebDAV.Client.Upload.Queue#OnUploadItemsCreated
 * @type {ITHit.WebDAV.Client.Upload.Events.UploadItemsCreated}
 * @example
 * var oUploader = new ITHit.WebDAV.Client.Upload.Uploader();
 * oUploader.Queue.AddListener('OnUploadItemsCreated', function(oUploadItemsCreated) {
 *     var aIgnoredNames = ['file1.txt', 'file2.txt'];
 *
 *     /&#42;&#42; &#64;typedef {ITHit.WebDAV.Client.Upload.UploadItem[]} aItems &#42;/
 *     var aItems = oUploadItemsCreated.Items;
 *      /&#42;&#42; &#64;typedef {ITHit.WebDAV.Client.Upload.UploadItem[]} aItemsToUpload &#42;/
 *     var aItemsToUpload = aItems.filter(function(oItem) {
 *         aIgnoredNames.indexOf(oItem.GetName()) < 0
 *     }
 *
 *      oUploadItemsCreated.Upload(aItemsToUpload);
 * });
 *
 */ 
 /**
             * Associated uploader.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.Uploader}
             */ 
 Uploader: ITHit.WebDAV.Client.Upload.Uploader 
 /**
             * Adds uploads to the queue.
             * @public
             * @param {string} sUrl Url to upload.
             * @param {ITHit.WebDAV.Client.Upload.FSEntry[]} aFSEntries Items to Upload.
             * @param {ITHit.WebDAV.Client.Upload.Controls.HtmlControl} [oSource] Source of items.
             */ 
 AddGroup(sUrl: string, aFSEntries: ITHit.WebDAV.Client.Upload.FSEntry[], oSource?: ITHit.WebDAV.Client.Upload.Controls.HtmlControl | null): void; 
 /**
             * @api
             * Restart queued upload of {@link ITHit.WebDAV.Client.Upload.UploadItem}s collection.
             * @param {ITHit.WebDAV.Client.Upload.UploadItem[]} aUploadItems Collection restart.
             */ 
 Restart(aUploadItems: ITHit.WebDAV.Client.Upload.UploadItem[]): void; 
 /**
             * Removes upload file from queue.
             * @param {string} sUrl The url of UploadItem to remove.
             * @api
             */ 
 RemoveByUrl(sUrl: string): void; 
 /**
             * Add event handlers.
             * @api
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @api
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 }/**
     * Instance of this class store drop zones and provide methods to creating
     * and removing them
     * @api
     * @class ITHit.WebDAV.Client.Upload.DropZoneCollection
     */ 
 class DropZoneCollection  { 
	 /**
             * @api
             * @type {ITHit.WebDAV.Client.Upload.Uploader}
             */ 
 Uploader: ITHit.WebDAV.Client.Upload.Uploader 
 /**
             * Bind HTML element as drop zone.
             * @api
             * @example
             *  &lt;!DOCTYPE html&gt;
             *  &lt;html&gt;
             *  &lt;head&gt;
             *      &lt;script type="text/javascript"&gt;
             *              var oUploader = new ITHit.WebDAV.Client.Upload.Uploader();
             *              oUploader.DropZones.AddById('ithit-dropzone');
             *      &lt;/script&gt;
             *  &lt;/head&gt;
             *  &lt;body
             *      &lt;div id="ithit-dropzone"&gt;
             *          Drop file to upload&lt;
             *      &lt;/div&gt;
             *  &lt;/body&gt;
             *  &lt;/html&gt;
             * @param {string} sElementId Id of HTML element.
             * @return {ITHit.WebDAV.Client.Upload.Controls.DropZone} Created drop zone.
             */ 
 AddById(sElementId: string): ITHit.WebDAV.Client.Upload.Controls.DropZone; 
 /**
             * Get drop zone by Id.
             * @api
             * @param {string} sElementId Id of HTML element.
             * @return {(ITHit.WebDAV.Client.Upload.Controls.DropZone | undefined)} Found drop zone or undefined.
             */ 
 GetById(sElementId: string): ITHit.WebDAV.Client.Upload.Controls.DropZone | undefined; 
 /**
             * Remove HTML element from drop zone Controls by id.
             * @api
             * @param {string} sElementId Id of HTML element.
             */ 
 RemoveById(sElementId: string): void; 
 /**
             * Add event handlers.
             * @public
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @public
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Event reporting that collection changed. Fired when item is added or deleted from collection.
             * @public
             * @event ITHit.WebDAV.Client.Upload.DropZoneCollection#OnCollectionChanged
             * @property {ITHit.WebDAV.Client.Upload.DropZoneCollection} Sender The collection instance.
             * @property {ITHit.WebDAV.Client.Upload.Controls.DropZone[]} AddedItems Added items.
             * @property {ITHit.WebDAV.Client.Upload.Controls.DropZone[]} RemovedItems Removed items.
             */ 
 }/**
     * List of upload inputs. Contains items of {@link ITHit.WebDAV.Client.Upload.Controls.Input}  type.
     * @api
     * @class ITHit.WebDAV.Client.Upload.InputCollection
     */ 
 class InputCollection  { 
	 /**
             * @api
             * @type {ITHit.WebDAV.Client.Upload.Uploader}
             */ 
 Uploader: ITHit.WebDAV.Client.Upload.Uploader 
 /**
             * Bind HTML element as input.
             * @api
             * @example
             *  &lt;!DOCTYPE html&gt;
             *  &lt;html&gt;
             *  &lt;head&gt;
             *      &lt;script type="text/javascript"&gt;
             *              var oUploader = new ITHit.WebDAV.Client.Upload.Uploader();
             *              oUploader.Inputs.AddById('ithit-input');
             *      &lt;/script&gt;
             *  &lt;/head&gt;
             *  &lt;body
             *      &lt;input id="ithit-input" type="file"&gt;
             *  &lt;/body&gt;
             *  &lt;/html&gt;
             * @param {string} sElementId Id of HTML element.
             * @return {ITHit.WebDAV.Client.Upload.Controls.Input} Created input object.
             */ 
 AddById(sElementId: string): ITHit.WebDAV.Client.Upload.Controls.Input; 
 /**
             * Get input object by Id.
             * @api
             * @param {string} sElementId Id of HTML element.
             * @return {ITHit.WebDAV.Client.Upload.Controls.Input | undefined} Founded input or undefined.
             */ 
 GetById(sElementId: string): ITHit.WebDAV.Client.Upload.Controls.Input | undefined; 
 /**
             * Remove HTML element from input Controls by id.
             * @api
             * @param {string} sElementId Id of HTML element.
             */ 
 RemoveById(sElementId: string): void; 
 /**
             * Add event handlers.
             * @public
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @public
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Event reporting that collection changed. Fired when item is added or deleted from collection.
             * @public
             * @event ITHit.WebDAV.Client.Upload.InputCollection#OnCollectionChanged
             * @property {ITHit.WebDAV.Client.Upload.InputCollection} Sender The collection instance.
             * @property {ITHit.WebDAV.Client.Upload.Controls.Input[]} AddedItems Added items.
             * @property {ITHit.WebDAV.Client.Upload.Controls.Input[]} RemovedItems Removed items.
             */ 
 }/**
             * Create uploader instance.
             * @example
             *  &lt;!DOCTYPE html&gt;
             *  &lt;html lang="en"&gt;
             *  &lt;head&gt;
             *      &lt;title&gt;IT Hit WebDAV Uploader&lt;/title&gt;
             *      &lt;script src="ITHitWebDAVClient.js" type="text/javascript"&gt;&lt;/script&gt;
             *      &lt;link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"&gt;
             *      &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"&gt;&lt;/script&gt;
             *      &lt;script type="text/javascript"&gt;
             *          function UploaderGridView(sSelector) {
             *              this.Uploader = new ITHit.WebDAV.Client.Upload.Uploader();
             *              this.Uploader.DropZones.AddById('ithit-dropzone');
             *              this.Uploader = oUploader;
             *              this.Uploader.Queue.AddListener('OnQueueChanged', '_CollectionChange', this);
             *              this.$table = $(sSelector);
             *              this.rows = [];
             *          };
             *
             *          /&#x002A&#x002A
             *          * Observes adding and deleting of UploadItem and creates and removes rows in table.
             *          * @param {ITHit.WebDAV.Client.Upload.Queue#OnQueueChanged} oQueueChanged
             *          &#x002A/
             *          UploaderGridView.prototype._CollectionChange = function(oQueueChanged) {
             *              $.each(oQueueChanged.AddedItems, function(index, value) {
             *                  var row = new UploaderGridRow(value);
             *                  this.rows.push(row);
             *                  this.$table.append(row.$el);
             *              }.bind(this));
             *
             *              $.each(oQueueChanged.RemovedItems, function(index, value) {
             *                  var aRows = $.grep(this.rows, function(oElem) { return value === oElem.UploadItem; });
             *                  var iIndex = this.rows.indexOf(aRows[0]);
             *                  this.rows.splice(iIndex, 1);
             *                  aRows[0].$el.remove();
             *              }.bind(this));
             *          };
             *
             *          /&#x002A&#x002A
             *          * Represents table row and subscribes for upload change.
             *          * @param {ITHit.WebDAV.Client.Upload.oUploadItem} oUploadItem
             *          &#x002A/
             *          function UploaderGridRow(oUploadItem) {
             *              this.$el = $('<tr></tr>');
             *              this.oUploadItem = oUploadItem;
             *              this.oUploadItem.AddListener('OnProgressChanged', '_OnProgress', this);
             *              this.oUploadItem.AddListener('OnStateChanged', '_OnStateChange', this);
             *              this._Render(oUploadItem);
             *          };
             *
             *
             *          /&#x002A&#x002A
             *          * Creates upload details view.
             *          * @param {ITHit.WebDAV.Client.Upload.oUploadItem} oUploadItem
             *          &#x002A/
             *          UploaderGridRow.prototype._Render = function(oUploadItem) {
             *          /&#x002A&#x002A @typedef {ITHit.WebDAV.Client.Upload.Progress} oProgress &#x002A/
             *              var oProgress = oUploadItem.GetProgress();
             *              var columns = [
             *                  oUploadItem.GetName(),
             *                  oUploadItem.GetUrl(),
             *                  oUploadItem.GetSize(),
             *                  oProgress.UploadedBytes,
             *                  oProgress.Completed,
             *                  oProgress.ElapsedTime,
             *                  oProgress.RemainingTime,
             *                  oProgress.Speed,
             *                  oUploadItem.GetState()
             *              ];
             *
             *              var $columns = [];
             *              columns.forEach(function(item) {
             *                  var $column = $('&lt;td&gt;&lt;/td&gt;');
             *                  $column.html(item);
             *                  $columns.push($column);
             *              });
             *
             *              var $actions = $('&lt;td&gt;&lt;/td&gt;');
             *              this._RenderActions(oUploadItem).forEach(function(item) {
             *                  $actions.append(item);
             *              });
             *
             *              $columns.push($actions);
             *              this.$el.empty();
             *              this.$el.append($columns);
             *          };
             *
             *          /&#x002A&#x002A
             *          * Creates upload actions view.
             *          * @param {ITHit.WebDAV.Client.Upload.oUploadItem} oUploadItem
             *          &#x002A/
             *          UploaderGridRow.prototype._RenderActions = function(oUploadItem) {
             *              var actions = [];
             *              actions.push($('&lt;a&gt;&lt;/a&gt;').
             *                  html('&lt;span class="glyphicon glyphicon-play"&gt;&lt;/span&gt;').
             *                  attr('href', 'javascript:void(0)').
             *                  on('click', oUploadItem.StartAsync.bind(oUploadItem)));
             *
             *              actions.push($('&lt;a&gt;&lt;/a&gt;').
             *                  html('&lt;span class="glyphicon glyphicon-stop"&gt;&lt;/span&gt;').
             *                  attr('href', 'javascript:void(0)').
             *                  on('click',oUploadItem.CancelAsync.bind(oUploadItem)));
             *          };
             *
             *          /&#x002A&#x002A
             *          * Handles UploadItem state change.
             *          * @param {ITHit.WebDAV.Client.Upload.UploadItem#OnStateChanged} oStateChangedEvent
             *          &#x002A/
             *          UploaderGridRow.prototype._OnStateChange = function(oStateChangedEvent) {
             *              this._Render(oStateChangedEvent.Sender);
             *          };
             *
             *          /&#x002A&#x002A
             *          * Handles UploadItem progress change.
             *          * @param {ITHit.WebDAV.Client.Upload.UploadItem#OnProgressChanged} oProgressEvent
             *          &#x002A/
             *          UploaderGridRow.prototype._OnProgress = function(oProgressEvent) {
             *              this._Render(oProgressEvent.Sender);
             *          };
             *
             *          var sUploadUrl = 'https://webdavserver/path/';
             *          var oUploaderGrid = new UploaderGridView(oUploader, '.ithit-grid-uploads');
             *          oUploaderGrid.Uploader.SetUploadUrl(sUploadUrl);
             *      &lt;/script&gt;
             *  &lt;/head&gt;
             *  &lt;body id="it-hit-dropzone"&gt;
             *      &lt;table class="table table-responsive ithit-grid-uploads"&gt;
             *          &lt;thead&gt;
             *              &lt;tr&gt;
             *                  &lt;th&gt;Display Name&lt;/th&gt;
             *                  &lt;th&gt;Download Url&lt;/th&gt;
             *                  &lt;th&gt;Size&lt;/th&gt;
             *                  &lt;th&gt;Uploaded Bytes&lt;/th&gt;
             *                  &lt;th&gt;Completed&lt;/th&gt;
             *                  &lt;th&gt;Elapsed TimeSpan&lt;/th&gt;
             *                  &lt;th&gt;Remaining TimeSpan&lt;/th&gt;
             *                  &lt;th&gt;Speed&lt;/th&gt;
             *                  &lt;th&gt;State&lt;/th&gt;
             *                  &lt;th&gt;Actions&lt;/th&gt;
             *              &lt;/tr&gt;
             *          &lt;/thead&gt;
             *          &lt;tbody&gt;
             *          &lt;/tbody&gt;
             *      &lt;/table&gt;
             *  &lt;/body&gt;
             *  &lt;/html&gt;
             * @classdesc This class provides methods for managing file drop
             * zones, inputs and upload queue.
             * @api
             * @class ITHit.WebDAV.Client.Upload.Uploader
             * @constructs
             */ 
 class Uploader  { 
	 /**
             * Collection of associated drop zones.
             * @api
             * @readonly
             * @type { ITHit.WebDAV.Client.Upload.DropZoneCollection }
             */ 
 readonly DropZones: ITHit.WebDAV.Client.Upload.DropZoneCollection 
 /**
             * Collection of associated inputs.
             * @api
             * @readonly
             * @type { ITHit.WebDAV.Client.Upload.InputCollection }
             */ 
 readonly Inputs: ITHit.WebDAV.Client.Upload.InputCollection 
 /**
             * Queue of uploads.
             * @api
             * @readonly
             * @type {ITHit.WebDAV.Client.Upload.Queue}
             */ 
 readonly Queue: ITHit.WebDAV.Client.Upload.Queue 
 /**
             * Default settings for uploads.
             * @api
             * @type { ITHit.WebDAV.Client.Upload.Settings }
             */ 
 Settings: ITHit.WebDAV.Client.Upload.Settings 
 /**
             * Set upload url for drop zones and inputs.
             * @api
             * @param {string} sUrl Url to upload.
             */ 
 SetUploadUrl(sUrl: string): void; 
 /**
             * Get upload url for drop zones and inputs.
             * @api
             * @return {string} Upload url.
             */ 
 GetUploadUrl(): string; 
 } 
 namespace Controls{ 
	 /**
     * @api
     * Instance of this class provides binding for HTMLElement.
     * @class ITHit.WebDAV.Client.Upload.Controls.HtmlControl
     */ 
 class HtmlControl  { 
	 /**
             * Id attribute.
             * @api
             * @type {string}
             */ 
 Id: string 
 /**
             * Associated HTML Element
             * @api
             * @type {HTMLElement}
             */ 
 HtmlElement: HTMLElement 
 /**
             * Add event handlers.
             * @public
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @public
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Event reporting that file handling finished..
             * @public
             * @event ITHit.WebDAV.Client.Upload.Controls.HtmlControl#OnFileInputHandled
             * @property {ITHit.WebDAV.Client.Upload.Controls.HtmlControl} Source The source of event.
             * @property {ITHit.WebDAV.Client.AsyncResult} AsyncResult Result.
             * @property {ITHit.WebDAV.Client.Upload.FSEntry[]} AsyncResult.Result Current uploader
             */ 
 }/**
     * This class provides methods for creation of {@link ITHit.WebDAV.Client.Upload.FSEntryFactory}s.
     * @public
     * @class ITHit.WebDAV.Client.Upload.Controls.FSEntryFactory
     */ 
 class FSEntryFactory  { 
	 }/**
     * Instance of this class provides metadata for drop zone.
     * @api
     * @class ITHit.WebDAV.Client.Upload.Controls.DropZone
     * @extends ITHit.WebDAV.Client.Upload.Controls.HtmlControl
     */ 
 class DropZone extends ITHit.WebDAV.Client.Upload.Controls.HtmlControl { 
	 /**
             * Id attribute.
             * @api
             * @type {string}
             */ 
 Id: string 
 /**
             * Associated HTML Element
             * @api
             * @type {HTMLElement}
             */ 
 HtmlElement: HTMLElement 
 /**
             * Add event handlers.
             * @public
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @public
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Event reporting that file handling finished..
             * @public
             * @event ITHit.WebDAV.Client.Upload.Controls.HtmlControl#OnFileInputHandled
             * @property {ITHit.WebDAV.Client.Upload.Controls.HtmlControl} Source The source of event.
             * @property {ITHit.WebDAV.Client.AsyncResult} AsyncResult Result.
             * @property {ITHit.WebDAV.Client.Upload.FSEntry[]} AsyncResult.Result Current uploader
             */ 
 }/**
 * Instance of this class provides metadata for input.
 * @class ITHit.WebDAV.Client.Upload.Controls.Input
 * @extends ITHit.WebDAV.Client.Upload.Controls.HtmlControl
 * @api
 */ 
 class Input extends ITHit.WebDAV.Client.Upload.Controls.HtmlControl { 
	 /**
             * Id attribute.
             * @api
             * @type {string}
             */ 
 Id: string 
 /**
             * Associated HTML Element
             * @api
             * @type {HTMLElement}
             */ 
 HtmlElement: HTMLElement 
 /**
             * Add event handlers.
             * @public
             * @param {string} sEventName The event name to handle.
             * @param {Function} fCallback The callback to call.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 AddListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Removes event listener.
             * @public
             * @param {string} sEventName The event name to remove.
             * @param {Function} fCallback The callback to remove.
             * @param {Object} [oContext] The context to callback is called with.
             */ 
 RemoveListener(sEventName: string, fCallback: Function, oContext?: Object | null): void; 
 /**
             * Event reporting that file handling finished..
             * @public
             * @event ITHit.WebDAV.Client.Upload.Controls.HtmlControl#OnFileInputHandled
             * @property {ITHit.WebDAV.Client.Upload.Controls.HtmlControl} Source The source of event.
             * @property {ITHit.WebDAV.Client.AsyncResult} AsyncResult Result.
             * @property {ITHit.WebDAV.Client.Upload.FSEntry[]} AsyncResult.Result Current uploader
             */ 
 }} 
 namespace Groups{ 
	 /**
     * @public
     * @class ITHit.WebDAV.Client.Upload.Groups.GroupManager
     */ 
 class GroupManager  { 
	 }} 
 namespace Events{ 
	 /**
     * @class ITHit.WebDAV.Client.Upload.Events.BaseEvent
     * @public
     * @abstract
     */ 
 class BaseEvent  { 
	 /**
             * Event name.
             * @public
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @public
             * @type {Object}
             */ 
 Sender: Object 
 }/**
     * This class provides state change event data;
     * @api
     * @class ITHit.WebDAV.Client.Upload.Events.StateChanged
     * @extends ITHit.WebDAV.Client.Upload.Events.BaseEvent
     */ 
 class StateChanged extends ITHit.WebDAV.Client.Upload.Events.BaseEvent { 
	 /**
             * Previous state.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.State}
             */ 
 OldState: ITHit.WebDAV.Client.Upload.State 
 /**
             * Actual state.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.State}
             */ 
 NewState: ITHit.WebDAV.Client.Upload.State 
 /**
             * Event name.
             * @public
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @public
             * @type {Object}
             */ 
 Sender: Object 
 }/**
     * This class provides state change event data;
     * @api
     * @class ITHit.WebDAV.Client.Upload.Events.ProgressChanged
     * @extends ITHit.WebDAV.Client.Upload.Events.BaseEvent
     */ 
 class ProgressChanged extends ITHit.WebDAV.Client.Upload.Events.BaseEvent { 
	 /**
             * Previous progress.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.Progress}
             */ 
 OldProgress: ITHit.WebDAV.Client.Upload.Progress 
 /**
             * Actual progress.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.Progress}
             */ 
 NewProgress: ITHit.WebDAV.Client.Upload.Progress 
 /**
             * Event name.
             * @public
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @public
             * @type {Object}
             */ 
 Sender: Object 
 }/**
     * @api
     * This object represent base class for parameters of events that is waiting for user action.
     * @class ITHit.WebDAV.Client.Upload.Events.AsyncEvent
     * @extends ITHit.WebDAV.Client.Upload.Events.BaseEvent
     */ 
 class AsyncEvent extends ITHit.WebDAV.Client.Upload.Events.BaseEvent { 
	 /**
             * Event name.
             * @api
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @api
             * @type {Object}
             */ 
 Sender: Object 
 /**
             * This methods return value that indicates that event already processed.
             * @api
             * @return {boolean} - True if event was processed, false otherwise.
             */ 
 GetIsHandled(): boolean; 
 }/**
     * This object is passed to {@link ITHit.WebDAV.Client.Upload.UploadItem#event:OnBeforeUploadStarted}.
     * You can validate these item as well as specify if item should be overwritten.
     * To continue upload the {@link ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted#Upload} function should be called.
     * To skip upload the {@link ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted#Skip} function should be called.
     * @api
     * @class ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted
     * @extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent
     */ 
 class BeforeUploadStarted extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent { 
	 /**
             * Change item state to {@link ITHit.WebDAV.Client.Upload.State.Skipped}.
             * @api
             */ 
 Skip(): void; 
 /**
             * Continues items upload.
             * If item should not upload call {@link ITHit.WebDAV.Client.Upload.Events.BeforeUploadStarted#Skip} method.
             * If any items in the upload list should be overwritten call {@link ITHit.WebDAV.Client.Upload.UploadItem#SetOverwrite(true)} on item.
             * @api
             */ 
 Upload(): void; 
 /**
             * Event name.
             * @api
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @api
             * @type {Object}
             */ 
 Sender: Object 
 /**
             * This methods return value that indicates that event already processed.
             * @api
             * @return {boolean} - True if event was processed, false otherwise.
             */ 
 GetIsHandled(): boolean; 
 }/**
     * @api
     * @class ITHit.WebDAV.Client.Upload.Events.QueueChanged
     * @extends ITHit.WebDAV.Client.Upload.Events.BaseEvent
     */ 
 class QueueChanged extends ITHit.WebDAV.Client.Upload.Events.BaseEvent { 
	 /**
             * Added items.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.UploadItem[]}
             */ 
 AddedItems: ITHit.WebDAV.Client.Upload.UploadItem[] 
 /**
             * Removed items.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.UploadItem[]}
             */ 
 RemovedItems: ITHit.WebDAV.Client.Upload.UploadItem[] 
 /**
             * Event name.
             * @public
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @public
             * @type {Object}
             */ 
 Sender: Object 
 }/**
             * @api
             * @alias ITHit.WebDAV.Client.Upload.Events.UploadError
             * @extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent
             * @constructs
             * @param {ITHit.WebDAV.Client.Upload.UploadItem} oSender
             * @param {Error|ITHit.WebDAV.Client.Exceptions.WebDavException} oError
             * @param {ITHit.WebDAV.Client.Upload.Events.UploadError~ResultCallback} fCallback
             */ 
 class UploadError extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent { 
	 constructor(oSender: ITHit.WebDAV.Client.Upload.UploadItem, oError: Error | ITHit.WebDAV.Client.Exceptions.WebDavException, fCallback?: (oResult: string) => void | null); 
 /**
             * Error object.
             * @api
             * @type {Error|ITHit.WebDAV.Client.Exceptions.WebDavException}
             */ 
 Error: Error | ITHit.WebDAV.Client.Exceptions.WebDavException 
 /**
             * Skips retry. UploadItem becomes failed.
             * @api
             */ 
 Skip(): void; 
 /**
             * Retry upload.
             * @api
             */ 
 Retry(): void; 
 /**
             * Event name.
             * @api
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @api
             * @type {Object}
             */ 
 Sender: Object 
 /**
             * This methods return value that indicates that event already processed.
             * @api
             * @return {boolean} - True if event was processed, false otherwise.
             */ 
 GetIsHandled(): boolean; 
 }/**
     * This class provides state change event data;
     * @public
     * @class ITHit.WebDAV.Client.Upload.Events.Error
     * @extends ITHit.WebDAV.Client.Upload.Events.BaseEvent
     */ 
 class Error extends ITHit.WebDAV.Client.Upload.Events.BaseEvent { 
	 /**
             * Error object.
             * @public
             * @type {Error|ITHit.WebDAV.Client.Exceptions.WebDavException}
             */ 
 Error: Error | ITHit.WebDAV.Client.Exceptions.WebDavException 
 /**
             * Event name.
             * @public
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @public
             * @type {Object}
             */ 
 Sender: Object 
 }/**
             * This object is passed to {@link ITHit.WebDAV.Client.Upload.Queue#event:OnUploadItemsCreated}  and contains list of items selected by user for upload.
             * You can validate these items as well as specify if item should be overwritten.
             * To continue upload the UploadItemsCreated.Upload() function with the list of items to be uploaded should be called.
             * @api
             * @alias ITHit.WebDAV.Client.Upload.Events.UploadItemsCreated
             * @extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent
             * @constructs
             * @param {ITHit.WebDAV.Client.Upload.UploadItem} oSender
             * @param {ITHit.WebDAV.Client.Upload.UploadItem[]} aItems
             * @param {ITHit.WebDAV.Client.Upload.Events.UploadItemsCreated~ResultCallback} fCallback
             */ 
 class UploadItemsCreated extends ITHit.WebDAV.Client.Upload.Events.AsyncEvent { 
	 constructor(oSender: ITHit.WebDAV.Client.Upload.UploadItem, aItems: ITHit.WebDAV.Client.Upload.UploadItem[], fCallback?: (oResult?: () => void | null) => void); 
 /**
             * Added items.
             * @api
             * @type {ITHit.WebDAV.Client.Upload.UploadItem[]}
             */ 
 Items: ITHit.WebDAV.Client.Upload.UploadItem[] 
 /**
             * Continues items upload. Pass a list of items to upload.
             * If any items should not upload do not include them in this list.
             * If any items in the upload list should be overwritten call {@link ITHit.WebDAV.Client.Upload.UploadItem#SetOverwrite(true)}) on each item.
             * @api
             * @param {ITHit.WebDAV.Client.Upload.UploadItem[]} aItems - The list of items to be uploaded.  Items not listed here will be skipped.
             */ 
 Upload(aItems: ITHit.WebDAV.Client.Upload.UploadItem[]): void; 
 /**
             * Event name.
             * @api
             * @type {string}
             */ 
 Name: string 
 /**
             * Event source.
             * @api
             * @type {Object}
             */ 
 Sender: Object 
 /**
             * This methods return value that indicates that event already processed.
             * @api
             * @return {boolean} - True if event was processed, false otherwise.
             */ 
 GetIsHandled(): boolean; 
 }}}}class Client  { 
	 /**
 * License Id
 * @public
 * @name ITHit.WebDAV.Client.LicenseId
 * @type {string}
 */ 
 static LicenseId: string 
 LicenseId: string 
 }}}
