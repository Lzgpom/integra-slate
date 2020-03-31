Settlement Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
EmvTerminalId | Optional |  AN | Reference of EMV terminal used to get EMV card details 
EmvScenarioId | Optional | A | 2 bytes Id to indicate the EMV scenario to choose. Default is DT. 
EmvTerminalMessage | Optional | A/M | A free message to be displayed on the terminal. Can contain for instance table number, guest reference, … 
InvoiceId | Optional | AN | The reference printed on the invoice or check number on the receipt.
ZoneId | Optional | AN | For future use. An identification of the geographical zone (in hotel, restaurant or shop) the request is related to. With this parameter specific EMV terminals are associated to zones. 
AttendantId | Optional | AN | For future use. An identification of the operator or waiter. To associate requests to specific attendant. 
CardNumber | Optional | N | Card PAN. No start and end sentinel. 
Token | Optional | N | Token, instead of or in addition of card number. 
CardExpiryDate | Optional | N | Card expiration date. Format MMyy. 
CardInputMethod | Optional | A | "E" for EMV terminal, "S" for swiped, "M" for manual entered. 
Amount | Mandatory | N | Amount of the request.
Currency | Optional | A | Currency of the request. 3 character ISO definition: EUR, USD, … In case no currency is provided, the local currency is used.
AuthCodeInputMethod | Optional | A | "A" for automatic, "M" for manual entry 
BankAuthCode | Optional | AN | Authorization code received from the acquirer. 
BankResultCode | Optional | N | Result code from the bank in case of online authorization. 
ResultReason | Optional | AN | Indicates the reason of the result. XB (local bad card type), … 
TimeStamp | Optional | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 
AmountAuthorized | Optional | N | Amount which has been finally authorized.
AmountVAT | Optional | N |  Amount VAT. 
AmountExtra | Optional | N | An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.
CardTrack1Data | Optional | N | Card track 1 raw data. 
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | Optional | N | Card track 3 raw data. 
CardStartDate | Optional | N | Card start date. Format MMyy. 
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped. 
UserData1 | Optional | AN | Any data the integrator wants to have saved with the request.  This field might be printed out on the payment receipt. 
UserData2 | Optional | AN | Any data the integrator wants to have saved with the request. 
UserData3 | Optional | AN | Any data the integrator wants to have saved with the request. 
UserData4 | Optional | AN | Any data the integrator wants to have saved with the request. 
DCCFlag | Optional | Y/N | Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.
LocalAmount | Optional | N | Amount of the request, in the local currency.
LocalCurrency | Optional | A | The local currency.
BinRate | Optional | N | Some Rate
BinAmount | Optional | N | Amount of the request, in the bin currency.
BinCurrency | Optional | A | The bin currency.
CardholderNameFirst | Optional | AN | For future use 
CardholderNameLast | Optional | AN | For future use 
CardholderStreetAddress1 | Optional | AN | Used with AVS (Address Verification) 
CardholderStreetAddress2 | Optional | AN | For future use
CardholderCity | Optional | AN | For future use 
CardholderZipCode | Optional | AN | Used with AVS (Address Verification) 
CardholderState | Optional | AN | For future use 
CardholderCountry | Optional | AN | For future use 
CardholderCompany | Optional | AN | For future use 
CardholderEmail | Optional | AN | For future use
CVV2 | Optional | AN | Card verification value.  
MarketData | Optional | AN | Market specific data. Refer to section “Market Specific Data” for more information on the data tag names. 
TdsAuthentResultCode | Optional | AN | 3DS Visa Transaction Status (TC) 
TdsAuthentIndicator | Optional | AN | 3DS Visa Electronic Commerce Indicator (ECI), Mastercard Universal Card Authentication Field (UCAF) 
TdsAuthentCryptogram | Optional | AN | 3DS Visa Cardholder Authentication Verification Value (CAVV), Mastercard Account Authentication Value (AAV) 
TdsTransIdentifier | Optional | AN | 3DS Visa Transaction Identifier (XID) 
PosEnvironment | Optional | A | POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred

Settlement Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | Mandatory | AN | Indicates the reason of the result. XB (local bad card type), … 
BankResultCode | Mandatory | N | Result code from the bank in case of online authorization. 
BankAuthCode | Mandatory | AN | Authorization code received from the acquirer. 
BankTerminalId | Mandatory | AN | The id of the bank terminal
CardNumber | Optional | N | Card PAN. No start and end sentinel. 
Token | Optional | N | Token, instead of or in addition of card number.
CardExpiryDate | Optional | N | Card expiration date. Format MMyy. 
CardTrack1Data | Optional | N | Card track 1 raw data. 
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | Optional | N | Card track 3 raw data. 
CardInputMethod | Mandatory | A | "E" for EMV terminal, "S" for swiped, "M" for manual entered. 
CardSchemeId | Mandatory | A | Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards. 
CardSchemeName | Mandatory | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardSchemeLabel | Mandatory | AN | Label of the card scheme like "Visa", "Mastercard", "Diners", … 
CardFunctionId | Mandatory | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardFunctionName | Mandatory | AN | Card function name like "credit card", "emv card" 
CardInvoiceCompanyId | Mandatory | A | 3C reference of Invoice company (bank): CI, CE, … 
CardInvoiceCompanyName | Mandatory | AN | Name of invoice company; Citicorp, Cekab, … 
Amount | Mandatory | N | Amount of the request.
AmountExtra | Optional | N | An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.
AmountUsed | Optional | N | The actual amount used in the process. Amount, or total amount. In case a gratuity has been given this one is included.
BinRate | Optional | N | Some Rate
BinAmount | Optional | N | Amount of the request, in the bin currency.
BinCurrency | Optional | A | The bin currency.
DCCFlag | Mandatory | Y/N | Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.
CurrencyUsed | Mandatory | AN | Currency used in the process. Currency requested or local currency. 
LocalAmount | Mandatory | N | Amount of the request, in the local currency.
LocalCurrency | Mandatory | A | The local currency.
TransRefNum | Mandatory | AN | Integra FE internal transaction reference number. Or for EP2 solutions transaction reference coming from the host. 
EmvAuthorized | Mandatory | Y/N | Feedback to know if an EMV authorization has been done or not 
EmvTerminalId | Mandatory | AN | Reference of EMV terminal used to get EMV card details 
EmvTerminalIdManufacturer | Optional | AN | Internal reference manufacturer of EMV terminal (e.g. serial number) 
EmvTrack2Equivalent | Optional | AN | EMV track 2
EmvApplicationId | Optional | AN | Reference of application use during an EMV transaction 
EmvTerminalVerifResult | Optional | AN | Status of the different functions as seen from the terminal 
EmvTransactionStatusInformation | Optional | AN | Identifies the status of the card at the end of the transaction process  
EmvPinVerified | Optional | Y/N | Feedback to know if the PIN was entered 
EmvCryptogram | Optional | AN | EMV cryptogram reference 
EmvCryptogramType | Optional | AN | Cryptogram description
EmvUnpredictableNumber | Optional | AN | An unpredictable number is generated for each EMV transaction. 
EmvData1 | Optional | AN | Any additional EMV data for future use.
EmvData2 | Optional | AN | Any additional EMV data for future use.
CardHolderName | Optional | AN | For future use
CardHolderLanguage | Optional | AN | Language used by the cardholder. Format: "language-Country", e.g. "en-GBP". 
MerchantId | Optional | AN | Contract number between the merchant and the invoice company. 
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped. 
CardStartDate | Optional | N | Card start date. Format MMyy. 
Token | Optional | N | Token, instead of or in addition of card number. 
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 
PrintData1 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration. 
PrintData2 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration. 
CVV2Result | Optional | AN | Result  code of the card verification value. 
AVSResult | Optional | AN | Result code of the address verification. 
DCCMarkup | Optional | N | Markup which is applied to the DCC rate provided by the DCC provider. 
TimeStamp | Optional | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 
PosEnvironment | Optional | A | POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred. 

Terminal Control Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
EmvTerminalId | Mandatory | AN | Reference of EMV terminal used to get EMV card details 
Data | Optional | AN | Extra data passed in the request or back in the response. Usage depends on message status type. 
AttendantId | Optional | AN | For future use. An identification of the operator or waiter. To associate requests to specific attendant. 

Terminal Control Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 
Data1 | Optional | AN | Data received.
Data2 | Optional | AN | More data received.
Data3 | Optional | AN | More data received.
PrintData1 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration. 
PrintData2 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration. 
Mac | Optional | AN | Mac information.

Terminal Status Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
EmvTerminalId | Mandatory | AN | Reference of EMV terminal used to get EMV card details 
TimeStamp | Optional | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 
Data | Optional | AN | Extra data passed in the request or back in the response. Usage depends on message status type. 

Terminal Status Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
EmvTerminalId | Mandatory | AN | Reference of EMV terminal used to get EMV card details 
StatusMessage | Optional | A | A text message related to the status code sent back 
StatusCode | Mandatory | N | Unique status code
Data | Optional | AN | Data received.
Data2 | Optional | AN | More data received.
Data3 | Optional | AN | More data received.
CardNumber | Optional | N | Card PAN. No start and end sentinel. 
CardExpiryDate | Optional | N | Card expiration date. Format MMyy. 
CardTrack1Data | Optional | N | Card track 1 raw data. 
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | Optional | N | Card track 3 raw data. 
Token | Optional | N | Token, instead of or in addition of card number. 

Auth Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
EmvTerminalId | Optional | AN | Reference of EMV terminal used to get EMV card details 
EmvScenarioId | Optional | A | 2 bytes Id to indicate the EMV scenario to choose. Default is DT. 
Amount | Mandatory | N | Amount of the request.
Currency | Optional | A | Currency of the request. 3 character ISO definition: EUR, USD, … In case no currency is provided, the local currency is used.
AmountTotal | Optional | N | Total amount in local currency. 
Token | Optional | N | Token, instead of or in addition of card number. 
CardNumber | Optional | N | Card PAN. No start and end sentinel. 
CardExpiryDate | Optional | N | Card expiration date. Format MMyy. 
CardInputMethod | Optional | A | "E" for EMV terminal, "S" for swiped, "M" for manual entered. 
CardTrack1Data | Optional | N | Card track 1 raw data. 
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | Optional | N | Card track 3 raw data. 
CardStartDate | Optional | N | Card start date. Format MMyy. 
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped. 
UserData1 | Optional | AN | Any data the integrator wants to have saved with the request.  This field might be printed out on the payment receipt. 
UserData2 | Optional | AN | Any data the integrator wants to have saved with the request. 
UserData3 | Optional | AN | Any data the integrator wants to have saved with the request. 
UserData4 | Optional | AN | Any data the integrator wants to have saved with the request. 
DCCFlag | Optional | Y/N | Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.
CVV2 | Optional | AN | Card verification value.  
CardholderNameFirst | Optional | AN | For future use 
CardholderNameLast | Optional | AN | For future use 
CardholderStreetAddress1 | Optional | AN | Used with AVS (Address Verification) 
CardholderStreetAddress2 | Optional | AN | For future use 
CardholderCity | Optional | AN | For future use 
CardholderZipCode | Optional | AN | Used with AVS (Address Verification) 
CardholderState | Optional | AN | For future use 
CardholderCountry | Optional | AN | For future use 
CardholderCompany | Optional | AN | For future use 
CardholderEmail | Optional | AN | For future use 
InvoiceId | Optional | AN | The reference printed on the invoice or check number on the receipt.
ZoneId | Optional | AN | For future use. An identification of the geographical zone (in hotel, restaurant or shop) the request is related to. With this parameter specific EMV terminals are associated to zones. 
AttendantId | Optional | AN | For future use. An identification of the operator or waiter. To associate requests to specific attendant. 
MarketData | Optional | AN | Market specific data. Refer to section “Market Specific Data” for more information on the data tag names. 
TdsAuthentResultCode | Optional | AN | 3DS Visa Transaction Status (TC) 
TdsAuthentIndicator | Optional | AN | 3DS Visa Electronic Commerce Indicator (ECI), Mastercard Universal Card Authentication Field (UCAF) 
TdsAuthentCryptogram | Optional | AN | 3DS Visa Cardholder Authentication Verification Value (CAVV), Mastercard Account Authentication Value (AAV) 
TdsTransIdentifier | Optional | AN | 3DS Visa Transaction Identifier (XID) 
PosEnvironment | Optional | A | POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred

Auth Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | Mandatory | AN | Indicates the reason of the result. XB (local bad card type), … 
BankResultCode | Mandatory | N | Result code from the bank in case of online authorization.
BankAuthCode | Mandatory | AN | Authorization code received from the acquirer. 
BankTerminalId | Mandatory | AN | The id of the bank terminal
CardInputMethod | Mandatory | A | "E" for EMV terminal, "S" for swiped, "M" for manual entered. 
CardNumber | Mandatory | N | Card PAN. No start and end sentinel. 
Token | Optional | N | Token, instead of or in addition of card number. 
CardExpiryDate | Optional | N | Card expiration date. Format MMyy. 
CardTrack1Data | Optional | N | Card track 1 raw data. 
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | Optional | N | Card track 3 raw data. 
CardSchemeId | Mandatory | A | Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards. 
CardSchemeName | Mandatory | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardSchemeLabel | Mandatory | AN | Label of the card scheme like "Visa", "Mastercard", "Diners", … 
CardFunctionId | Mandatory | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardFunctionName | Mandatory | AN | Card function name like "credit card", "emv card" 
CardInvoiceCompanyId | Mandatory | A | 3C reference of Invoice company (bank): CI, CE, … 
CardInvoiceCompanyName | Mandatory | AN | Name of invoice company; Citicorp, Cekab, … 
Amount | Mandatory | N | Amount of the request.
Amount | Mandatory | N | Amount of the request.
AmountExtra | Optional | N | An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.
AmountUsed | Optional | N | The actual amount used in the process. Amount, or total amount. In case a gratuity has been given this one is included.
BinRate | Optional | N | Some Rate
BinAmount | Optional | N | Amount of the request, in the bin currency.
BinCurrency | Optional | A | The bin currency.
DCCFlag | Mandatory | Y/N | Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.
CurrencyUsed | Mandatory | AN | Currency used in the process. Currency requested or local currency. 
LocalAmount | Mandatory | N | Amount of the request, in the local currency.
LocalCurrency | Mandatory | A | The local currency.
TransRefNum | Mandatory | AN | Integra FE internal transaction reference number. Or for EP2 solutions transaction reference coming from the host. 
EmvAuthorized | Mandatory | Y/N | Feedback to know if an EMV authorization has been done or not 
EmvTerminalId | Mandatory | AN | Reference of EMV terminal used to get EMV card details 
EmvTerminalIdManufacturer | Optional | AN | Internal reference manufacturer of EMV terminal (e.g. serial number) 
EmvTrack2Equivalent | Optional | AN | EMV track 2
EmvApplicationId | Optional | AN | Reference of application use during an EMV transaction 
EmvTerminalVerifResult | Optional | AN | Status of the different functions as seen from the terminal 
EmvTransactionStatusInformation | Optional | AN | Identifies the status of the card at the end of the transaction process  
EmvPinVerified | Mandatory | Y/N | Feedback to know if the PIN was entered 
EmvCryptogram | Optional | AN | EMV cryptogram reference 
EmvCryptogramType | Optional | AN | Cryptogram description
EmvUnpredictableNumber | Optional | AN | An unpredictable number is generated for each EMV transaction. 
EmvData1 | Optional | AN | Any additional EMV data for future use.
EmvData2 | Optional | AN | Any additional EMV data for future use.
CardHolderName | Optional | AN | For future use
CardHolderLanguage | Optional | AN | Language used by the cardholder. Format: "language-Country", e.g. "en-GBP". 
MerchantId | Optional | AN | Contract number between the merchant and the invoice company. 
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped. 
CardStartDate | Optional | N | Card start date. Format MMyy. 
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 
PrintData1 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration. 
PrintData2 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration. 
SignatureRequired | Mandatory | A | A signature.
CVV2Result | Optional | AN | Result  code of the card verification value. 
AVSResult | Optional | AN | Result code of the address verification. 
TimeStamp | Optional | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 
PosEnvironment | Optional | A | POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred. 

Card Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
CardInputMethod | Optional | A | "S"for swiped, "M"for manual entry.
CardNumber | Optional | N | Card PAN. No start and end sentinel.
CardExpiryDate | Optional | N | Card expiration date. Format MMyy.
CardStartDate | Optional | N | Card start date. Format MMyy
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped
CardTrack1Data | Optional | N | Card track 1 raw data.
CardTrack2Data | Optional | N | Card track 2 raw data. Mandatory in case the card is swiped.
CardTrack3Data | Optional | N | Card track 3 raw data
EmvTerminalId | Optional | AN | Reference of EMV terminal used to get EMV card details
EmvScenarioId | Optional | A | 2 bytes Id to indicate the EMV scenario to choose. Default is DT.
EmvTrack2Equivalent | Optional | AN | EMV track 2
KsnCardData | Optional | AN | Card data encryption key serial number used to generate the encrypted card data. In case SRED is enabled on the terminal.

Card Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | Mandatory | AN | Indicates the reason of the result. XB (local bad card type), … 
CardNumber | Mandatory | N | Card PAN. No start and end sentinel. 
Token | Optional | N | Token, instead of or in addition of card number. 
CardExpiryDate | Optional | N | Card expiration date. Format MMyy.
CardSchemeId | Mandatory | A | Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards. 
CardSchemeName | Mandatory | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardFunctionId | Mandatory | A | 3Cs card function definition like CC for credit card, CD for debit card… Currently not used. 
CardFunctionName | Mandatory | AN | Card function name like "credit card", "emv card" 
CardInvoiceCompanyId | Mandatory | A | 3C reference of Invoice company (bank): CI, CE, … 
CardInvoiceCompanyName | Mandatory | AN | Name of invoice company; Citicorp, Cekab, … 
EmvApplicationId | Optional | AN | Reference of application use during an EMV transaction 
CardIssueNumber | Optional | N | Card issue number. Optional in case the card has been swiped
CardStartDate | Optional | N | Card start date. Format MMyy
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 

Check Status Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 

Check Status Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
Status | Mandatory | N | This field in the reply return the following values: 0-inactive, 1-active, 2-unknown
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 

Shift Open Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Timestamp | Mandatory | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 

Shift Open Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | Mandatory | AN | Indicates the reason of the result. XB (local bad card type), … 
Status | Mandatory | N | This field in the reply return the following values: 0-inactive, 1-active, 2-unknown
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 

Shift Close Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Timestamp | Mandatory | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 

Shift close Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | Mandatory | AN | Indicates the reason of the result. XB (local bad card type), … 
Status | Mandatory | N | This field in the reply return the following values: 0-inactive, 1-active, 2-unknown
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 
PrintData1 | Optional | AN | Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration.

Cancel Request

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 

Cancel Response

Option | Optional/Mandatory | Type | Description
------ | ------------------ | ---- | -----------
SequenceNumber | Mandatory | N | A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.
RequesterTransRefNum | Mandatory | AN | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.
RequesterStationId | Optional | AN | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterLocationId | Optional  | AN | A reference to the requester’s location making this request.
ValidationId | Optional | AN | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ValidationCode | Optional | AN |  A credential password to authenticate the requester. Provided by 3C. 
Result | Mandatory | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
Message | Optional | AN | Text message which can come from a remote authorization host or from the Integra application. 

Main Type | Request/Response | Options
--------- | ---------------- | ---------
All  | Both | <ul><li>**SequenceNumber**</li><li>RequesterTransRefNum</li><li>RequesterStationId</li><li>RequesterLocationId</li><li>ValidationId</li><li>ValidationCode</li></ul>
Auth | Resquest | <ul><li>EmvTerminalId</li><li>EmvScenarioId</li><li>**Amount**</li><li>Currency</li><li>AmountTotal</li><li>Token</li><li>CardNumber</li><li>CardExpiryDate</li><li>CardInputMethod</li><li>CardTrack1Data</li><li>CardTrack2Data</li><li>CardTrack3Data</li><li>CardStartDate</li><li>CardIssueNumber</li><li>UserData1</li><li>UserData2</li><li>UserData3</li><li>UserData4</li><li>DCCFlag</li><li>CVV2</li><li>CardholderNameFirst</li><li>CardholderNameLast</li><li>CardholderStreetAddress1</li><li>CardholderStreetAddress2</li><li>CardholderCity</li><li>CardholderZipCode</li><li>CardholderState</li><li>CardholderCountry</li><li>CardholderCompany</li><li>CardholderEmail</li><li>CardholderStreetAddress1</li><li>InvoiceId</li><li>ZoneId</li><li>AttendantId</li><li>MarketData</li><li>TdsAuthentResultCode</li><li>TdsAuthentIndicator</li><li>TdsAuthentCryptogram</li><li>TdsTransIdentifier</li><li>PosEnvironment</li></ul>
     | Response | <ul><li>**Result**</li><li>**ResultReason**</li><li>**BankResultCode**</li><li>**BankAuthCode**</li><li>**BankTerminalId**</li><li>**CardInputMethod**</li><li>**CardNumber**</li><li>Token</li><li>CardExpiryDate</li><li>CardTrack1Data</li><li>CardTrack2Data</li><li>CardTrack3Data</li><li>**CardSchemeId**</li><li>**CardSchemeName**</li><li>**CardSchemeLabel**</li><li>**CardFunctionId**</li><li>**CardFunctionName**</li><li>**CardInvoiceCompanyId**</li><li>**CardInvoiceCompanyName**</li><li>**Amount**</li><li>AmountExtra</li><li>**AmountUsed**</li><li>BinAmount</li><li>BinCurrency</li><li>BinRate</li><li>**DCCFlag**</li><li>**CurrencyUsed**</li><li>**LocalAmount**</li><li>**LocalCurrency**</li><li>**TransRefNum**</li><li>**EmvAuthorized**</li><li>**EmvTerminalId**</li><li>EmvTerminalIdManufacturer</li><li>EmvTrack2Equivalent</li><li>EmvApplicationId</li><li>EmvTerminalVerifResult</li><li>EmvTransactionStatusInformation</li><li>EmvPinVerified</li><li>EmvCryptogram</li><li>EmvCryptogramType</li><li>EmvUnpredictableNumber</li><li>EmvData1</li><li>EmvData2</li><li>CardHolderName</li><li>CardHolderLanguage</li><li>MerchantId</li><li>CardIssueNumber</li><li>CardStartDate</li><li>Message</li><li>PrintData1</li><li>PrintData2</li><li>**SignatureRequired**</li><li>CVV2Result</li><li>AVSResult</li><li>TimeStamp</li><li>PosEnvironment</li></ul>
Settlement | Request | <ul><li>EmvTerminalId</li><li>EmvScenarioId</li><li>EmvTerminalMessage</li><li>InvoiceId</li><li>ZoneId</li><li>AttendantId</li><li>CardNumber</li><li>Token</li><li>CardExpiryDate</li><li>CardInputMethod</li><li>**Amount**</li><li>Currency</li><li>AuthCodeInputMethod</li><li>BankAuthCode</li><li>BankResultCode</li><li>ResultReason</li><li>**TimeStamp**</li><li>AmountAuthorized</li><li>AmountVAT</li><li>AmountExtra</li><li>CardTrack1Data</li><li>CardTrack2Data</li><li>CardTrack3Data</li><li>CardStartDate</li><li>CardIssueNumber</li><li>UserData1</li><li>UserData2</li><li>UserData3</li><li>UserData4</li><li>DCCFlag</li><li>LocalAmount</li><li>LocalCurrency</li><li>BinRate</li><li>BinAmount</li><li>BinCurrency</li><li>CardholderNameFirst</li><li>CardholderNameLast</li><li>CardholderStreetAddress1</li><li>CardholderStreetAddress2</li><li>CardholderCity</li><li>CardholderZipCode</li><li>CardholderState</li><li>CardholderCountry</li><li>CardholderCompany</li><li>CardholderEmail</li><li>CVV2</li><li>MarketData</li><li>TdsAuthentResultCode</li><li>TdsAuthentIndicator</li><li>TdsAuthentCryptogram</li><li>TdsTransIdentifier</li><li>PosEnvironment</li></ul>
           | Response | <ul><li>**Result**</li><li>**ResultReason**</li><li>**BankResultCode**</li><li>**BankAuthCode**</li><li>**BankTerminalId**</li><li>CardNumber</li><li>Token</li><li>CardExpiryDate</li><li>CardTrack1Data</li><li>CardTrack2Data</li><li>CardTrack3Data</li><li>**CardInputMethod**</li><li>**CardSchemeId**</li><li>**CardSchemeName**</li><li>**CardSchemeLabel**</li><li>**CardFunctionId**</li><li>**CardFunctionName**</li><li>**CardInvoiceCompanyId**</li><li>**CardInvoiceCompanyName**</li><li>**Amount**</li><li>AmountExtra</li><li>**AmountUsed**</li><li>BinAmount</li><li>BinCurrency</li><li>BinRate</li><li>**DCCFlag**</li><li>**CurrencyUsed**</li><li>**LocalAmount**</li><li>**LocalCurrency**</li><li>**TransRefNum**</li><li>**EmvAuthorized**</li><li>**EmvTerminalId**</li><li>EmvTerminalIdManufacturer</li><li>EmvTrack2Equivalent</li><li>EmvApplicationId</li><li>EmvTerminalVerifResult</li><li>EmvTransactionStatusInformation</li><li>EmvTerminalId</li><li>EmvPinVerified</li><li>EmvCryptogram</li><li>EmvCryptogramType</li><li>EmvUnpredictableNumber</li><li>EmvData1</li><li>EmvData2</li><li>CardHolderName</li><li>CardHolderLanguage</li><li>MerchantId</li><li>CardIssueNumber</li><li>CardStartDate</li><li>Token</li><li>Message</li><li>PrintData1</li><li>PrintData2</li><li>CVV2Result</li><li>AVSResult</li><li>DCCMarkup</li><li>TimeStamp</li><li>PosEnvironment</li></ul>
Terminal Status | Request | <ul><li>**EmvTerminalId**</li><li>Timestamp</li><li>Data</li></ul>
                | Response | <ul><li>**EmvTerminalId**</li><li>StatusMessage</li><li>StatusMessage</li><li>**StatusCode**</li><li>Data</li><li>Data1</li><li>Data2</li><li>CardNumber</li><li>CardExpiryDate</li><li>CardTrack1Data</li><li>CardTrack2Data</li><li>CardTrack3Data</li><li>Token</li></ul>
Terminal Control | Request | <ul><li>**EmvTerminalId**</li><li>Data</li><li>AttendantId</li></ul>
                 | Response | <ul><li>**Result**</li><li>Message</li><li>Data1</li><li>Data1</li><li>Data2</li><li>Data3</li><li>PrintData1</li><li>PrintData2</li><li>Mac</li></ul>


Option | Type | Description
--------- | ----------- | ----------
AVSResult | AN | Result code of the address verification. 
Amount | N | Amount of the request.
AmountAuthorized | N | Amount which has been finally authorized.
AmountTotal | N | Total amount in local currency. 
AmountUsed | N | The actual amount used in the process. Amount, or total amount. In case a gratuity has been given this one is included.
AmoutExtra | N | An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.
AmoutVAT | N |  Amount VAT. 
AttendantId | AN | For future use. An identification of the operator or waiter. To associate requests to specific attendant. 
AuthCodeInputMethod | A | "A" for automatic, "M" for manual entry 
BankAuthCode | AN | Authorization code received from the acquirer. 
BankResultCode | N | Result code from the bank in case of online authorization. 
CVV2 | AN | Card verification value.  
CVV2Result | AN | Result  code of the card verification value. 
CardExpiryDate | N | Card expiration date. Format MMyy. 
CardFunctionId | A | 3Cs card function definition like CC for credit card, CD for debit card… Currently not used. 
CardFunctionName | AN | Card function name like "credit card", "emv card" 
CardInputMethod | A | "E" for EMV terminal, "S" for swiped, "M" for manual entered. 
CardInvoiceCompanyId | A | 3C reference of Invoice company (bank): CI, CE, … 
CardInvoiceCompanyName | AN | Name of invoice company; Citicorp, Cekab, … 
CardIssueNumber | N | Card issue number. Optional in case the card has been swiped. 
CardNumber | N | Card PAN. No start and end sentinel. 
CardNumberEncrypted | N | Encrypted card PAN. No start and end sentinel. 
CardSchemeId | A | Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards. 
CardSchemeLabel | AN | Label of the card scheme like "Visa", "Mastercard", "Diners", … 
CardSchemeName | AN | Name of the card scheme like "Visa", "Mastercard", "Diners", … 
CardStartDate | N | Card start date. Format MMyy. 
CardTrack1Data | N | Card track 1 raw data. 
CardTrack2Data | N | Card track 2 raw data. Mandatory in case the card is swiped. 
CardTrack3Data | N | Card track 3 raw data. 
CardholderCity | AN | For future use 
CardholderCompany | AN | For future use 
CardholderCountry | AN | For future use 
CardholderEmail | AN | For future use 
CardholderLanguage | AN | Language used by the cardholder. Format: "language-Country", e.g. "en-GBP". 
CardholderNameFirst | AN | For future use 
CardholderNameLast | AN | For future use 
CardholderState | AN | For future use 
CardholderStreetAddress1 | AN | Used with AVS (Address Verification) 
CardholderStreetAddress2 | AN | For future use
CardholderZipCode | AN | Used with AVS (Address Verification) 
Currency | A | Currency of the request. 3 character ISO definition: EUR, USD, … In case no currency is provided, the local currency is used.
CurrencyUsed | AN | Currency used in the process. Currency requested or local currency. 
DCCFlag | Y/N | Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.
DCCMarkup | N | Markup which is applied to the DCC rate provided by the DCC provider. 
Data | AN | Extra data passed in the request or back in the response. Usage depends on message status type. 
DisableReceipt | A | Flag set to generate the receipt in the reply, or to not generate it. Merchant and cardholder receipts in the fields PrintData1 and PrintData2 can be set independently, with the following values: 
EmvApplicationId | AN | Reference of application use during an EMV transaction 
EmvAuthorized | Y/N | Feedback to know if an EMV authorization has been done or not 
EmvCryptogram | AN | EMV cryptogram reference 
EmvCryptogramType | AN | Cryptogram description
EmvPinVerified | Y/N | Feedback to know if the PIN was entered 
EmvScenarioId | A | 2 bytes Id to indicate the EMV scenario to choose. Default is DT. 
EmvTerminalId | AN | Reference of EMV terminal used to get EMV card details 
EmvTerminalIdManufacturer | AN | Internal reference manufacturer of EMV terminal (e.g. serial number) 
EmvTerminalMessage | A/M | A free message to be displayed on the terminal. Can contain for instance table number, guest reference, … 
EmvTerminalVerifResult | AN | Status of the different functions as seen from the terminal 
EmvTrack2Equivalent | AN | EMV track 2
EmvTransactionStatusInformation | AN | Identifies the status of the card at the end of the transaction process  
EmvUnpredictableNumber | AN | An unpredictable number is generated for each EMV transaction. 
InvoiceId | AN | The reference printed on the invoice or check number on the receipt.
KsnCardData | AN | Card data encryption key serial number used to generate the encrypted card data. In case SRED is enabled on the terminal. 
Language | A | Format: "language-Country" If you do not want to set the language just do not send the tag "Language" at all. 
MarketData | AN | Market specific data. Refer to section “Market Specific Data” for more information on the data tag names. 
MerchantId | AN | Contract number between the merchant and the invoice company. 
Message | AN | Text message which can come from a remote authorization host or from the Integra application. 
PosEnvironment | A | POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred. 
PrintData1 | AN | Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration. 
PrintData2 | AN | Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration. 
RequesterLocationId | | A reference to the requester’s location making this request.
RequesterStationId | | A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.
RequesterTransRefNum | | This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply. 
Result | A | Result of the operation. A (accepted), R (rejected), E (Warning), … 
ResultReason | AN | Indicates the reason of the result. XB (local bad card type), … 
StatusCode | N | Unique status code
StatusMessage | A | A text message related to the status code sent back 
TdsAuthentCryptogram | AN | 3DS Visa Cardholder Authentication Verification Value (CAVV), Mastercard Account Authentication Value (AAV) 
TdsAuthentIndicator | AN | 3DS Visa Electronic Commerce Indicator (ECI), Mastercard Universal Card Authentication Field (UCAF) 
TdsAuthentResultCode | AN | 3DS Visa Transaction Status (TC) 
TdsTransIdentifier | AN | 3DS Visa Transaction Identifier (XID) 
TerminalIpDhcp | Y/N | "Y" to be set to DHCP, "N" to static IP address TerminalIp Terminal IP address, if static IP 
TerminalIpDns | AN | Terminal's network DNS server address 
TerminalIpMask | AN | Network mask TerminalIpGw Terminal's network gateway server address 
TimeStamp | N | Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time. 
TmsServerIp1 | AN | The terminal's terminal management system main IP address 
TmsServerIp2 | AN | The terminal's terminal management system backup IP address
Token | N | Token, instead of or in addition of card number. 
TransRefNum | AN | Integra FE internal transaction reference number. Or for EP2 solutions transaction reference coming from the host. 
Type | N | Determines from where the card data comes. Either provided in request or read by an EMV terminal.  
UserData1 | AN | Any data the integrator wants to have saved with the request.  This field might be printed out on the payment receipt. 
UserData2 | AN | Any data the integrator wants to have saved with the request. 
UserData3 | AN | Any data the integrator wants to have saved with the request. 
UserData4 | AN | Any data the integrator wants to have saved with the request. 
ValidationCode | | A credential password to authenticate the requester. Provided by 3C. 
ValidationId | | A credential identifier, to authenticate the requester. Provided by the integrator or 3C. 
ZoneId | AN | For future use. An identification of the geographical zone (in hotel, restaurant or shop) the request is related to. With this parameter specific EMV terminals are associated to zones. 
