Settlement Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
EmvTerminalId | Optional
EmvScenarioId | Optional
EmvTerminalMessage | Optional
InvoiceId | Optional
ZoneId | Optional
AttendantId | Optional
CardNumber | Optional
Token | Optional
CardExpiryDate | Optional
CardInputMethod | Optional
Amount | Mandatory
Currency | Optional
AuthCodeInputMethod | Optional
BankAuthCode | Optional
BankResultCode | Optional
ResultReason | Optional
TimeStamp | Optional
AmountAuthorized | Optional
AmountVAT | Optional
AmountExtra | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
CardStartDate | Optional
CardIssueNumber | Optional
UserData1 | Optional
UserData2 | Optional
UserData3 | Optional
UserData4 | Optional
DCCFlag | Optional
LocalAmount | Optional
LocalCurrency | Optional
BinRate | Optional
BinAmount | Optional
BinCurrency | Optional
CardholderNameFirst | Optional
CardholderNameLast | Optional
CardholderStreetAddress1 | Optional
CardholderStreetAddress2 | Optional
CardholderCity | Optional
CardholderZipCode | Optional
CardholderState | Optional
CardholderCountry | Optional
CardholderCompany | Optional
CardholderEmail | Optional
CVV2 | Optional
MarketData | Optional
TdsAuthentResultCode | Optional
TdsAuthentIndicator | Optional
TdsAuthentCryptogram | Optional
TdsTransIdentifier | Optional
PosEnvironment | Optional

Settlement Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
ResultReason | Mandatory
BankResultCode | Mandatory
BankAuthCode | Mandatory
BankTerminalId | Mandatory
CardNumber | Optional
Token | Optional
CardExpiryDate | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
CardInputMethod | Mandatory
CardSchemeId | Mandatory
CardSchemeName | Mandatory
CardSchemeLabel | Mandatory
CardFunctionId | Mandatory
CardFunctionName | Mandatory
CardInvoiceCompanyId | Mandatory
CardInvoiceCompanyName | Mandatory
Amount | Mandatory
AmountExtra | Optional
AmountUsed | Optional
BinAmount | Optional
BinCurrency | Optional
BinRate | Optional
DCCFlag | Mandatory
CurrencyUsed | Mandatory
EftSettlementType | Mandatory
LocalAmount | Mandatory
LocalCurrency | Mandatory
TransRefNum | Mandatory
EmvPinVerified | Mandatory
EmvAuthorized | Mandatory
EmvTerminalId | Mandatory
EmvTerminalIdManufacturer | Optional
EmvTrack2Equivalent | Optional
EmvApplicationId | Optional
EmvTerminalVerifResult | Optional
EmvTransactionStatusInformation | Optional
EmvPinVerified | Optional
EmvCryptogram | Optional
EmvCryptogramType | Optional
EmvUnpredictableNumber | Optional
EmvData1 | Optional
EmvData2 | Optional
CardHolderName | Optional
CardHolderLanguage | Optional
MerchantId | Optional
CardIssueNumber | Optional
CardStartDate | Optional
Token | Optional
Message | Optional
PrintData1 | Optional
PrintData2 | Optional
CVV2Result | Optional
AVSResult | Optional
DCCMarkup | Optional
TimeStamp | Optional
PosEnvironment | Optional

Terminal Control Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
EmvTerminalId | Mandatory
Data | Optional
AttendantId | Optional

Terminal Control Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
Message | Optional
Data1 | Optional
Data1 | Optional
Data2 | Optional
Data3 | Optional
PrintData1 | Optional
PrintData2 | Optional
Mac | Optional

Terminal Status Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
EmvTerminalId | Mandatory
TimeStamp | Optional
Data | Optional

Terminal Status Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
EmvTerminalId | Mandatory
StatusMessage | Optional
StatusCode | Mandatory
Data | Optional
Data1 | Optional
Data2 | Optional
CardNumber | Optional
CardExpiryDate | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
Token | Optional

Auth Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
EmvTerminalId | Optional
EmvScenarioId | Optional
Amount | Mandatory
Currency | Optional
AmountTotal | Optional
Token | Optional
CardNumber | Optional
CardExpiryDate | Optional
CardInputMethod | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
CardStartDate | Optional
CardIssueNumber | Optional
UserData1 | Optional
UserData2 | Optional
UserData3 | Optional
UserData4 | Optional
DCCFlag | Optional
CVV2 | Optional
CardholderNameFirst | Optional
CardholderNameLast | Optional
CardholderStreetAddress1 | Optional
CardholderStreetAddress2 | Optional
CardholderCity | Optional
CardholderZipCode | Optional
CardholderState | Optional
CardholderCountry | Optional
CardholderCompany | Optional
CardholderEmail | Optional
CardholderStreetAddress1 | Optional
InvoiceId | Optional
ZoneId | Optional
AttendantId | Optional
MarketData | Optional
TdsAuthentResultCode | Optional
TdsAuthentIndicator | Optional
TdsAuthentCryptogram | Optional
TdsTransIdentifier | Optional
PosEnvironment | Optional

Auth Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
ResultReason | Mandatory
BankResultCode | Mandatory
BankAuthCode | Mandatory
BankTerminalId | Mandatory
CardInputMethod | Mandatory
CardNumber | Mandatory
Token | Optional
CardExpiryDate | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
CardSchemeId | Mandatory
CardSchemeName | Mandatory
CardSchemeLabel | Mandatory
CardFunctionId | Mandatory
CardFunctionName | Mandatory
CardInvoiceCompanyId | Mandatory
CardInvoiceCompanyName | Mandatory
Amount | Mandatory
AmountExtra | Optional
AmountUsed | Mandatory
BinAmount | Optional
BinCurrency | Optional
BinRate | Optional
DCCFlag | Mandatory
CurrencyUsed | Mandatory
EftAuthorizationType | Mandatory
LocalAmount | Mandatory
LocalCurrency | Mandatory
TransRefNum | Mandatory
EmvAuthorized | Mandatory
EmvTerminalId | Mandatory
EmvTerminalIdManufacturer | Optional
EmvTrack2Equivalent | Optional
EmvApplicationId | Optional
EmvTerminalVerifResult | Optional
EmvTransactionStatusInformation | Optional
EmvPinVerified | Mandatory
EmvCryptogram | Optional
EmvCryptogramType | Optional
EmvUnpredictableNumber | Optional
EmvData1 | Optional
EmvData2 | Optional
CardHolderName | Optional
CardHolderLanguage | Optional
MerchantId | Optional
CardIssueNumber | Optional
CardStartDate | Optional
Message | Optional
PrintData1 | Optional
PrintData2 | Optional
SignatureRequired | Mandatory
CVV2Result | Optional
AVSResult | Optional
TimeStamp | Optional
PosEnvironment | Optional

Card Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
CardInputMethod | Optional
CardNumber | Optional
CardExpiryDate | Optional
CardStartDate | Optional
CardIssueNumber | Optional
CardTrack1Data | Optional
CardTrack2Data | Optional
CardTrack3Data | Optional
EmvTerminalId | Optional
EmvScenarioId | Optional
EmvTrack2Equivalent | Optional
KsnCardData | Optional

Card Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
ResultReason | Mandatory
CardNumber | Mandatory
Token | Optional
CardExpiryDate | Mandatory
CardSchemeId | Mandatory
CardSchemeName | Mandatory
CardFunctionId | Mandatory
CardFunctionName | Mandatory
CardInvoiceCompanyId | Mandatory
CardInvoiceCompanyName | Mandatory
EmvApplicationId | Optional
CardIssueNumber | Optional
CardStartDate | Optional
Message | Optional

Check Status Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional

Check Status Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
Status | Mandatory
Message | Optional

Shift Open Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Timestamp | Mandatory

Shift Open Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
ResultReason | Mandatory
Status | Mandatory
Message | Optional

Shift Close Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Timestamp | Mandatory

Shift close Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
ResultReason | Mandatory
Status | Mandatory
Message | Optional
PrintData1 | Optional

Cancel Request

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional

Cancel Response

Option | Optional/Mandatory
------ | ------------------
SequenceNumber | Mandatory
RequesterTransRefNum | Mandatory
RequesterStationId | Optional
RequesterLocationId | Optional
ValidationId | Optional
ValidationCode | Optional
Result | Mandatory
Message | Optional

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
