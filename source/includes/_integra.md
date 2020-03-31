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

Creates an instance of Integra. It needs a [communication context](#communications) and an handler for status updates.

Parameter| Type | Description
---------| ---- | -----------
context | [CommunicationContext](#communications) | The communication context.
handler | [IStatusUpdateHandler](#istatusupdatehandler) | A callback function where the status updates are handled.

### Send Request Method

```java
integra.sendRequest(request, handler);
```

```csharp
integra.SendRequest(request, handler);
```

Sends a request to the terminal. It needs a [request](#requests) and an handler for the response.

Parameter| Type | Description
---------| ---- | -----------
request | [Request](#requests) | The request to send.
handler | [IResponseHandler](#iresponsehandler) | A callback function where the response is handled.

# Handlers
## IStatusUpdateHandler
```java
void onStatusUpdate(StatusUpdate status);
```
```csharp
void onStatusUpdate(StatusUpdate status);
```

This interface contains a method to be called back on a Status update.

## IResponseHandler
```java
void onResponse(Response response);
```
```csharp
void onResponse(Response response);
```

This interface contains a method to be called back on when a response to the request is received.
