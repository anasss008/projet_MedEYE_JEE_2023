package com.medeye.s3upload;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class PostReq {
    private static final String modelApi = "https://6kraqssbjj.execute-api.eu-north-1.amazonaws.com/recognizer/predict";


    public static ResponseEntity<String> modifyJson(String response, String fileUrl){

        // Create the JSON response as a string
        String jsonResponse = "{\"prediction\":\"" +
                response.replaceAll("[^0-9.e\\-]","").substring(1) +
                "\", \"url\":\"" + fileUrl + "\"}";

        // Return the JSON response as a string
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return ResponseEntity.ok().headers(headers).body(jsonResponse);
    }

    public static String send(String object_url) throws IOException {
        RestTemplate restTemplate = new RestTemplate();

        // Create headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Create request body as a JSON string
        String requestBodyJson = "{\"url\":\"" + object_url + "\"}";

        // Create the HttpEntity with headers and body
        HttpEntity<String> request = new HttpEntity<>(requestBodyJson, headers);

        // Send the POST request
        ResponseEntity<String> response = restTemplate.exchange(
                modelApi,
                HttpMethod.POST,
                request,
                String.class);

        // Return the response body
        return response.getBody();
    }
}
