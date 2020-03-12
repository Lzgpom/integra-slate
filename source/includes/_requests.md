# Requests
The POS and the terminal communicate by requests in the 3cXML protocol. 
A request is made up by its type and options.

## Create Request
### Parameters
```java
Request request = RequestFactory.getInstance().createRequest(OtherType.CANCEL, null);
```
```csharp
Request request = RequestFactory.getInstance().createRequest(OtherType.CANCEL, null);
```
In order to create a request there's a factory for this purpose.

Parameter | Description
--------- | -----------
type | The type of the request.
options | An HashMap with the options of the request.


<aside class="notice">
Depending on the type, the request might have some mandatory options.
</aside>

## Types
The Integra Api provides the following request types:

Main Type | Type | Description
------------| ---------- | -------
Auth | PRE_AUTH | Performs an authorization for an amount not necessarily equal to the final transaction amount, using EMV terminal. Card (EMV) data read by terminal. Pin entry.
Auth | TOP_UP |
Auth | PRE_AUTH_REVERSAL | 
Auth | TOP_UP_REVERSAL | 
Settlement | SALE | Sale using EMV terminal. EMV data read by terminal. Pin entry.
Settlement | REFUND | Refund using EMV terminal. EMV data read by terminal. Pin entry optional. 
Settlement | COMPLETION | Terminal used for completion, e.g. to provide confirmation or printout. 
Settlement | SALE_REVERSAL | 
Settlement | REFUND_REVERSAL | 
Settlement | COMPLETION_REVERSAL | 
Card | CARD_CHECK | Validate the card data received in the request.
Card | CARD_CHECK_VALIDATE | Validate the card read by an EMV terminal. Card might stay in the terminal after reading.
Card | CARD_CHECK_REMOVE | Validate the card read by an EMV terminal. Card is removed from the terminal after reading. 
Terminal Status | INFO | 
Terminal Control | TERMINAL_ACTIVATE | 
Terminal Control | TERMINAL_DEACTIVATE | 
Terminal Control | TERMINAL_LANGUAGE | 
Terminal Control | TERMINAL_SLEEP | 
Terminal Control | TERMINAL_PRINTER_AVAILABLE |
Terminal Control | TERMINAL_PRINTER_NOT_AVAILABLE |
Terminal Control | TERMINAL_INITIALIZE |
Terminal Control | TERMINAL_SHIFT_REOPEN |
Other | CANCEL | Cancel a message sent before. 
Other | CHECK_STATUS | Status request. Returns if the application is operational or not.
Other | SHIFT_OPEN | Open the reconciliation period. ShiftClose 
Other | SHIFT_CLOSE | Close the reconciliation period. 
Other | SHIFT_CLOSE_OPEN | Close then open the reconciliation period.

## Options
The options that can be added to requests are:

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

### Options per main type

<aside class="notice">
Options in bold are not optional.
</aside>

<select id="request_select">
  <option value="sale">Sale</option>
  <option value="refund">Refund</option>
  <option value="completion">Completion</option>
  <option value="sale_reversal">Sale Reversal</option>
  <option value="refund_reversal">Refund Reversal</option>
  <option value="completion_reversal">Completion Reversal</option>
</select>

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
