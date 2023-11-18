package com.medeye.s3upload;

import java.io.IOException;
import java.io.InputStream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import software.amazon.awssdk.awscore.exception.AwsServiceException;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.core.waiters.WaiterResponse;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.HeadObjectRequest;
import software.amazon.awssdk.services.s3.model.HeadObjectResponse;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.waiters.S3Waiter;

public class S3Util {
	private static final String Bucket = "ayoub123f";
	private static final String url_body = "https://ayoub123f.s3.eu-west-3.amazonaws.com/images/";
	private static final S3Client client = S3Client.builder().build();

	public static void uploadFile(String fileName, InputStream inputStream) throws S3Exception, AwsServiceException, SdkClientException, IOException {
		PutObjectRequest request = PutObjectRequest.builder()
				.bucket(Bucket)
				.key("images/" + fileName)
				.build();

		client.putObject(request, RequestBody.fromInputStream(inputStream, inputStream.available()));

	}

    public static String waitFileUrl(String fileName) {

		    String[] fileUrl = {""};

		    S3Waiter waiter = client.waiter();
			HeadObjectRequest waitRequest = HeadObjectRequest.builder()
					.bucket(Bucket)
					.key("images/" + fileName)
					.build();
			WaiterResponse<HeadObjectResponse> waitResponse = waiter.waitUntilObjectExists(waitRequest);

			waitResponse.matched().response().ifPresent( (x) -> {
				fileUrl[0] = url_body + fileName;
			});



		return fileUrl[0];
    }

	public static String renameFile(String fileName){

		Pattern pattern = Pattern.compile("[^a-zA-Z0-9.]");
		Matcher matcher = pattern.matcher(fileName);

        return matcher.replaceAll("");
	}
	
	
	

}
