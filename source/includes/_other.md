# Other
## Response
This contains the information about a response to a certain request.

### Methods
```java
String getValue(String key);
```
```csharp
string getValue(string key);
```

Obtains a certain value for a option given its key.

Parameter| Type | Description
---------| ---- | -----------
key | String | The key string of the option to look for.

## StatusUpdate
This contains the information of a status update.

### Methods
```java
String getValue(String key);
```
```csharp
string getValue(string key);
```

Obtains a certain value for a option given its key.

Parameter| Type | Description
---------| ---- | -----------
key | String | The key string of the option to look for.

## RequestFactory
This allows for the creation of requests more easily.

### Methods
### getInstance
```java
static RequestFactory getInstance()
```
```csharp
static RequestFactory getInstance()
```

Obtains an instance of the request factory.

### createRequest

```java
Request createRequest(RequestType type, HashMap<String, String> options)
```
```csharp
Request CreateRequest(RequestType type, Dictionary<String, String> options)
```

Creates a Request given its types and options.

Parameter| Type | Description
---------| ---- | -----------
type | [RequestType](#requesttype) | The type of the request.
options | HashMap<String,String> | An HashMap with the options of the request.

