package com.aem.mkpr.core.components;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;
import javax.inject.Named;

@Model(adaptables=Resource.class)

public class Card {

    @Inject @Default(values = "Enter Title")
    private String title;
    @Inject @Default(values = "Enter Paragraph")
    private String text;
    @Inject @Default(values = "/content/dam/mkpr/asset.jpg")
    private String fileReference;

    public String getFileReference() {

        return fileReference;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {

        return text;
    }

}
