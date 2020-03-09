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

Type | Description
---------- | -------
PRE_AUTH | Performs an authorization for an amount not necessarily equal to the final transaction amount, using EMV terminal. Card (EMV) data read by terminal. Pin entry.
TOP_UP |
PRE_AUTH_REVERSAL | 
TOP_UP_REVERSAL | 
SALE | Sale using EMV terminal. EMV data read by terminal. Pin entry.
REFUND | Refund using EMV terminal. EMV data read by terminal. Pin entry optional. 
COMPLETION | Terminal used for completion, e.g. to provide confirmation or printout. 
SALE_REVERSAL | 
REFUND_REVERSAL | 
COMPLETION_REVERSAL | 
CARD_CHECK | Validate the card data received in the request.
CARD_CHECK_VALIDATE | Validate the card read by an EMV terminal. Card might stay in the terminal after reading.
CARD_CHECK_REMOVE | Validate the card read by an EMV terminal. Card is removed from the terminal after reading. 
INFO | 
TERMINAL_ACTIVATE | 
TERMINAL_DEACTIVATE | 
TERMINAL_LANGUAGE | 
TERMINAL_SLEEP | 
CANCEL | Cancel a message sent before. 
CHECK_STATUS | Status request. Returns if the application is operational or not.
SHIFT_OPEN | Open the reconciliation period. ShiftClose 
SHIFT_CLOSE | Close the reconciliation period. 
SHIFT_CLOSE_OPEN | Close then open the reconciliation period. 
