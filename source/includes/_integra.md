# Integra

This is the starting point for this API, basically where messages are sent and received.

## Methods
### Constructor
```java
Integra integra = new Integra(context, handler);
```

```csharp
Integra integra = new Integra(context, handler);
```

Creates an instance of Integra. It needs a [communication context](#communicationcontext) and an [handler for status updates](#istatusupdatehandler).

Parameter| Type | Description
---------| ---- | -----------
context | [CommunicationContext](#communicationcontext) | The communication context.
handler | [IStatusUpdateHandler](#istatusupdatehandler) | A callback function where the status updates are handled.

### Send Request Method

```java
integra.sendRequest(request, handler);
```

```csharp
integra.SendRequest(request, handler);
```

Sends a request to the terminal. It needs a [request](#request) and an handler for the response.

Parameter| Type | Description
---------| ---- | -----------
request | [Request](#request) | The request to send.
handler | [IResponseHandler](#iresponsehandler) | A callback function where the response is handled.


### Connect Method
```java
integra.connect();
```
```csharp
integra.connect();
```
Starts the connection between the POS and the terminal.

# Handlers
## IStatusUpdateHandler
```java
void onStatusUpdate(StatusUpdate status);
```
```csharp
void onStatusUpdate(StatusUpdate status);
```

This interface contains a method to be called back on a Status update.

Parameter| Type | Description
---------| ---- | -----------
status | [StatusUpdate](#statusupdate) | The status update received.

## IResponseHandler
```java
void onResponse(Response response);
```
```csharp
void onResponse(Response response);
```

This interface contains a method to be called back on when a response to the request is received.

Parameter| Type | Description
---------| ---- | -----------
response | [Response](#response) | The response received.

## Response
This contains the information about a response to a certain request.

### Methods
```java
Map<String, String> getOption();
```
```csharp
IDictionary<string, string> getOption();
```

Returns the map with the options of the response. 

## StatusUpdate
This contains the information of a status update.

### Methods
```java
Map<String, String> getOption();
```
```csharp
IDictionary<string, string> getOption();
```

Returns the map with the options of the status update. 


