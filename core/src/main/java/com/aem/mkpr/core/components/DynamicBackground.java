package com.aem.mkpr.core.components;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;
import javax.inject.Named;

@Model(adaptables=Resource.class)

public class DynamicBackground {
    @Inject @Named("backgroundstyle") @Default(values = "Select")
    private String backgroundstyle;

    public String getBackgroundstyle() {
        return backgroundstyle;
    }


}

