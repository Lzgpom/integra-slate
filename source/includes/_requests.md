# Request
The POS and the terminal communicate by requests in the 3cXML protocol, 3cXML abbreviated and 3cXMLPay@Table and 3cXMLPay@Table abbreviated. 
A request is made up by its type and options.

## Create Request
### Parameters
```java
HashMap<String, String> options = new HashMap<>();
options.put("Amount", "10.4");

Request request = RequestFactory.getInstance().createRequest(SettlementYpe.SALE, options);
```
```csharp
Dictionary<string, string> options = new Dictionary<string, string>();
options.Add("Amount", "10.4");

Request request = RequestFactory.getInstance().createRequest(SettlementYpe.SALE, options);
```
In order to create a request there's a factory for this purpose.

Parameter| Type | Description
---------| ---- | -----------
type | [RequestType](#requesttype) | The type of the request.
options | HashMap<String,String> | An HashMap with the options of the request.


<aside class="notice">
Depending on the type, the request might have some mandatory options.
</aside>

## RequestType
There is a "main type" which is the category of the type. The subtype is action of the request.

This are the type of that Integra API has:

Main Type | Type | Description
------------| ---------- | -------
Auth | PRE_AUTH | Performs an authorization for an amount not necessarily equal to the final transaction amount, using EMV terminal. Card (EMV) data read by terminal. Pin entry.
Auth | TOP_UP | Additional or supplemental authorization, done after an initial one. The same requester transaction reference number or token has to be used than for the initial one. The actual total amount has to be provided in the request. No EMV terminal used here. By using the transaction reference the Integraserver finds back the original authorization and the EMV data. This request might go for an online approval.
Auth | PRE_AUTH_REVERSAL | Reversal of a previous PreAuth request. The same amount has to be used than for the PreAuth one. No EMV terminal used here. By using the transaction reference the Integraserver finds back the original authorization and the EMV data. This request might go for an online approval, depending on the bank interface. 
Auth | TOP_UP_REVERSAL | Reversal of a previous TopUp request. The amount and requester transaction reference number has to be the same than in the TopUp request. No EMV terminal used here. By using the transaction reference the Integraserver finds back the original authorizationand the EMV data. Then it does a reversal, by using the authorization code received at that time. This request might go for an online approval, depending on the bank interface
Settlement | SALE | Sale using EMV terminal. EMV data read by terminal. Pin entry.
Settlement | REFUND | Refund using EMV terminal. EMV data read by terminal. Pin entry optional. 
Settlement | COMPLETION | Terminal used for completion, e.g. to provide confirmation or printout. 
Settlement | SALE_REVERSAL | Reversal of a sale. No PIN entry required. The requester transaction reference number has to be the same than in the Sale request.
Settlement | REFUND_REVERSAL | Reversal of a refund. No PIN entry required. The requester transaction reference number has to be the same than in the Refund request.
Settlement | COMPLETION_REVERSAL | Reversal of a completion. No PIN entry required. The requester transaction reference number has to be the same than in the Completion request.
Card | CARD_CHECK | Validate the card data received in the request.
Card | CARD_CHECK_VALIDATE | Validate the card read by an EMV terminal. Card might stay in the terminal after reading.
Card | CARD_CHECK_REMOVE | Validate the card read by an EMV terminal. Card is removed from the terminal after reading. 
Terminal Status | INFO | Can provide specific terminal information, such as diagnostic data, or initial receipt data.
Terminal Control | TERMINAL_ACTIVATE | This request can be used to activate an EMV terminal. Activate will place the terminal in a "technical" operational stateso it can be used by the integrator to execute operations. This command is only required in case the integrator has formerly deactivated the terminal.
Terminal Control | TERMINAL_DEACTIVATE | This request can be used to deactivate an EMV terminal. Deactivate will place the terminal into a "technical"non-operational stateso it can NOT be used by the integrator to execute operations, and deactivates the reader and pinpad. This command is only required in case the integrator explicitly wants to deactivate a terminal to be sure no operations can be done.
Terminal Control | TERMINAL_LANGUAGE | This request can be used to change the language of the terminal.
Terminal Control | TERMINAL_SLEEP | This request can be used to make terminal to sleep.
Terminal Control | TERMINAL_PRINTER_AVAILABLE | This request can be used to set the printer to available.
Terminal Control | TERMINAL_PRINTER_NOT_AVAILABLE | This request can be used to set the printer to nou available.
Terminal Control | TERMINAL_INITIALIZE | This message can be send to initialize an EMV terminal with some parameters from the request, and to trigger a configuration and software download.
Terminal Control | TERMINAL_SHIFT_REOPEN | This message is like the SHIFT_CLOSE_OPEN.
Other | CANCEL | Cancel a message sent before. 
Other | CHECK_STATUS | Status request. Returns if the application is operational or not.
Other | SHIFT_OPEN | Open the reconciliation period. ShiftClose 
Other | SHIFT_CLOSE | Close the reconciliation period. 
Other | SHIFT_CLOSE_OPEN | Close then open the reconciliation period.

## Options
Options is information that is on a request or a response.  
The options that can be added to requests are:  
**AN** - Alpha Numeric  
**A** - Alpha  
**N** - Numeric  
**Y/N** - Boolean

### Options per type

<select id="request_select" onchange="request_select()">
  <option value="settlement_request">Sale Request</option>
  <option value="settlement_response">Sale Response</option>
  <option value="settlement_request">Refund Request</option>
  <option value="settlement_response">Refund Response</option>
  <option value="settlement_request">Completion Request</option>
  <option value="settlement_response">Completion Response</option>
  <option value="settlement_request">Sale Reversal Request</option>
  <option value="settlement_response">Sale Reversal Response</option>
  <option value="settlement_request">Refund Reversal Request</option>
  <option value="settlement_response">Refund Reversal Response</option>
  <option value="settlement_request">Completion Reversal Request</option>
  <option value="settlement_response">Completion Reversal Response</option>
  <option value="auth_request">Pre Auth Request</option>
  <option value="auth_response">Pre Auth Response</option>
  <option value="auth_request">Top Up Request</option>
  <option value="auth_response">Top Up Response</option>
  <option value="auth_request">Pre Auth Reversal Request</option>
  <option value="auth_response">Pre Auth Reversal Response</option>
  <option value="auth_request">Top Up Reversal Request</option>
  <option value="auth_response">Top Up Reversal Response</option>
  <option value="card_request">Card Check Request</option>
  <option value="card_response">Card Check Response</option>
  <option value="card_request">Card Check Validate Request</option>
  <option value="card_response">Card Check Validate Response</option>
  <option value="card_request">Card Check Remove Request</option>
  <option value="card_response">Card Check Remove Response</option>
  <option value="terminal_control_request">Terminal Activate Request</option>
  <option value="terminal_control_response">Terminal Activate Response</option>
  <option value="terminal_control_request">Terminal Deactivate Request</option>
  <option value="terminal_control_response">Terminal Deactivate Response</option>
  <option value="terminal_control_request">Terminal Language Request</option>
  <option value="terminal_control_response">Terminal Language Response</option>
  <option value="terminal_control_request">Terminal Sleep Request</option>
  <option value="terminal_control_response">Terminal Sleep Response</option>
  <option value="terminal_control_request">Terminal Printer Available Request</option>
  <option value="terminal_control_response">Terminal Printer Available Response</option>
  <option value="terminal_control_request">Terminal Printer Not Available Request</option>
  <option value="terminal_control_response">Terminal Printer Not Available Response</option>
  <option value="terminal_control_request">Terminal Initialize Request</option>
  <option value="terminal_control_response">Terminal Initialize Response</option>
  <option value="terminal_control_request">Terminal Shift Reopen Request</option>
  <option value="terminal_control_response">Terminal Shift Reopen Response</option>
  <option value="terminal_status_request">Terminal Info Request</option>
  <option value="terminal_status_response">Terminal Info Response</option>
  <option value="check_status_request">Check Status Request</option>
  <option value="check_status_response">Check Status Response</option>
  <option value="shift_open_request">Shift Open Request</option>
  <option value="shift_open_response">Shift Open Response</option>
  <option value="shift_close_request">Shift Close Request</option>
  <option value="shift_close_response">Shift Close Response</option>
  <option value="shift_close_request">Shift Close Open Request</option>
  <option value="shift_close_response">Shift Close Open Response</option>
  <option value="cancel_request">Cancel Request</option>
  <option value="cancel_response">Cancel Response</option>
</select>

<div id="cancel_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="cancel_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="shift_close_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Timestamp</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="shift_close_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>ResultReason</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Indicates the reason of the result. XB (local bad card type), …</td>
  </tr>
  <tr>
  <td>Status</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>This field in the reply return the following values: 0-inactive, 1-active, 2-unknown</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  <tr>
  <td>PrintData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="shift_open_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Timestamp</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="shift_open_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>ResultReason</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Indicates the reason of the result. XB (local bad card type), …</td>
  </tr>
  <tr>
  <td>Status</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>This field in the reply return the following values: 0-inactive, 1-active, 2-unknown</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="check_status_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="check_status_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>Status</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>This field in the reply return the following values: 0-inactive, 1-active, 2-unknown</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="card_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>CardInputMethod</td>
  <td>Optional</td>
  <td>A</td>
  <td>"S"for swiped, "M"for manual entry.</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardStartDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card start date. Format MMyy</td>
  </tr>
  <tr>
  <td>CardIssueNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card issue number. Optional in case the card has been swiped</td>
  </tr>
  <tr>
  <td>CardTrack1Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 1 raw data.</td>
  </tr>
  <tr>
  <td>CardTrack2Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
  </tr>
  <tr>
  <td>CardTrack3Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 3 raw data</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>EmvScenarioId</td>
  <td>Optional</td>
  <td>A</td>
  <td>2 bytes Id to indicate the EMV scenario to choose. Default is DT.</td>
  </tr>
  <tr>
  <td>EmvTrack2Equivalent</td>
  <td>Optional</td>
  <td>AN</td>
  <td>EMV track 2</td>
  </tr>
  <tr>
  <td>KsnCardData</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Card data encryption key serial number used to generate the encrypted card data. In case SRED is enabled on the terminal.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="card_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>ResultReason</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Indicates the reason of the result. XB (local bad card type), …</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>Token</td>
  <td>Optional</td>
  <td>N</td>
  <td>Token, instead of or in addition of card number.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardSchemeId</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards.</td>
  </tr>
  <tr>
  <td>CardSchemeName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Name of the card scheme like "Visa", "Mastercard", "Diners", …</td>
  </tr>
  <tr>
  <td>CardFunctionId</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>3Cs card function definition like CC for credit card, CD for debit card… Currently not used.</td>
  </tr>
  <tr>
  <td>CardFunctionName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Card function name like "credit card", "emv card"</td>
  </tr>
  <tr>
  <td>CardInvoiceCompanyId</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>3C reference of Invoice company (bank): CI, CE, …</td>
  </tr>
  <tr>
  <td>CardInvoiceCompanyName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Name of invoice company; Citicorp, Cekab, …</td>
  </tr>
  <tr>
  <td>EmvApplicationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Reference of application use during an EMV transaction</td>
  </tr>
  <tr>
  <td>CardIssueNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card issue number. Optional in case the card has been swiped</td>
  </tr>
  <tr>
  <td>CardStartDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card start date. Format MMyy</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="auth_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>EmvScenarioId</td>
  <td>Optional</td>
  <td>A</td>
  <td>2 bytes Id to indicate the EMV scenario to choose. Default is DT.</td>
  </tr>
  <tr>
  <td>Amount</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Amount of the request.</td>
  </tr>
  <tr>
  <td>Currency</td>
  <td>Optional</td>
  <td>A</td>
  <td>Currency of the request. 3 character ISO definition: EUR, USD, … In case no currency is provided, the local currency is used.</td>
  </tr>
  <tr>
  <td>AmountTotal</td>
  <td>Optional</td>
  <td>N</td>
  <td>Total amount in local currency.</td>
  </tr>
  <tr>
  <td>Token</td>
  <td>Optional</td>
  <td>N</td>
  <td>Token, instead of or in addition of card number.</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardInputMethod</td>
  <td>Optional</td>
  <td>A</td>
  <td>"E" for EMV terminal, "S" for swiped, "M" for manual entered.</td>
  </tr>
  <tr>
  <td>CardTrack1Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 1 raw data.</td>
  </tr>
  <tr>
  <td>CardTrack2Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
  </tr>
  <tr>
  <td>CardTrack3Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 3 raw data.</td>
  </tr>
  <tr>
  <td>CardStartDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card start date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardIssueNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card issue number. Optional in case the card has been swiped.</td>
  </tr>
  <tr>
  <td>UserData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.  This field might be printed out on the payment receipt.</td>
  </tr>
  <tr>
  <td>UserData2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>UserData3</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>UserData4</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>DCCFlag</td>
  <td>Optional</td>
  <td>Y/N</td>
  <td>Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.</td>
  </tr>
  <tr>
  <td>CVV2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Card verification value.</td>
  </tr>
  <tr>
  <td>CardholderNameFirst</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderNameLast</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderStreetAddress1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Used with AVS (Address Verification)</td>
  </tr>
  <tr>
  <td>CardholderStreetAddress2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCity</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderZipCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Used with AVS (Address Verification)</td>
  </tr>
  <tr>
  <td>CardholderState</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCountry</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCompany</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderEmail</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>InvoiceId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>The reference printed on the invoice or check number on the receipt.</td>
  </tr>
  <tr>
  <td>ZoneId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use. An identification of the geographical zone (in hotel, restaurant or shop) the request is related to. With this parameter specific EMV terminals are associated to zones.</td>
  </tr>
  <tr>
  <td>AttendantId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use. An identification of the operator or waiter. To associate requests to specific attendant.</td>
  </tr>
  <tr>
  <td>MarketData</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Market specific data. Refer to section “Market Specific Data” for more information on the data tag names.</td>
  </tr>
  <tr>
  <td>TdsAuthentResultCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Transaction Status (TC)</td>
  </tr>
  <tr>
  <td>TdsAuthentIndicator</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Electronic Commerce Indicator (ECI), Mastercard Universal Card Authentication Field (UCAF)</td>
  </tr>
  <tr>
  <td>TdsAuthentCryptogram</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Cardholder Authentication Verification Value (CAVV), Mastercard Account Authentication Value (AAV)</td>
  </tr>
  <tr>
  <td>TdsTransIdentifier</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Transaction Identifier (XID)</td>
  </tr>
  <tr>
  <td>PosEnvironment</td>
  <td>Optional</td>
  <td>A</td>
  <td>POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="auth_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>ResultReason</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Indicates the reason of the result. XB (local bad card type), …</td>
  </tr>
  <tr>
  <td>BankResultCode</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Result code from the bank in case of online authorization.</td>
  </tr>
  <tr>
  <td>BankAuthCode</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Authorization code received from the acquirer.</td>
  </tr>
  <tr>
  <td>BankTerminalId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>The id of the bank terminal</td>
  </tr>
  <tr>
  <td>CardInputMethod</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>"E" for EMV terminal, "S" for swiped, "M" for manual entered.</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>Token</td>
  <td>Optional</td>
  <td>N</td>
  <td>Token, instead of or in addition of card number.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardTrack1Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 1 raw data.</td>
  </tr>
  <tr>
  <td>CardTrack2Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
  </tr>
  <tr>
  <td>CardTrack3Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 3 raw data.</td>
  </tr>
  <tr>
  <td>CardSchemeId</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards.</td>
  </tr>
  <tr>
  <td>CardSchemeName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Name of the card scheme like "Visa", "Mastercard", "Diners", …</td>
  </tr>
  <tr>
  <td>CardSchemeLabel</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Label of the card scheme like "Visa", "Mastercard", "Diners", …</td>
  </tr>
  <tr>
  <td>CardFunctionId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Name of the card scheme like "Visa", "Mastercard", "Diners", …</td>
  </tr>
  <tr>
  <td>CardFunctionName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Card function name like "credit card", "emv card"</td>
  </tr>
  <tr>
  <td>CardInvoiceCompanyId</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>3C reference of Invoice company (bank): CI, CE, …</td>
  </tr>
  <tr>
  <td>CardInvoiceCompanyName</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Name of invoice company; Citicorp, Cekab, …</td>
  </tr>
  <tr>
  <td>Amount</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Amount of the request.</td>
  </tr>
  <tr>
  <td>Amount</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Amount of the request.</td>
  </tr>
  <tr>
  <td>AmountExtra</td>
  <td>Optional</td>
  <td>N</td>
  <td>An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.</td>
  </tr>
  <tr>
  <td>AmountUsed</td>
  <td>Optional</td>
  <td>N</td>
  <td>The actual amount used in the process. Amount, or total amount. In case a gratuity has been given this one is included.</td>
  </tr>
  <tr>
  <td>BinRate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Some Rate</td>
  </tr>
  <tr>
  <td>BinAmount</td>
  <td>Optional</td>
  <td>N</td>
  <td>Amount of the request, in the bin currency.</td>
  </tr>
  <tr>
  <td>BinCurrency</td>
  <td>Optional</td>
  <td>A</td>
  <td>The bin currency.</td>
  </tr>
  <tr>
  <td>DCCFlag</td>
  <td>Mandatory</td>
  <td>Y/N</td>
  <td>Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.</td>
  </tr>
  <tr>
  <td>CurrencyUsed</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Currency used in the process. Currency requested or local currency.</td>
  </tr>
  <tr>
  <td>LocalAmount</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Amount of the request, in the local currency.</td>
  </tr>
  <tr>
  <td>LocalCurrency</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>The local currency.</td>
  </tr>
  <tr>
  <td>TransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Integra FE internal transaction reference number. Or for EP2 solutions transaction reference coming from the host.</td>
  </tr>
  <tr>
  <td>EmvAuthorized</td>
  <td>Mandatory</td>
  <td>Y/N</td>
  <td>Feedback to know if an EMV authorization has been done or not</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>EmvTerminalIdManufacturer</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Internal reference manufacturer of EMV terminal (e.g. serial number)</td>
  </tr>
  <tr>
  <td>EmvTrack2Equivalent</td>
  <td>Optional</td>
  <td>AN</td>
  <td>EMV track 2</td>
  </tr>
  <tr>
  <td>EmvApplicationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Reference of application use during an EMV transaction</td>
  </tr>
  <tr>
  <td>EmvTerminalVerifResult</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Status of the different functions as seen from the terminal</td>
  </tr>
  <tr>
  <td>EmvTransactionStatusInformation</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Identifies the status of the card at the end of the transaction process</td>
  </tr>
  <tr>
  <td>EmvPinVerified</td>
  <td>Mandatory</td>
  <td>Y/N</td>
  <td>Feedback to know if the PIN was entered</td>
  </tr>
  <tr>
  <td>EmvCryptogram</td>
  <td>Optional</td>
  <td>AN</td>
  <td>EMV cryptogram reference</td>
  </tr>
  <tr>
  <td>EmvCryptogramType</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Cryptogram description</td>
  </tr>
  <tr>
  <td>EmvUnpredictableNumber</td>
  <td>Optional</td>
  <td>AN</td>
  <td>An unpredictable number is generated for each EMV transaction.</td>
  </tr>
  <tr>
  <td>EmvData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional EMV data for future use.</td>
  </tr>
  <tr>
  <td>EmvData2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional EMV data for future use.</td>
  </tr>
  <tr>
  <td>CardHolderName</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardHolderLanguage</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Language used by the cardholder. Format: "language-Country", e.g. "en-GBP".</td>
  </tr>
  <tr>
  <td>MerchantId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Contract number between the merchant and the invoice company.</td>
  </tr>
  <tr>
  <td>CardIssueNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card issue number. Optional in case the card has been swiped.</td>
  </tr>
  <tr>
  <td>CardStartDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card start date. Format MMyy.</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  <tr>
  <td>PrintData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration.</td>
  </tr>
  <tr>
  <td>PrintData2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration.</td>
  </tr>
  <tr>
  <td>SignatureRequired</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>A signature.</td>
  </tr>
  <tr>
  <td>CVV2Result</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Result  code of the card verification value.</td>
  </tr>
  <tr>
  <td>AVSResult</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Result code of the address verification.</td>
  </tr>
  <tr>
  <td>TimeStamp</td>
  <td>Optional</td>
  <td>N</td>
  <td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
  </tr>
  <tr>
  <td>PosEnvironment</td>
  <td>Optional</td>
  <td>A</td>
  <td>POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="terminal_status_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>TimeStamp</td>
  <td>Optional</td>
  <td>N</td>
  <td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
  </tr>
  <tr>
  <td>Data</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Extra data passed in the request or back in the response. Usage depends on message status type.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="terminal_status_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>StatusMessage</td>
  <td>Optional</td>
  <td>A</td>
  <td>A text message related to the status code sent back</td>
  </tr>
  <tr>
  <td>StatusCode</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Unique status code</td>
  </tr>
  <tr>
  <td>Data</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Data received.</td>
  </tr>
  <tr>
  <td>Data2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>More data received.</td>
  </tr>
  <tr>
  <td>Data3</td>
  <td>Optional</td>
  <td>AN</td>
  <td>More data received.</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardTrack1Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 1 raw data.</td>
  </tr>
  <tr>
  <td>CardTrack2Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
  </tr>
  <tr>
  <td>CardTrack3Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 3 raw data.</td>
  </tr>
  <tr>
  <td>Token</td>
  <td>Optional</td>
  <td>N</td>
  <td>Token, instead of or in addition of card number.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="terminal_control_request" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>Data</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Extra data passed in the request or back in the response. Usage depends on message status type.</td>
  </tr>
  <tr>
  <td>AttendantId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use. An identification of the operator or waiter. To associate requests to specific attendant.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="terminal_control_response" class="request_option">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>Result</td>
  <td>Mandatory</td>
  <td>A</td>
  <td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
  </tr>
  <tr>
  <td>Message</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Text message which can come from a remote authorization host or from the Integra application.</td>
  </tr>
  <tr>
  <td>Data1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Data received.</td>
  </tr>
  <tr>
  <td>Data2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>More data received.</td>
  </tr>
  <tr>
  <td>Data3</td>
  <td>Optional</td>
  <td>AN</td>
  <td>More data received.</td>
  </tr>
  <tr>
  <td>PrintData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration.</td>
  </tr>
  <tr>
  <td>PrintData2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration.</td>
  </tr>
  <tr>
  <td>Mac</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Mac information.</td>
  </tr>
  </tbody>
  </table>
</div>

<div id="settlement_response" class="request_option">
<table>
<thead>
<tr>
<th>Option</th>
<th>Optional/Mandatory</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>SequenceNumber</td>
<td>Mandatory</td>
<td>N</td>
<td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
</tr>
<tr>
<td>RequesterTransRefNum</td>
<td>Mandatory</td>
<td>AN</td>
<td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
</tr>
<tr>
<td>RequesterStationId</td>
<td>Optional</td>
<td>AN</td>
<td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
</tr>
<tr>
<td>RequesterLocationId</td>
<td>Optional</td>
<td>AN</td>
<td>A reference to the requester’s location making this request.</td>
</tr>
<tr>
<td>ValidationId</td>
<td>Optional</td>
<td>AN</td>
<td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
</tr>
<tr>
<td>ValidationCode</td>
<td>Optional</td>
<td>AN</td>
<td>A credential password to authenticate the requester. Provided by 3C.</td>
</tr>
<tr>
<td>Result</td>
<td>Mandatory</td>
<td>A</td>
<td>Result of the operation. A (accepted), R (rejected), E (Warning), …</td>
</tr>
<tr>
<td>ResultReason</td>
<td>Mandatory</td>
<td>AN</td>
<td>Indicates the reason of the result. XB (local bad card type), …</td>
</tr>
<tr>
<td>BankResultCode</td>
<td>Mandatory</td>
<td>N</td>
<td>Result code from the bank in case of online authorization.</td>
</tr>
<tr>
<td>BankAuthCode</td>
<td>Mandatory</td>
<td>AN</td>
<td>Authorization code received from the acquirer.</td>
</tr>
<tr>
<td>BankTerminalId</td>
<td>Mandatory</td>
<td>AN</td>
<td>The id of the bank terminal</td>
</tr>
<tr>
<td>CardNumber</td>
<td>Optional</td>
<td>N</td>
<td>Card PAN. No start and end sentinel.</td>
</tr>
<tr>
<td>Token</td>
<td>Optional</td>
<td>N</td>
<td>Token, instead of or in addition of card number.</td>
</tr>
<tr>
<td>CardExpiryDate</td>
<td>Optional</td>
<td>N</td>
<td>Card expiration date. Format MMyy.</td>
</tr>
<tr>
<td>CardTrack1Data</td>
<td>Optional</td>
<td>N</td>
<td>Card track 1 raw data.</td>
</tr>
<tr>
<td>CardTrack2Data</td>
<td>Optional</td>
<td>N</td>
<td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
</tr>
<tr>
<td>CardTrack3Data</td>
<td>Optional</td>
<td>N</td>
<td>Card track 3 raw data.</td>
</tr>
<tr>
<td>CardInputMethod</td>
<td>Mandatory</td>
<td>A</td>
<td>"E" for EMV terminal, "S" for swiped, "M" for manual entered.</td>
</tr>
<tr>
<td>CardSchemeId</td>
<td>Mandatory</td>
<td>A</td>
<td>Contains the card scheme Id: VS, AX, MC, XX, … Might contain special 3C defined card schemes for certain cards.</td>
</tr>
<tr>
<td>CardSchemeName</td>
<td>Mandatory</td>
<td>AN</td>
<td>Name of the card scheme like "Visa", "Mastercard", "Diners", …</td>
</tr>
<tr>
<td>CardSchemeLabel</td>
<td>Mandatory</td>
<td>AN</td>
<td>Label of the card scheme like "Visa", "Mastercard", "Diners", …</td>
</tr>
<tr>
<td>CardFunctionId</td>
<td>Mandatory</td>
<td>AN</td>
<td>Name of the card scheme like "Visa", "Mastercard", "Diners", …</td>
</tr>
<tr>
<td>CardFunctionName</td>
<td>Mandatory</td>
<td>AN</td>
<td>Card function name like "credit card", "emv card"</td>
</tr>
<tr>
<td>CardInvoiceCompanyId</td>
<td>Mandatory</td>
<td>A</td>
<td>3C reference of Invoice company (bank): CI, CE, …</td>
</tr>
<tr>
<td>CardInvoiceCompanyName</td>
<td>Mandatory</td>
<td>AN</td>
<td>Name of invoice company; Citicorp, Cekab, …</td>
</tr>
<tr>
<td>Amount</td>
<td>Mandatory</td>
<td>N</td>
<td>Amount of the request.</td>
</tr>
<tr>
<td>AmountExtra</td>
<td>Optional</td>
<td>N</td>
<td>An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.</td>
</tr>
<tr>
<td>AmountUsed</td>
<td>Optional</td>
<td>N</td>
<td>The actual amount used in the process. Amount, or total amount. In case a gratuity has been given this one is included.</td>
</tr>
<tr>
<td>BinRate</td>
<td>Optional</td>
<td>N</td>
<td>Some Rate</td>
</tr>
<tr>
<td>BinAmount</td>
<td>Optional</td>
<td>N</td>
<td>Amount of the request, in the bin currency.</td>
</tr>
<tr>
<td>BinCurrency</td>
<td>Optional</td>
<td>A</td>
<td>The bin currency.</td>
</tr>
<tr>
<td>DCCFlag</td>
<td>Mandatory</td>
<td>Y/N</td>
<td>Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.</td>
</tr>
<tr>
<td>CurrencyUsed</td>
<td>Mandatory</td>
<td>AN</td>
<td>Currency used in the process. Currency requested or local currency.</td>
</tr>
<tr>
<td>LocalAmount</td>
<td>Mandatory</td>
<td>N</td>
<td>Amount of the request, in the local currency.</td>
</tr>
<tr>
<td>LocalCurrency</td>
<td>Mandatory</td>
<td>A</td>
<td>The local currency.</td>
</tr>
<tr>
<td>TransRefNum</td>
<td>Mandatory</td>
<td>AN</td>
<td>Integra FE internal transaction reference number. Or for EP2 solutions transaction reference coming from the host.</td>
</tr>
<tr>
<td>EmvAuthorized</td>
<td>Mandatory</td>
<td>Y/N</td>
<td>Feedback to know if an EMV authorization has been done or not</td>
</tr>
<tr>
<td>EmvTerminalId</td>
<td>Mandatory</td>
<td>AN</td>
<td>Reference of EMV terminal used to get EMV card details</td>
</tr>
<tr>
<td>EmvTerminalIdManufacturer</td>
<td>Optional</td>
<td>AN</td>
<td>Internal reference manufacturer of EMV terminal (e.g. serial number)</td>
</tr>
<tr>
<td>EmvTrack2Equivalent</td>
<td>Optional</td>
<td>AN</td>
<td>EMV track 2</td>
</tr>
<tr>
<td>EmvApplicationId</td>
<td>Optional</td>
<td>AN</td>
<td>Reference of application use during an EMV transaction</td>
</tr>
<tr>
<td>EmvTerminalVerifResult</td>
<td>Optional</td>
<td>AN</td>
<td>Status of the different functions as seen from the terminal</td>
</tr>
<tr>
<td>EmvTransactionStatusInformation</td>
<td>Optional</td>
<td>AN</td>
<td>Identifies the status of the card at the end of the transaction process</td>
</tr>
<tr>
<td>EmvPinVerified</td>
<td>Optional</td>
<td>Y/N</td>
<td>Feedback to know if the PIN was entered</td>
</tr>
<tr>
<td>EmvCryptogram</td>
<td>Optional</td>
<td>AN</td>
<td>EMV cryptogram reference</td>
</tr>
<tr>
<td>EmvCryptogramType</td>
<td>Optional</td>
<td>AN</td>
<td>Cryptogram description</td>
</tr>
<tr>
<td>EmvUnpredictableNumber</td>
<td>Optional</td>
<td>AN</td>
<td>An unpredictable number is generated for each EMV transaction.</td>
</tr>
<tr>
<td>EmvData1</td>
<td>Optional</td>
<td>AN</td>
<td>Any additional EMV data for future use.</td>
</tr>
<tr>
<td>EmvData2</td>
<td>Optional</td>
<td>AN</td>
<td>Any additional EMV data for future use.</td>
</tr>
<tr>
<td>CardHolderName</td>
<td>Optional</td>
<td>AN</td>
<td>For future use</td>
</tr>
<tr>
<td>CardHolderLanguage</td>
<td>Optional</td>
<td>AN</td>
<td>Language used by the cardholder. Format: "language-Country", e.g. "en-GBP".</td>
</tr>
<tr>
<td>MerchantId</td>
<td>Optional</td>
<td>AN</td>
<td>Contract number between the merchant and the invoice company.</td>
</tr>
<tr>
<td>CardIssueNumber</td>
<td>Optional</td>
<td>N</td>
<td>Card issue number. Optional in case the card has been swiped.</td>
</tr>
<tr>
<td>CardStartDate</td>
<td>Optional</td>
<td>N</td>
<td>Card start date. Format MMyy.</td>
</tr>
<tr>
<td>Token</td>
<td>Optional</td>
<td>N</td>
<td>Token, instead of or in addition of card number.</td>
</tr>
<tr>
<td>Message</td>
<td>Optional</td>
<td>AN</td>
<td>Text message which can come from a remote authorization host or from the Integra application.</td>
</tr>
<tr>
<td>PrintData1</td>
<td>Optional</td>
<td>AN</td>
<td>Any additional text to be printed out on the transaction receipt. Or the full merchant receipt, depending on configuration.</td>
</tr>
<tr>
<td>PrintData2</td>
<td>Optional</td>
<td>AN</td>
<td>Any additional text to be printed out on the transaction receipt. Or the full cardholder receipt, depending on configuration.</td>
</tr>
<tr>
<td>CVV2Result</td>
<td>Optional</td>
<td>AN</td>
<td>Result  code of the card verification value.</td>
</tr>
<tr>
<td>AVSResult</td>
<td>Optional</td>
<td>AN</td>
<td>Result code of the address verification.</td>
</tr>
<tr>
<td>DCCMarkup</td>
<td>Optional</td>
<td>N</td>
<td>Markup which is applied to the DCC rate provided by the DCC provider.</td>
</tr>
<tr>
<td>TimeStamp</td>
<td>Optional</td>
<td>N</td>
<td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
</tr>
<tr>
<td>PosEnvironment</td>
<td>Optional</td>
<td>A</td>
<td>POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred.</td>
</tr>
</tbody>
</table>
</div>

<div id="settlement_request" class="request_option container" style="display:block;">
  <table>
  <thead>
  <tr>
  <th>Option</th>
  <th>Optional/Mandatory</th>
  <th>Type</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>SequenceNumber</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>A unique number for the request. The same number should be sent back in the reply. This number has to be used to cancel this message with the cancel message.</td>
  </tr>
  <tr>
  <td>RequesterTransRefNum</td>
  <td>Mandatory</td>
  <td>AN</td>
  <td>This is a unique number related to the Eft transaction payment cycle. This number should be the same for all requests related to a same transaction. Like initial authorization (PreAuth), supplemental authorizations (TopUp) and finally the settlement. The same number is send back in the reply.</td>
  </tr>
  <tr>
  <td>RequesterStationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s station (PMS station, pay on foot parking terminal) making the request.</td>
  </tr>
  <tr>
  <td>RequesterLocationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A reference to the requester’s location making this request.</td>
  </tr>
  <tr>
  <td>ValidationId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential identifier, to authenticate the requester. Provided by the integrator or 3C.</td>
  </tr>
  <tr>
  <td>ValidationCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>A credential password to authenticate the requester. Provided by 3C.</td>
  </tr>
  <tr>
  <td>EmvTerminalId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Reference of EMV terminal used to get EMV card details</td>
  </tr>
  <tr>
  <td>EmvScenarioId</td>
  <td>Optional</td>
  <td>A</td>
  <td>2 bytes Id to indicate the EMV scenario to choose. Default is DT.</td>
  </tr>
  <tr>
  <td>EmvTerminalMessage</td>
  <td>Optional</td>
  <td>A/M</td>
  <td>A free message to be displayed on the terminal. Can contain for instance table number, guest reference, …</td>
  </tr>
  <tr>
  <td>InvoiceId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>The reference printed on the invoice or check number on the receipt.</td>
  </tr>
  <tr>
  <td>ZoneId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use. An identification of the geographical zone (in hotel, restaurant or shop) the request is related to. With this parameter specific EMV terminals are associated to zones.</td>
  </tr>
  <tr>
  <td>AttendantId</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use. An identification of the operator or waiter. To associate requests to specific attendant.</td>
  </tr>
  <tr>
  <td>CardNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card PAN. No start and end sentinel.</td>
  </tr>
  <tr>
  <td>Token</td>
  <td>Optional</td>
  <td>N</td>
  <td>Token, instead of or in addition of card number.</td>
  </tr>
  <tr>
  <td>CardExpiryDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card expiration date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardInputMethod</td>
  <td>Optional</td>
  <td>A</td>
  <td>"E" for EMV terminal, "S" for swiped, "M" for manual entered.</td>
  </tr>
  <tr>
  <td>Amount</td>
  <td>Mandatory</td>
  <td>N</td>
  <td>Amount of the request.</td>
  </tr>
  <tr>
  <td>Currency</td>
  <td>Optional</td>
  <td>A</td>
  <td>Currency of the request. 3 character ISO definition: EUR, USD, … In case no currency is provided, the local currency is used.</td>
  </tr>
  <tr>
  <td>AuthCodeInputMethod</td>
  <td>Optional</td>
  <td>A</td>
  <td>"A" for automatic, "M" for manual entry</td>
  </tr>
  <tr>
  <td>BankAuthCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Authorization code received from the acquirer.</td>
  </tr>
  <tr>
  <td>BankResultCode</td>
  <td>Optional</td>
  <td>N</td>
  <td>Result code from the bank in case of online authorization.</td>
  </tr>
  <tr>
  <td>ResultReason</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Indicates the reason of the result. XB (local bad card type), …</td>
  </tr>
  <tr>
  <td>TimeStamp</td>
  <td>Optional</td>
  <td>N</td>
  <td>Time of the terminal with the format "yyyyMMddHHmmss". If you do not want to set the time just do not send the tag "TimeStamp" at all. The time is local time.</td>
  </tr>
  <tr>
  <td>AmountAuthorized</td>
  <td>Optional</td>
  <td>N</td>
  <td>Amount which has been finally authorized.</td>
  </tr>
  <tr>
  <td>AmountVAT</td>
  <td>Optional</td>
  <td>N</td>
  <td>Amount VAT.</td>
  </tr>
  <tr>
  <td>AmountExtra</td>
  <td>Optional</td>
  <td>N</td>
  <td>An extra amount (e.g. gratuity). In case a gratuity is added by using an EMV terminal the amount entered is sent back in the reply.</td>
  </tr>
  <tr>
  <td>CardTrack1Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 1 raw data.</td>
  </tr>
  <tr>
  <td>CardTrack2Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 2 raw data. Mandatory in case the card is swiped.</td>
  </tr>
  <tr>
  <td>CardTrack3Data</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card track 3 raw data.</td>
  </tr>
  <tr>
  <td>CardStartDate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card start date. Format MMyy.</td>
  </tr>
  <tr>
  <td>CardIssueNumber</td>
  <td>Optional</td>
  <td>N</td>
  <td>Card issue number. Optional in case the card has been swiped.</td>
  </tr>
  <tr>
  <td>UserData1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.  This field might be printed out on the payment receipt.</td>
  </tr>
  <tr>
  <td>UserData2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>UserData3</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>UserData4</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Any data the integrator wants to have saved with the request.</td>
  </tr>
  <tr>
  <td>DCCFlag</td>
  <td>Optional</td>
  <td>Y/N</td>
  <td>Flag indicating the transaction is a DCC one or not. Default = N. Only required for NONEMV processing, and ignored in case a terminal is used.</td>
  </tr>
  <tr>
  <td>LocalAmount</td>
  <td>Optional</td>
  <td>N</td>
  <td>Amount of the request, in the local currency.</td>
  </tr>
  <tr>
  <td>LocalCurrency</td>
  <td>Optional</td>
  <td>A</td>
  <td>The local currency.</td>
  </tr>
  <tr>
  <td>BinRate</td>
  <td>Optional</td>
  <td>N</td>
  <td>Some Rate</td>
  </tr>
  <tr>
  <td>BinAmount</td>
  <td>Optional</td>
  <td>N</td>
  <td>Amount of the request, in the bin currency.</td>
  </tr>
  <tr>
  <td>BinCurrency</td>
  <td>Optional</td>
  <td>A</td>
  <td>The bin currency.</td>
  </tr>
  <tr>
  <td>CardholderNameFirst</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderNameLast</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderStreetAddress1</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Used with AVS (Address Verification)</td>
  </tr>
  <tr>
  <td>CardholderStreetAddress2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCity</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderZipCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Used with AVS (Address Verification)</td>
  </tr>
  <tr>
  <td>CardholderState</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCountry</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderCompany</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CardholderEmail</td>
  <td>Optional</td>
  <td>AN</td>
  <td>For future use</td>
  </tr>
  <tr>
  <td>CVV2</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Card verification value.</td>
  </tr>
  <tr>
  <td>MarketData</td>
  <td>Optional</td>
  <td>AN</td>
  <td>Market specific data. Refer to section “Market Specific Data” for more information on the data tag names.</td>
  </tr>
  <tr>
  <td>TdsAuthentResultCode</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Transaction Status (TC)</td>
  </tr>
  <tr>
  <td>TdsAuthentIndicator</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Electronic Commerce Indicator (ECI), Mastercard Universal Card Authentication Field (UCAF)</td>
  </tr>
  <tr>
  <td>TdsAuthentCryptogram</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Cardholder Authentication Verification Value (CAVV), Mastercard Account Authentication Value (AAV)</td>
  </tr>
  <tr>
  <td>TdsTransIdentifier</td>
  <td>Optional</td>
  <td>AN</td>
  <td>3DS Visa Transaction Identifier (XID)</td>
  </tr>
  <tr>
  <td>PosEnvironment</td>
  <td>Optional</td>
  <td>A</td>
  <td>POS Environment indicator. "M" for MOTO, "R" for Recurring, "I" for Installment, "D" for Deferred</td>
  </tr>
  </tbody>
  </table>
</div>

