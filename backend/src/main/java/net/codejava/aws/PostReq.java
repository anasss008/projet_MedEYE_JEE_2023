package net.codejava.aws;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
public class PostReq {

    public static class ReqBod {
        String url;

        public ReqBod(String url) {
            this.url = url;
        }
    }

    public String send(String object_url) throws IOException {
    	
        ReqBod r = new ReqBod(object_url);
        // Serialize the request body to JSON
        String requestBody = "{\"url\":\"" + r.url + "\"}";
        String response = "";

        URL url = new URL("https://6kraqssbjj.execute-api.eu-north-1.amazonaws.com/recognizer/predict");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("User-Agent", "Mozilla/5.0");

        // Send the request to the API
        try (DataOutputStream dos = new DataOutputStream(conn.getOutputStream())) {
            dos.writeBytes(requestBody);
        }

        // Check the response code to ensure a successful request
        int responseCode = conn.getResponseCode();
        System.out.println("Response code: " + responseCode);

        // Read and print the response from the API
        if (responseCode == HttpURLConnection.HTTP_OK) {
            try (BufferedReader bf = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                String line;
                while ((line = bf.readLine()) != null) {
                    response += line;
                }
            }
        } else {
            response = "Failed to get a successful response from the API.";
        }
       return response;
    }
}
